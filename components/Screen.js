import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Tabs, NativeBaseProvider } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';

export default class Feed extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <NativeBaseProvider>
        <View>
          <View style={styles.header}>
            <Pressable
              style={styles.goBack}
              android_ripple={{ color: 'gray', borderless: true }}
              onPress={() => {
                navigation.navigate('Welcome');
              }}>
              <Icon name={'caret-left'} size={55} color={'white'} />
            </Pressable>
            <Text style={styles.headerText}>News Feed</Text>
          </View>

          <Tabs isFitted align="center" colorScheme="Warning" size="lg">
            <Tabs.Bar>
              <Tabs.Tab>Headlines</Tabs.Tab>
              <Tabs.Tab>General</Tabs.Tab>
            </Tabs.Bar>
            <Tabs.Views>
              <Tabs.View>
                <ScrollView>
                  <Tab1 />
                </ScrollView>
              </Tabs.View>
              <Tabs.View>
                <ScrollView>
                  <Tab2 />
                </ScrollView>
              </Tabs.View>
            </Tabs.Views>
          </Tabs>
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    backgroundColor: '#0e9aa7',
    flexDirection: 'row',
  },
  headerText: {
    flex: 8,
    color: 'white',
    fontSize: 32,
    paddingTop: 25,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  goBack: {
    flex: 2,
    padding: 20,
    fontSize: 30,
  },
});
