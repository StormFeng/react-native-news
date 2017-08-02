import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import * as Color from '../Color';
export default class Header extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>- - -  {this.props.title}  - - -</Text>
            </View>
        );
    }
}
Header.defaultProps = {
    title:'Start',
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:3,
        backgroundColor:Color.BACKGROUNDCOLOR,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    }
});
