import 'react-native-gesture-handler';
import React, {useState, useEffect, useMemo} from 'react';
import {StyleSheet, ScrollView, View, ActivityIndicator} from 'react-native';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import { ActivityIndicator } from 'react-native-paper';
//Screens
import DrawerContent from './views/DrawerContent';
import MainTabScreen from './views/MainTabScreen';
import HomeScreen from './views/HomeScreen';
import ProfileScreen from './views/ProfileScreen';
import BookmarsScreen from './views/BookmarkScreen';
import SettingScreen from './views/SettingScreen';
import SupportScreen from './views/SupportScreen';
import RootStackScreen from './views/RootStackScreen';
//Components
import {AuthContext} from './components/context';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#3D80E4" />
      </View>
    );
  }

  return (
    <>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken !== null ? (
            <Drawer.Navigator
              initialRouteName="Home"
              drawerContent={(props) => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="HomeScreen" component={HomeScreen} />
              <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
              <Drawer.Screen name="BookmarsScreen" component={BookmarsScreen} />
              <Drawer.Screen name="SettingScreen" component={SettingScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
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
      </AuthContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
