import React,{Component,PropTypes} from 'react';
import {View,Image,Text,TouchableHighlight,StyleSheet} from 'react-native';
import * as Color from './Color';

export default class Item extends Component{
    constructor(props){
        super(props);
        this.onPress = this.onPress.bind(this);
    }
    render() {
        return (
            <TouchableHighlight onPress={this.onPress}>
                <View style={styles.container}>
                    <Image style={styles.imageStyle}
                           source={{uri:this.props.imgUrl}}/>
                        <Text style={styles.textStyle}>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
    onPress(){
        this.props.onPressItem(this.props.url,this.props.title);
    }
}

Item.propTypes={
    imgUrl:PropTypes.string,
    title:PropTypes.string,
    onPressItem:PropTypes.func,
    url:PropTypes.string,
};

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:Color.BACKGROUNDCOLOR,
        flexDirection:'row',
        alignItems:'center',
    },
    imageStyle:{
        width:70,
        height:70,
    },
    textStyle:{
        flex:1,
        marginLeft:10,
        fontSize:14,
    }
});