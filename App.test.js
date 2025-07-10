import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MessageProvider } from './context/MessageContext';
import App from './App';

// Mock the components to avoid complex testing setup
jest.mock('./components/HomePage', () => {
  return function MockHomePage() {
    return <div data-testid="home-page">Home Page</div>;
  };
});

jest.mock('./components/ComposePage', () => {
  return function MockComposePage() {
    return <div data-testid="compose-page">Compose Page</div>;
  };
});

jest.mock('./components/ConfirmationPage', () => {
  return function MockConfirmationPage() {
    return <div data-testid="confirmation-page">Confirmation Page</div>;
  };
});

const renderWithProviders = (component) => {
  return render(
    <MessageProvider>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </MessageProvider>
  );
};

test('renders app without crashing', () => {
  renderWithProviders(<App />);
  expect(screen.getByTestId('home-page')).toBeInTheDocument();
});

test('app has correct background styling', () => {
  renderWithProviders(<App />);
  const appContainer = screen.getByTestId('home-page').closest('.min-h-screen');
  expect(appContainer).toHaveClass('bg-cream');
}); 