import React from 'react';

class ErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    return hasError ? <h1>Something went wrong.</h1> : children;
  }
}

export type ErrorBoundaryProps = {
  children: React.ReactNode;
};
export default ErrorBoundary;
