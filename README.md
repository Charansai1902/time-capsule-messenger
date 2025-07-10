# 🕰️ Time Capsule Messenger

A digital time capsule messenger that allows users to compose messages and schedule them for future delivery. Send heartfelt messages to your future self or others at the perfect moment.

## ✨ Features

### MVP Features
- ✍️ **Compose Messages**: Write heartfelt text messages
- 📆 **Schedule Delivery**: Select future delivery date and time
- 📧 **Email Recipients**: Send to any email address
- 🔐 **Secure Storage**: Messages stored securely in MongoDB
- ⏰ **Automated Delivery**: Scheduled email delivery via cron jobs
- ✅ **Confirmation Screen**: Beautiful confirmation after sending

### Planned Features (Phase 2)
- 🎥 **Video Messages**: Record video messages using Webcam API
- 📎 **File Attachments**: Attach images and small files
- 🗃️ **Dashboard**: View scheduled and past messages
- 🛡️ **Message Encryption**: Enhanced privacy and security
- 🔔 **Reminder Emails**: Notifications before delivery
- 👤 **User Authentication**: Login and user management

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **React DatePicker** - Date/time selection
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Nodemailer** - Email sending
- **Node-cron** - Scheduled tasks
- **Express-validator** - Input validation

### Infrastructure
- **Vercel** - Frontend hosting
- **Render/Firebase** - Backend hosting
- **MongoDB Atlas** - Cloud database

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Gmail account for email sending
  
## 📸 Screenshots
| 📝 Home Screen | 📆 Message | ✅ Shchedule Delivery  |
|--------------------|----------------------|------------------------|
| ([MainPage.png](https://github.com/Charansai1902/time-capsule-messenger/blob/main/%20MainPage.png)) | ![Schedule](https://your-image-link.com/schedule.png) | ![Confirmation](https://your-image-link.com/confirmation.png) |


### Frontend Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/time-capsule-messenger
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start backend server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
time-capsule-messenger/
├── public/                 # Static files
├── src/
│   ├── components/         # React components
│   │   ├── HomePage.js
│   │   ├── ComposePage.js
│   │   └── ConfirmationPage.js
│   ├── context/           # React context
│   │   └── MessageContext.js
│   ├── services/          # API services
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── backend/
│   ├── models/            # MongoDB models
│   │   └── Message.js
│   ├── routes/            # API routes
│   │   └── messages.js
│   ├── server.js          # Express server
│   └── package.json
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Cream**: `#FDF6E3` - Background
- **Beige**: `#F5F5DC` - Secondary background
- **Warm Gray**: `#8B7355` - Text
- **Accent Gold**: `#DAA520` - Primary actions
- **Nostalgic Brown**: `#D2B48C` - Borders

### Typography
- **Handwritten**: Caveat - For nostalgic feel
- **Elegant**: Playfair Display - For headings
- **Clean**: Inter - For body text

### Components
- **Cards**: Rounded corners with soft shadows
- **Buttons**: Gold gradient with hover effects
- **Inputs**: Clean borders with focus states

## 🔧 API Endpoints

### Messages
- `POST /api/messages` - Create new message
- `GET /api/messages` - Get all messages (admin)
- `GET /api/messages/:id` - Get specific message
- `PATCH /api/messages/:id/cancel` - Cancel message
- `GET /api/messages/stats/overview` - Get statistics
- `GET /api/messages/upcoming/deliveries` - Get upcoming deliveries

### Health
- `GET /api/health` - API health check

## 📧 Email Delivery

The application uses a cron job that runs every minute to check for messages that need to be delivered. When a message's delivery date arrives:

1. **Email Generation**: Creates a beautifully formatted HTML email
2. **Delivery**: Sends via Nodemailer using Gmail SMTP
3. **Status Update**: Marks message as delivered in database
4. **Logging**: Records delivery success/failure

## 🧪 Testing

### Frontend Tests
```bash
npm test
```

### Backend Tests
```bash
cd backend
npm test
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`
4. Add environment variables for API URL

### Backend (Render)
1. Connect GitHub repository to Render
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables

### Database (MongoDB Atlas)
1. Create MongoDB Atlas cluster
2. Set up database access
3. Configure network access
4. Update connection string in environment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Charan Sai** - Time Capsule Messenger

---

*"Create meaningful connections across time"* ✨ 
