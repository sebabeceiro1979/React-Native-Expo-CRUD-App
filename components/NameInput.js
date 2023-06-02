import React from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const NameInput = ({ name, setName, addName }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter a name"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={addName}>
        <Text style={styles.buttonText}>NUEVO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NameInput;