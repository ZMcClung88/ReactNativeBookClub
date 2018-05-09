import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import BookList from './src/components/BookList';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Books'} />
        <BookList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
