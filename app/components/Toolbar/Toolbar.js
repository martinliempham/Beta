import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';
import firebase from 'react-native-firebase';

const styles = require('../../style');

export default class Toolbar extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
  }

  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="coral" barStyle="light-content" />
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
        </View>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('Toolbar', () => Toolbar);
