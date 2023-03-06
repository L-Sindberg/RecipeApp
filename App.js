import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
    <Tabs />
    </NavigationContainer>
  )
}
export default App;