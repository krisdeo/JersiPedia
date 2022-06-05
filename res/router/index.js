import {View, Text} from 'react-native';
import React from 'react';
import {
  Home,
  Splash,
  ListJersey,
  Profile,
  JerseyDetail,
  Keranjang,
  Checkout,
  EditProfile,
  ChangePassword,
  History,
  Login,
  RegisterForm,
  RegisterFormMore
} from '../pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="ListJersey"
        component={ListJersey}
        options={{title: 'Jersey', headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JerseyDetail"
        component={JerseyDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Keranjang"
        component={Keranjang}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: true, title: 'Edit Profile'}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: true, title: 'Change Password'}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="RegisterForm"
        component={RegisterForm}
        options={{headerShown: true, title: 'Register Form'}}
      />
      <Stack.Screen
        name="RegisterFormMore"
        component={RegisterFormMore}
        options={{headerShown: true, title: 'Register Form'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
