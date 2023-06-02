import React, { useState } from 'react';
import { View, Alert } from 'react-native';
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
      "Delete Name",
      "Are you sure you want to delete this name?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: () => {
            setNameList(currentList => currentList.filter((item, i) => i !== index));
          }
        }
      ]
    );
  };

  const editName = (index, newName) => {
    setNameList(currentList => currentList.map((item, i) => i === index ? newName : item));
  };

  return (
    <View>
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
    </View>
  );
};

export default App;
