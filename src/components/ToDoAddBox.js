import React from 'react';
import {TextInput, Button, View, StyleSheet} from 'react-native';

const ToDoAddBox = (props) => {
  return (
    <View style={styles.ToDoContainer}>
      <TextInput
        testID="input"
        style={styles.textInput}
        placeholder="Type something to do !"
        value={props.textValue}
        onChangeText={props.onAddItemTextChange}
      />
      <Button
        testID="button"
        title="ADD TODO"
        style={styles.addItemButton}
        onPress={props.onAddItemSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ToDoContainer: {
    backgroundColor: '#e5e6e8cc',
    padding: 10,
    margin: 5,
    borderRadius: 12,
  },
  textInput: {
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 10,
  },
  addItemButton: {
    backgroundColor: '#1b2440',
    borderRadius: 10,
  },
});

export {ToDoAddBox};
