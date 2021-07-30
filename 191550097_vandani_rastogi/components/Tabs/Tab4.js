import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  ActivityIndicator,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';

import { getArticles_sports} from '../../config/news';
import ArticleContent from '../articleContent';

export default class Tab4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    getArticles_sports().then((data) => {
      this.setState({
        isLoading: false,
        data: data,
      });
    }),
      (error) => {
        Alert.alert('Error', 'Something went wrong!');
      };
  }

  render() {
    
    // console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text style={{marginTop: 10}} children="Please Wait.." />
      </View>
    ):
    (this.state.data.map((item) => {
      return (
       <ArticleContent data={item}></ArticleContent>
      )
    }))
    

    return (
      <View style={{height:'100%',width:'100%'}}>{view}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
