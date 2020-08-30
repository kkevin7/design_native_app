import 'react-native-gesture-handler';
import React, {useState, useEffect, useReducer, useMemo} from 'react';
import {StyleSheet, ScrollView, View, ActivityIndicator} from 'react-native';
//Navigation
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
//React Native Paper
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
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
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }


  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  
  const loginReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN':
         return {
           ...prevState,
           userToken: action.token,
           isLoading: false,
         };
         case 'LOGIN':
          return {
            ...prevState,
           userName: action.id,
           userToken: action.token,
           isLoading: false,
          };
          case 'LOGOUT':
         return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
         };
        case 'REGISTER':
         return {
          ...prevState,
           userName: action.id,
           userToken: action.token,
           isLoading: false,
         };
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        userToken = 'djfsjfsdf';
        await AsyncStorage.removeItem('userToken');
      } catch (error) {
        console.log(error)
      }
      dispatch({type: 'LOGOUT'});
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme)
    }
  }));

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken= null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);


  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#3D80E4" />
      </View>
    );
  }

  return (
    <>
      <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken ? (
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
        </NavigationContainer>
      </AuthContext.Provider>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
