/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';

export default function Home() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const pressHandler = (key: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };

  const submitHandler = (text: string) => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{text: todo, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismiss keyboard');
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.form}>
          <Text style={styles.formText}>Add a todo</Text>
          <TextInput
            style={styles.inputTextField}
            onChange={e => {
              setTodo(e.nativeEvent.text);
            }}
          />
          <Button
            title="Add todo"
            onPress={() => submitHandler(todo)}
            color="coral"
          />
        </View>
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => {
                return <TodoItem item={item} pressHandler={pressHandler} />;
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  list: {
    marginTop: 5,
  },

  form: {
    display: 'flex',
    padding: 20,
  },

  formText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  inputTextField: {
    marginTop: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
});
