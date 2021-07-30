import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView,Button,TouchableOpacity } from 'react-native';
import { Tabs, NativeBaseProvider } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';


export default class Feed extends React.Component {
  render() {
    const{
      navigation
    }=this.props
    return (
      <NativeBaseProvider>
        <View>
          <View style={styles.header}>
            <Pressable
              style={styles.goBack}
              android_ripple={{ color: 'gray', borderless: true }}
              onPressIn={() => {
                navigation.navigate('Welcome Screen');
              }}>
              <Icon name={'caret-left'} size={55} color={'white'} />
            </Pressable>
            <Text style={styles.headerText}>News Feed</Text>
          </View>

          <Tabs isFitted colorScheme="Warning" size="md">
            <Tabs.Bar>
              <Tabs.Tab>General</Tabs.Tab>
              <Tabs.Tab>Tech</Tabs.Tab>
              <Tabs.Tab>Sports</Tabs.Tab>
              <Tabs.Tab>Health</Tabs.Tab>
            </Tabs.Bar>
            <Tabs.Views>
              <Tabs.View>
                <ScrollView>
                  <Tab1 />
                </ScrollView>
              </Tabs.View>
              <Tabs.View>
                <ScrollView>
                  <Tab3 />
                </ScrollView>
              </Tabs.View>
              <Tabs.View>
                <ScrollView>
                  <Tab4 />
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
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  goBack: {
    // position: 'absolute',
    top: 10,
    left: 10,
    padding: 20,
    justifyContent: 'center',
    fontSize: 30,
  },
});
