import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <SafeAreaView>
        <Text style={styles.title}>My Todos</Text>
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'coral',
    paddingBottom: 15,
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
