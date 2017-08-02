import React,{Component} from 'react';
import {StyleSheet,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";
import Home from './Home';
import About from "./About";
import * as Color from './Color';


export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'首页',
        }
    }
    render(){
        return(
            <TabNavigator>
                <TabNavigatorItem
                    selected={this.state.selectedTab === '首页'}
                    title="首页"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.tabSelectText}
                    renderIcon={()=><Image style={styles.tabImage} source={require('./image/news_unselect.png')}/>}
                    renderSelectedIcon={()=><Image style={styles.tabImage} source={require('./image/news_select.png')}/>}
                    onPress={()=>this.setState({selectedTab:'首页'})}>
                    <Home/>
                </TabNavigatorItem>
                <TabNavigatorItem
                    selected={this.state.selectedTab === '关于'}
                    title="关于"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.tabSelectText}
                    renderIcon={()=><Image style={styles.tabImage} source={require('./image/about_unselect.png')}/>}
                    renderSelectedIcon={()=><Image style={styles.tabImage} source={require('./image/about_select.png')}/>}
                    onPress={()=>this.setState({selectedTab:'关于'})}>
                    <About/>
                </TabNavigatorItem>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tabText:{
        color:Color.GRAY,
        fontSize:14,
    },
    tabSelectText:{
        color:Color.RED,
        fontSize:14,
    },
    tabImage:{
        width:20,
        height:20,
    }
});