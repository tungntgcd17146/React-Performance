import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  error?: string;
};
type State = {
  hasError: boolean;
};
class ErrorBoundary extends React.Component<Props, State> {
  static defaultProps = {
    error: 'Something went wrong!'
  };

  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const errorMessage = this.props.error;

    if (this.state.hasError) {
      return (
        <div>
          <pre className="mt-3">{errorMessage}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
