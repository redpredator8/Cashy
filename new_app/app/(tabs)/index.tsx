import { Image, StyleSheet, Platform, Button } from 'react-native';
import React, { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen({ toggleView }: { toggleView: () => void }) {
  const onPressLearnMore = () => {
    console.log('Learn more button pressed');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Here's your Mnemonic wallet!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Write it down!</ThemedText>
        <ThemedText>
          Potato Potato Potato Potato Potato Potato Potato Potato Potato Potato
          Potato Potato
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Button
          onPress={onPressLearnMore}
          title="Save to iCloud"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={toggleView}
          title="Explore"
          accessibilityLabel="Explore"
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute'
  }
});