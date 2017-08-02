import React,{Component} from 'react';
import {View,Image} from 'react-native';
var Dimensions = require('Dimensions');
var ScreenHeight = Dimensions.get('window').height;
export default class EmptyView extends Component{
    render() {
        return (
                <Image style={{flex:1,}} source={require('../image/loading.gif')}/>
        );
    }
}