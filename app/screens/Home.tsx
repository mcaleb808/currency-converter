import React, { Component } from 'react';

import { View, StatusBar } from 'react-native';

import { Container } from '../components/container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'RWF';
const TEMP_BASE_PRICE = '1';
const TEMP_QUOTE_PRICE = '951.36';
const TEMP_CONVERSION_RATE = 951.36;
const TEMP_CONVERSION_DATE = new Date();

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

  handleSwapCurrencies = () => {
    console.log('hiiiiii');
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
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          date={TEMP_CONVERSION_DATE}
          conversionRate={TEMP_CONVERSION_RATE}
        />
        <ClearButton
          text="Reverse Currencies"
          onPress={this.handleSwapCurrencies}
        />
      </Container>
    );
  }
}

export default Home;
