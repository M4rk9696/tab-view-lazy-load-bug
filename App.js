import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, Alert} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

const Screen1 = () => {
  return (
    <SafeAreaView style={styles.screen1}>
      <Text>Screen 1</Text>
    </SafeAreaView>
  );
};

const Screen2 = () => {
  useEffect(() => {
    Alert.alert('Rendered Screen2');
  }, []);

  return (
    <SafeAreaView style={styles.screen2}>
      <Text>Screen 2</Text>
    </SafeAreaView>
  );
};

const Screen3 = () => {
  useEffect(() => {
    Alert.alert('Rendered Screen3');
  }, []);

  return (
    <SafeAreaView style={styles.screen3}>
      <Text>Screen 3</Text>
    </SafeAreaView>
  );
};

const Screen4 = () => {
  useEffect(() => {
    Alert.alert('Rendered Screen4');
  }, []);

  return (
    <SafeAreaView style={styles.screen3}>
      <Text>Screen 4</Text>
    </SafeAreaView>
  );
};

const renderTabBar = props => {
  return (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
    />
  );
};

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'Third'},
    {key: 'fourth', title: 'Fourth'},
  ]);

  const renderScene = SceneMap({
    first: Screen1,
    second: Screen2,
    third: Screen3,
    fourth: Screen4,
  });

  return (
    <TabView
      lazy
      style={styles.tabView}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  tabView: {
    marginTop: 100,
  },
  tabbar: {
    backgroundColor: '#e91e63',
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  screen1: {
    backgroundColor: '#f00',
    height: 300,
  },
  screen2: {
    backgroundColor: '#0f0',
    height: 300,
  },
  screen3: {
    backgroundColor: '#00f',
    height: 300,
  },
  screen4: {
    backgroundColor: '#0ff',
    height: 300,
  },
});

export default App;
