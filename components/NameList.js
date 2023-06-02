import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { Input } from 'react-native-elements';

const NameList = ({ nameList, deleteName, editName }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleSave = (index) => {
    editName(index, editText);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <ScrollView>
      {nameList.map((item, i) => (
        <ListItem key={i} bottomDivider containerStyle={styles.item}>
          <ListItem.Content>
            {editIndex === i ? (
              <Input 
                value={editText}
                onChangeText={setEditText}
              />
            ) : (
              <ListItem.Title style={styles.text}>{item}</ListItem.Title>
            )}
          </ListItem.Content>
          <View style={styles.iconContainer}>
            <Icon 
              name='delete'
              type='material'
              color='red'
              onPress={() => deleteName(i)}
            />
          </View>
          {editIndex === i ? (
            <Icon
              name='check'
              type='material'
              onPress={() => handleSave(i)}
            />
          ) : (
            <View style={styles.iconContainer}>
              <Icon
                name='edit'
                type='material'
                color='green'
                onPress={() => {setEditIndex(i); setEditText(item);}}
              />
            </View>
          )}
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#eeeeee',
    marginBottom: 5,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
  },
  text: {
    color: '#000000',
  },
  iconContainer: {
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    padding: 2,
  },
});

export default NameList;
