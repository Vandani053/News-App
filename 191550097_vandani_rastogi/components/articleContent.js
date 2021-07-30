import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ArticleContent extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message: `${this.data.title}\nRead More\n${this.data.url}\nShared via RN News App`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View style={styles.newsView}>
        <Image
          source={{
            uri:
              this.data.urlToImage != null
                ? this.data.urlToImage
                : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=',
          }}
          style={styles.image}
        />
        <View style={styles.headline}>
          <Text numberOfLines={2} style={styles.title}>
            {this.data.title}
          </Text>
          <Text note numberOfLines={2} style={styles.description}>
            {this.data.description}
          </Text>
          <Text style={{ textAlignVertical: 'center', color: 'grey' }}>
            {this.data.publishedAt}
          </Text>
        </View>
        <View style={styles.viewBtn}>
  <TouchableOpacity onPress={() => { Linking.openURL(this.data.url) }}>
    <Text
      style={{
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#0e9aa7',
        padding: 3,
        fontWeight: 'bold',
        fontSize: 16,
      }}>
      View
    </Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={this.onShare}>
    <Icon name="share-alt" style={{
      color: 'black', fontSize: 16, textAlign: 'center',
      textAlignVertical: 'center', padding: 3,
    }} />
  </TouchableOpacity>
</View>
      </View>
    );
  }
}

export default ArticleContent;

const styles = StyleSheet.create({
  newsView: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    // margin:10,
  },
  image: {
    flex: 2,
    height: 150,
    width: 100,
    // borderColor: 'yellow',
    // borderWidth: 1,
  },
  headline: {
    flex: 3,
    // borderColor: 'green',
    // borderWidth: 1,
    margin: 5,
    // height: "100%"
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: 5,
  },
  viewBtn: {
    flex: 1,
    //  borderColor: 'red',
    //  borderWidth: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 3,
  },
  description: {
    padding: 3,
  },
});
