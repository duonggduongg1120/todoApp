import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const TaskItem = props => {
  const navigate = useNavigation();
  const [isEnabled, setIsEnabled] = useState(props.status);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const backgroundStyle = {
    backgroundColor: isEnabled ? '#b9fbc0' : '#ffcfd2',
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundStyle.backgroundColor},
      ]}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => {
          navigate.navigate('Detail', {data: props.item});
        }}>
        <Image
          source={require('../assets/img/Group7.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>{props.taskName}</Text>
      </TouchableOpacity>
      <Switch
        trackColor={isEnabled ? '#767577' : '#81b0ff'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 16,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: 18,
  },
});
