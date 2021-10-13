import React, { Component } from 'react';
import { Props, IState } from './interfaces';
import { Text } from 'src/components/common/UI/Text';
import { TextVariantTagName } from 'src/types/enums';

export class ErrorBoundary extends Component<Props, IState> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <Text variant={TextVariantTagName.h1}>Что-то пошло не так</Text>;
    }

    return <>{children}</>;
  }
}
