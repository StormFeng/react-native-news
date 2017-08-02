/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import * as Color from './Color';
import Main from "./Main";

export default class news extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <View style={styles.container}>
          <Main style={{flex:1}}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.BACKGROUNDCOLOR,
    }
});

AppRegistry.registerComponent('news', () => news);
