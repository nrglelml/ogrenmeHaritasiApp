import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouterNames from '../config/RouterNames';
import {Home, AITalk, FAQ, Sources, About, Results} from '../screens';
import {ConnectionWrapper} from '../components';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouterNames.HOME} component={Home} />
      <Stack.Screen name={RouterNames.ABOUT} component={About} />
      <Stack.Screen name={RouterNames.AITALK} component={AITalk} />
      <Stack.Screen name={RouterNames.SOURCES} component={Sources} />
      <Stack.Screen name={RouterNames.FAQ} component={FAQ} />
      <Stack.Screen name={RouterNames.RESULTS} component={Results} />
    </Stack.Navigator>
  );
}

export default RootStack;
