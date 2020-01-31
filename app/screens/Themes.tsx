import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { changePrimaryColor } from '../actions/themes';
import { ListItem, Separator } from '../components/List';

class Themes extends Component<any> {
  handleThemesPress = color => {
    const { navigation, dispatch } = this.props;
    dispatch(changePrimaryColor(color));
    navigation.navigate('Home');
  };
  render() {
    return (
      <ScrollView>
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

export default connect()(Themes);
