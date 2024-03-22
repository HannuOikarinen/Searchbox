// App.js
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';
import Row from './components/Row'; // Assuming you have a Row component
import { DATA } from './DATA';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, []);

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.toLowerCase().startsWith(search.toLowerCase()));
    setItems(searchArray);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
        <Row person={item} />
  )}
  ></FlatList>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
