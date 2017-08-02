import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

class AboutScreen extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{textAlign:'center',fontSize:16,lineHeight:24}}>StormFeng,{'\n'}a react-native lover!</Text>
            </View>
        );
    }
}

const About = StackNavigator({
    About:{
        screen:AboutScreen,
        navigationOptions:{
            title:'关于',
        }
    },
});
export default About;
