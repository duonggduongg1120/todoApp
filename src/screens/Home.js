import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import TaskItem from '../components/TaskItem';

const mockData = [
  {id: 1, todo: 'Learn JavaScript', isDone: true},
  {id: 2, todo: 'Learn ReactJS', isDone: true},
  {id: 3, todo: 'Learn React Native', isDone: false},
  {id: 4, todo: 'Redux Core', isDone: false},
  {id: 5, todo: 'Redux Thunk', isDone: false},
];

const Home = () => {
  const [tasksList, setTasksList] = useState(mockData);
  const [addText, setAddText] = useState('');

  const textInput = useRef();

  const inputTodoHandler = enteredText => {
    setAddText(enteredText);
  };

  const addTaskHandler = () => {
    setTasksList(currentTasksList => [
      ...currentTasksList,
      {todo: addText, id: Math.random().toString(), status: 'In Progress'},
    ]);
    textInput.current.clear();
  };

  return (
    <View style={styles.fullScreen}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/img/background.png')}
        style={styles.fullScreen}>
        <View style={styles.headerContainer}>
          <View style={styles.avaContainer}>
            <Image
              source={require('../assets/img/avatar.png')}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.text}>Hello!</Text>
              <Text style={styles.headerText}>Derrick Condron</Text>
            </View>
          </View>
          <Image
            source={require('../assets/img/notification.png')}
            style={styles.icon}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <TextInput
              placeholder="Add todo"
              onChangeText={inputTodoHandler}
              ref={textInput}
            />
          </View>
          <TouchableOpacity style={styles.addBtn} onPress={addTaskHandler}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.total}>Total todos: {tasksList.length}</Text>
        <ScrollView>
          {tasksList.map(todo => (
            <TaskItem
              taskName={todo.todo}
              key={todo.id}
              status={todo.isDone}
              item={todo}
            />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  fullScreen: {flex: 1},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginVertical: 30,
    alignItems: 'center',
  },
  avaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  avatar: {
    width: 70,
    height: 70,
    marginRight: 20,
  },
  text: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: 14,
    marginBottom: 6,
  },
  headerText: {
    fontFamily: 'LexendDeca-SemiBold',
    fontSize: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    width: 300,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  addBtn: {
    backgroundColor: '#5F33E1',
    padding: 15,
    borderRadius: 20,
  },
  addText: {
    color: '#FFFFFF',
    fontFamily: 'LexendDeca-Bold',
  },
  total: {
    fontFamily: 'LexendDeca-SemiBold',
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 5,
  },
});
