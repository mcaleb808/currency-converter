import React, { Component } from 'react';

import { View, StatusBar } from 'react-native';

import { Container } from '../components/container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'RWF';
const TEMP_BASE_PRICE = '1';
const TEMP_QUOTE_PRICE = '951.36';

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('pressed base');
  };

  handlePressQuoteCurrency = () => {
    console.log('pressed quote');
  };

  handleTextChange = text => {
    console.log(text);
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          editable={false}
          onPress={this.handlePressQuoteCurrency}
          defaultValue={TEMP_QUOTE_PRICE}
        />
      </Container>
    );
  }
}

export default Home;
