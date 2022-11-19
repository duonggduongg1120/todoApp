import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

const Start = ({navigation}) => {
  return (
    <View style={styles.fullScreen}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/img/background.png')}
        style={styles.fullScreen}>
        <Image
          source={require('../assets/img/Group270.png')}
          style={styles.img}
        />
        <Text style={styles.heading}>Task Management & To-Do List</Text>
        <Text style={styles.text}>
          This productive tool is designed to help you better manage your task
          project-wise conveniently!
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.btnText}>Let's Start</Text>
          <Image
            source={require('../assets/img/ArrowRight.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  img: {
    width: 245.48,
    height: 340,
    alignSelf: 'center',
    marginTop: 69,
    marginBottom: 84,
  },
  heading: {
    fontFamily: 'LexendDeca-SemiBold',
    fontSize: 24,
    marginHorizontal: 70,
    marginVertical: 20,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: 16,
    marginHorizontal: 55,
    marginBottom: 40,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#5F33E1',
    marginHorizontal: 40,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 90,
  },
  btnText: {
    fontFamily: 'LexendDeca-SemiBold',
    fontSize: 19,
    color: '#FFFFFF',
    fontWeight: '600',
    margin: 14,
  },
  icon: {
    width: 24,
    height: 24,
  },
  fullScreen: {flex: 1},
});
