import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { changeCurrencyAmount, swapCurrency } from '../actions/currencies';

class Home extends Component<{}, { value: any }> {
  handlePressBaseCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base'
    });
  };

  handlePressQuoteCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote'
    });
  };

  handleTextChange = amount => {
    const { dispatch } = this.props;
    dispatch(changeCurrencyAmount(amount));
  };

  handleSwapCurrencies = () => {
    const { dispatch } = this.props;
    dispatch(swapCurrency());
  };

  handleOptionPress = () => {
    console.log('fuck off');
    this.props.navigation.navigate('Options');
  };

  render() {
    const {
      isFetching,
      amount,
      conversionRate,
      baseCurrency,
      quoteCurrency,
      lastConvertedDate,
      primaryColor
    } = this.props;

    let quotePrice = '...';
    if (!isFetching) {
      quotePrice = (amount * conversionRate).toFixed(2);
    }
    return (
      <Container backgroundColor={primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <Logo tintColor={primaryColor} />

        <InputWithButton
          buttonText={baseCurrency}
          onPress={this.handlePressBaseCurrency}
          defaultValue={amount.toString()}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
          textColor={primaryColor}
        />
        <InputWithButton
          buttonText={quoteCurrency}
          editable={false}
          onPress={this.handlePressQuoteCurrency}
          value={quotePrice}
          textColor={primaryColor}
        />
        <LastConverted
          date={lastConvertedDate}
          base={baseCurrency}
          quote={quoteCurrency}
          conversionRate={conversionRate}
        />
        <ClearButton
          text="Reverse Currencies"
          onPress={this.handleSwapCurrencies}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    isFetching: conversionSelector.isFetching,
    primaryColor: state.theme.primaryColor
  };
};

export default connect(mapStateToProps)(Home);
