import React, { Component } from 'react';
import { ScrollView, StatusBar, Linking } from 'react-native';
import { Separator, ListItem } from '../components/List';
import { Ionicons } from '@expo/vector-icons';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component<any> {
  handlePressTheme = () => {
    this.props.navigation.navigate('Themes');
  };

  handleSitePress = () => {
    Linking.openURL('https://github.com/mcaleb808').catch(() =>
      alert('An error occured')
    );
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressTheme}
          customIcon={
            <Ionicons
              name="ios-arrow-forward"
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          }
        />
        <Separator />
        <ListItem
          text="About Us"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons name="ios-link" size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Options;
