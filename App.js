import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
//Screens
import HomeScreen from './views/HomeScreen';
import DrawerContent from './views/DrawerContent';
import MainTabScreen from './views/MainTabScreen';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={MainTabScreen} />
        </Drawer.Navigator>
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
