import { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import Goals from "./components/Goals";
import GoalInput from "./components/GoalInput";

export default function App() {

  const [goals, setGoals] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  // console.log(goals.length)
  // console.log(goals)

  const handleAddModal = () => {
    setShowAddModal(!showAddModal);
  };


  const addGoals = (enteredTxt) => {
    if (enteredTxt.length <= 0) { return; }
    setGoals(prev => [...prev, { text: enteredTxt, id: Math.random().toString() }]);
    handleAddModal();
  };

  const deleteGoals = (i) => {
    const elementToDelete = goals.filter((goal, index) => i !== index);
    // console.log(elementToDelete)
    setGoals(elementToDelete)


  };
  const renderItem = (itemData) => {
    return <Goals itemData={itemData} onDelete={deleteGoals} />
  };

  const keyExtractor = (item, index) => {
    // console.log(index)
    return item.id;
  }

  return (
    <>
      <StatusBar style="light" animated={true} />
      <View style={styles.AppContainer}>
        <Button title="Add new goal" color="#5e0acc" onPress={handleAddModal} />
        <GoalInput visible={showAddModal} onAdd={addGoals} onCloseModal={handleAddModal} />
        <View style={styles.GoalsContainer}>
          {goals.length <= 0 && <Text style={{ textAlign: "center", color: "#FFF" }}>No Goals Added!</Text>}
          <FlatList data={Array.isArray(goals) ? goals : []} renderItem={renderItem} keyExtractor={keyExtractor} alwaysBounceVertical={true} />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
    // alignContent: "center"
  },
  GoalsContainer: {
    flex: 4,
    marginTop: 30
  },

});