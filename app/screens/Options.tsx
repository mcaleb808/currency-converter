import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Separator, ListItem } from '../components/List';
import { Ionicons } from '@expo/vector-icons';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  handlePressTheme = () => {
    console.log('theme clicked');
  };

  handleSitePress = () => {
    console.log('press site');
  };

  render() {
    return (
      <ScrollView style={{ marginTop: 50 }}>
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
          text="FIxer.io"
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
