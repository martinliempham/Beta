import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  ScrollView
} from 'react-native';
const styles = './app/style';
import Toolbar from './app/components/Toolbar/Toolbar';
import firebase from 'react-native-firebase';

export default class App extends React.Component {
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
        <View style={styles.container}>
          <Toolbar title="Beta" />
        </View>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('Beta', () => App);
