import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import HomeScreen from '../pages/HomeScreen';
import TaskListScreen from '../pages/TaskListScreen';
import AddTaskScreen from '../pages/AddTaskScreen';
import StatisticsScreen from '../pages/StatisticsScreen';
import IdeasScreen from '../pages/IdeasScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            headerShown:false,
            tabBarStyle: {
                position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 90,
        ... styles.shadow
            }
        }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image
                source={require('../assets/house-black-silhouette-without-door.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#000'
                }} 
                />
                <Text
                style={{color: focused ? '#e32f45' : '#000',
                        fontSize: 12}} >
                        Home
                </Text>
                </View>
            )
        }} />
        <Tab.Screen name="Task" component={TaskListScreen} options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image
                source={require('../assets/to-do-list.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#000'
                }} 
                />
                <Text
                style={{color: focused ? '#e32f45' : '#000',
                        fontSize: 12}} >
                        List
                </Text>
                </View>
            )
        }}/>
        <Tab.Screen name="AddTask" component={AddTaskScreen} options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image
                source={require('../assets/house-black-silhouette-without-door.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#000'
                }} 
                />
                <Text
                style={{color: focused ? '#e32f45' : '#000',
                        fontSize: 12}} >
                        Home
                </Text>
                </View>
            )
        }}/>
        <Tab.Screen name="Statistics" component={StatisticsScreen} options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image
                source={require('../assets/trend.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#000'
                }} 
                />
                <Text
                style={{color: focused ? '#e32f45' : '#000',
                        fontSize: 12}} >
                        Statistics
                </Text>
                </View>
            )
        }}/>
        <Tab.Screen name="Ideas" component={IdeasScreen} options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image
                source={require('../assets/idea.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#000'
                }} 
                />
                <Text
                style={{color: focused ? '#e32f45' : '#000',
                        fontSize: 12}} >
                        Ideas
                </Text>
                </View>
            )
        }}/>
        </Tab.Navigator>
    );

}

export default Tabs;

const styles = StyleSheet.create({
    shadow: {
         shadowColor: '#7f5df0',
         shadowOffset: {
             width: 0,
             height: 10
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.5,
         elevation: 5   
    }
});