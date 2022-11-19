import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const Detail = ({route, params}) => {
  const item = route.params.data;
  return (
    <View style={styles.fullScreen}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/img/background.png')}
        style={styles.fullScreen}>
        <Text style={styles.heading}>Todo Detail</Text>
        <View style={styles.container}>
          <Text style={styles.headerText}>
            Todo: <Text style={styles.text}>{item.todo}</Text>
          </Text>
          <Text style={styles.headerText}>
            Status:{' '}
            <Text style={styles.text}>
              {item.isDone ? 'Done' : 'In Progress'}
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  fullScreen: {flex: 1},
  heading: {
    fontFamily: 'LexendDeca-SemiBold',
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  container: {
    backgroundColor: '#fde4cf',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 16,
  },
  text: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: 20,
    margin: 10,
    color: '#5F33E1',
  },
  headerText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: 20,
    margin: 5,
    fontWeight: '600',
  },
});
