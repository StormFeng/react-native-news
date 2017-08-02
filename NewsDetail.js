import React,{Component} from 'react';
import {View,WebView,ToastAndroid} from 'react-native';

const APIURL = 'http://news-at.zhihu.com/api/4/news/';
export default class NewsDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            data:null,
        }
    }
    static navigationOptions = ({navigation}) => ({
        title:`${navigation.state.params.title}`,
    });
    render(){
        const { params } = this.props.navigation.state;
        return(
            <View style={{flex:1}}>
                <WebView
                    style={{flex:1}}
                    automaticallyAdjustContentInsets={true}
                    javaScriptEnabled={true}
                    source={{uri:params.url}}/>
            </View>
        );
    }
}