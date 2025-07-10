const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, 'Message content is required'],
    maxlength: [5000, 'Message cannot exceed 5000 characters']
  },
  recipientEmail: {
    type: String,
    required: [true, 'Recipient email is required'],
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  deliveryDate: {
    type: Date,
    required: [true, 'Delivery date is required'],
    validate: {
      validator: function(value) {
        return value > new Date();
      },
      message: 'Delivery date must be in the future'
    }
  },
  isDelivered: {
    type: Boolean,
    default: false
  },
  isCancelled: {
    type: Boolean,
    default: false
  },
  deliveredAt: {
    type: Date,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for efficient querying of undelivered messages
messageSchema.index({ 
  deliveryDate: 1, 
  isDelivered: 1, 
  isCancelled: 1 
});

// Index for recipient email queries
messageSchema.index({ recipientEmail: 1 });

// Pre-save middleware to update updatedAt
messageSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Virtual for time until delivery
messageSchema.virtual('timeUntilDelivery').get(function() {
  if (this.isDelivered || this.isCancelled) return null;
  return this.deliveryDate - new Date();
});

// Method to check if message can be cancelled
messageSchema.methods.canBeCancelled = function() {
  return !this.isDelivered && !this.isCancelled && this.deliveryDate > new Date();
};

// Method to cancel message
messageSchema.methods.cancel = function() {
  if (this.canBeCancelled()) {
    this.isCancelled = true;
    return this.save();
  }
  throw new Error('Message cannot be cancelled');
};

// Static method to get upcoming deliveries
messageSchema.statics.getUpcomingDeliveries = function(limit = 10) {
  return this.find({
    deliveryDate: { $gt: new Date() },
    isDelivered: false,
    isCancelled: false
  })
  .sort({ deliveryDate: 1 })
  .limit(limit);
};

// Static method to get delivery statistics
messageSchema.statics.getDeliveryStats = function() {
  return this.aggregate([
    {
      $group: {
        _id: null,
        total: { $sum: 1 },
        delivered: { $sum: { $cond: ['$isDelivered', 1, 0] } },
        cancelled: { $sum: { $cond: ['$isCancelled', 1, 0] } },
        pending: { 
          $sum: { 
            $cond: [
              { $and: [{ $not: '$isDelivered' }, { $not: '$isCancelled' }] }, 
              1, 
              0 
            ] 
          } 
        }
      }
    }
  ]);
};

module.exports = mongoose.model('Message', messageSchema); 