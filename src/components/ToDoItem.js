import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Item = (props) => {
  const [disabled, setDisabled] = useState(props.item.item.isDone);

  return (
    <TouchableOpacity
      style={[styles.itemContainer, disabled ? styles.itemDisabled : null]}
      onLongPress={() => props.onToggleState(props.item.index)}
      onPress={() => {
        setDisabled(!disabled);
        props.onItemStateChange(props.item.index);
      }}>
      <Text
        style={[styles.innerText, disabled ? styles.innerTextDisabled : null]}>
        {props.item.item.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#25b570',
    padding: 9,
    margin: 8,
    borderRadius: 10,
  },
  itemDisabled: {
    backgroundColor: '#25b57075',
  },
  innerTextDisabled: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  innerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export {Item};
