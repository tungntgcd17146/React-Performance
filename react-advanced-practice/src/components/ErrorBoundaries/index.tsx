import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

type MyProps = {
  children: ReactNode;
  error: Error;
};
type MyState = {
  hasError: boolean;
};
class ErrorBoundary extends React.Component {
  static propTypes: { children: PropTypes.Requitable<string> };
  constructor(props: MyProps) {
    super(props);
  }

  state: MyState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <pre className="mt-3">Something went wrong!</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.string
};
