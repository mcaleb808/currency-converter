import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

class Themes extends Component {
  handleThemesPress = color => {
    console.log('press them' + color);
  };
  render() {
    return (
      <ScrollView style={{ paddingTop: 50 }}>
        <StatusBar barStyle="default" translucent={false} />
        <ListItem
          text="Blue"
          onPress={() => this.handleThemesPress('#4F6D7A')}
          selected
          checkmark={false}
          iconBackground="#4F6D7A"
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handleThemesPress('#D57A66')}
          selected
          checkmark={false}
          iconBackground="#D57A66"
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handleThemesPress('#00BD9D')}
          selected
          checkmark={false}
          iconBackground="#00BD9D"
        />
        <Separator />
        <ListItem
          text="Pupple"
          onPress={() => this.handleThemesPress('#9E768F')}
          selected
          checkmark={false}
          iconBackground="#9E768F"
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Themes;
