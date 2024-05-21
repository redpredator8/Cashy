import { View } from 'react-native';
import React, { useState } from 'react';

import Index from './index';
import Explorer from './explore';
import HomeScreen from '../screens/HomeScreen';

export default function TabLayout() {
  const [showExplorer, setShowExplorer] = useState(false);
  const [showHomeScreen, setShowHomeScreen] = useState(false);

  const toggleView = () => {
    setShowExplorer(!showExplorer);
    setShowHomeScreen(false);
  };

  const toggleHomeScreen = () => {
    setShowHomeScreen(!showHomeScreen);
    setShowExplorer(false);
    return null;
  };

  return (
    <View style={{ flex: 1 }}>
      {showExplorer ? (
        <Explorer />
      ) : showHomeScreen ? (
        <HomeScreen />
      ) : (
        <Index toggleView={toggleView} toggleHomeScreen={toggleHomeScreen} />
      )}
    </View>
  );
}
