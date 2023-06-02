import React, { useState } from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NameInput from './components/NameInput';
import NameList from './components/NameList';

const App = () => {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);

  const addName = () => {
    if(name.trim() !== '') {
      setNameList(currentList => [...currentList, name]);
      setName('');
    } else {
      Alert.alert("Error", "El nombre no puede ser vacío");
    }
  };

  const deleteName = (index) => {
    Alert.alert(
      "",
      "Esta usted seguro de querer borrar este registro?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Aceptar", 
          onPress: () => {
            setNameList(currentList => currentList.filter((item, i) => i !== index));
          }
        }
      ]
    );
  };

  const deleteAllNames = () => {
    if (nameList.length === 0) {
      Alert.alert("", "No hay nombres para borrar.");
      return;
    }
    Alert.alert(
      "",
      "Esta usted seguro de querer borrar todos los registro?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Aceptar",
          onPress: () => {
            setNameList([]);
          }
        }
      ]
    );
  };

  const editName = (index, newName) => {
    setNameList(currentList => currentList.map((item, i) => i === index ? newName : item));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicación CRUD</Text>
      <NameInput
        name={name}
        setName={setName}
        addName={addName}
      />
      <NameList
        nameList={nameList}
        deleteName={deleteName}
        editName={editName}
      />
      <TouchableOpacity style={styles.deleteButton} onPress={deleteAllNames}>
        <Text style={styles.deleteButtonText}>Borrar todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
