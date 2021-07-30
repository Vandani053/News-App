import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable,Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Welcome extends React.Component{
  render(){
    const {
      navigation
    }=this.props
  return (
    <View style={styles.container}>
        <Image source={require("../Images/new1.png")} style={styles.image}/>
      <View style={styles.introBox}>
        <Text style={styles.introContent}>Welcome to E-News! Start Reading To Stay Updated</Text>
        <Pressable
          style={styles.start}
          onPress={() => {
            navigation.navigate('Feed');
          }}
          android_ripple={{ backgroundColor: 'grey', borderless: true }}>
          <Text style={styles.butnText}>Start Reading</Text>
        </Pressable>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6cd61',
  },
  image:{
      height:windowHeight*0.75,
      width:windowWidth,
  },
  introBox: {
    flex: 1,
    alignItems:'center',
  },
  introContent: {
    fontSize:22,
    fontWeight:'bold',
    // borderWidth:1,
    // borderColor:'black',
    padding:20,
    margin:30,
    textAlign:'center',
  },
  start: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  butnText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fe8a71',
    color: 'white',
    padding: 10,
    borderRadius: 10,
  },
});
