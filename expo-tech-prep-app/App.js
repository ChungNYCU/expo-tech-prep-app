import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TestPage from './src/screens/TestPage'; // Import the TestPage component
import { styles } from './src/styles/globalStyles'; // Import the styles

// Home Page component
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Page!</Text>
      <Button
        title="Go to test page"
        onPress={() => navigation.navigate('TestPage')}
      />
    </View>
  );
}

// Create a stack navigator
const Stack = createStackNavigator();

// Main App component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TestPage" component={TestPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};