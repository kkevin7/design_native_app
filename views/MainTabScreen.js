import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
//Views
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <>
      <Tab.Navigator initialRouteName="Home" activeColor="#fff">
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#009387',
            tabBarIcon: ({color}) => (
              <Ionicons name="ios-home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={DetailsStackScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarColor: '#1f65ff',
            tabBarIcon: ({color}) => (
              <Ionicons name="ios-notifications" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#694fad',
            tabBarIcon: ({color}) => (
              <Ionicons name="ios-person" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Explore',
            tabBarColor: '#d02860',
            tabBarIcon: ({color}) => (
              <Ionicons name="ios-aperture" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Ionicons.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}></Ionicons.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Ionicons.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}></Ionicons.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const styles = StyleSheet.create({});

export default MainTabScreen;
