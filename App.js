import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
//Screens
import DrawerContent from './views/DrawerContent';
import MainTabScreen from './views/MainTabScreen';
import HomeScreen from './views/HomeScreen';
import ProfileScreen from './views/ProfileScreen';
import BookmarsScreen from './views/BookmarkScreen';
import SettingScreen from './views/SettingScreen';
import SupportScreen from './views/SupportScreen';
import RootStackScreen from './views/RootStackScreen';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <RootStackScreen />
        {/* <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="HomeScreen" component={HomeScreen} />
          <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
          <Drawer.Screen name="BookmarsScreen" component={BookmarsScreen} />
          <Drawer.Screen name="SettingScreen" component={SettingScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        </Drawer.Navigator> */}
        {/* <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#3D80E4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
            },
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
