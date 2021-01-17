import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';

import {ToDoAddBox, Item} from './components';
/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newToDotext, setNewToDotext] = useState('');

  function addNewToDoItemTextChange(text) {
    setNewToDotext(text);
  }

  function addNewToDoItemSubmit() {
    if (newToDotext == '') {
      return;
    }
    setTodoList([...todoList, {text: newToDotext, isDone: false}]);
    setNewToDotext('');
  }

  function toggleItemState(index) {
    //alert(index);
    const temp = [...todoList];
    temp.splice(index, 1);
    setTodoList(temp);
  }
  function changeItemState(index) {
    const temp = [...todoList];
    temp[index].isDone = !temp[index].isDone;
    setTodoList(temp);
  }

  const renderItem = (item) => (
    <Item
      item={item}
      onToggleState={toggleItemState}
      isActive
      onItemStateChange={changeItemState}
    />
  );

  useEffect(() => {}, [todoList]);

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={styles.toDoLabel}>TODO</Text>
        <Text style={styles.countLabel}>
          {String(todoList.filter((item) => item.isDone == false).length)}
        </Text>
      </View>
      <View>
        <FlatList
          testID="list"
          keyExtractor={(item, index) => String(index)}
          data={todoList}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.addBoxContainer}>
        <ToDoAddBox
          textValue={newToDotext}
          onAddItemTextChange={addNewToDoItemTextChange}
          onAddItemSubmit={addNewToDoItemSubmit}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#171a23',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  addBoxContainer: {
    bottom: 2,
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  toDoLabel: {
    color: '#ff5252',
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: 8,
    marginTop: 8,
  },
  countLabel: {
    color: '#ff5252',
    fontWeight: 'bold',
    fontSize: 30,
    marginRight: 8,
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
});
export default App;
