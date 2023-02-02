import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Whoops, something went wrong!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
