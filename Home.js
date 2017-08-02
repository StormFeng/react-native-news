import React,{Component} from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    BackHandler,
    ToastAndroid,
} from 'react-native';
import * as Color from './Color';
import Divider from './view/Divider';
import Item from "./Item";
import HeaderOrFooter from "./view/HeaderOrFooter";
import {StackNavigator,} from 'react-navigation';
import NewsDetail from './NewsDetail';

const APIURL = 'http://v.juhe.cn/weixin/query?key=6137d567e4bb6d3f07f87c2d088f2b7b';
class NewsList extends Component{
    constructor(props) {
        super(props);
        this.onPressItem = this.onPressItem.bind(this);
        this._onBackAndroid = this._onBackAndroid.bind(this);
        this.state={
            data:null,
        }
    }
    render(){
        return(
            <View style={styles.flex}>
                <FlatList
                    ListHeaderComponent={<HeaderOrFooter/>}
                    ListFooterComponent={<HeaderOrFooter title='End'/>}
                    ItemSeparatorComponent={Divider}
                    // ListEmptyComponent={<EmptyView/>}
                    data={this.state.data}
                    renderItem={({item})=><Item
                        title={item.title}
                        imgUrl={item.firstImg}
                        url={item.url.toString()}
                        onPressItem={this.onPressItem}/>}/>
            </View>
        );
    }
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress',this._onBackAndroid);
        this.getData();
    }
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress',this._onBackAndroid);
    }
    getData(){
        fetch(APIURL)
            .then((response)=>response.json())
            .then((responseData)=>{
            ToastAndroid.show(responseData.reason,ToastAndroid.SHORT);
                this.setState({
                    data:responseData.result.list,
                });
            })
            .done();
    }
    onPressItem(url:string,title:string){
        const { navigate } = this.props.navigation;
        navigate('NewsDetail',{url:url,title:title});
    }

    _onBackAndroid(){
        if(this.lastBackPressed && this.lastBackPressed+2000 >= Date.now()){
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
        return true;
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.BACKGROUNDCOLOR,
    }
});

const Home = StackNavigator({
    NewsList:{
        screen:NewsList,
        navigationOptions:{
            title:'精选',
        }
    },
    NewsDetail:{screen:NewsDetail},
},{
    headerMode:'float',
});

export default Home;