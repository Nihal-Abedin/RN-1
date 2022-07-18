import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, ImageBackground } from "react-native";
const coverImage = require('../assets/cover.png')

const GoalInput = ({ onAdd, visible, onCloseModal }) => {
    const [enteredTxt, setEnteredTxt] = useState("");

    const handleGoals = (e) => {
        setEnteredTxt(e);

    };

    const addGoals = () => {
        onAdd(enteredTxt);
        setEnteredTxt("");
    };

    const closeModal = () => {
        onCloseModal();
        setEnteredTxt("");
    }
    return (
        <Modal visible={visible} animationType="slide" >
            <ImageBackground source={coverImage} resizeMode="cover" style={styles.background}>
                <View style={styles.InputContainer}>
                    <TextInput style={styles.TextField} value={enteredTxt} placeholder="Your Goals" onChangeText={handleGoals} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="cancel" onPress={closeModal} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Add Goals" onPress={addGoals} />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </Modal>
    );
};

const styles = StyleSheet.create({
    InputContainer: {
        padding: 50,
        paddingHorizontal: 16,
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: 24,
    },
    TextField: {
        // flex: 1,
        width: "100%",
        borderWidth: 1,
        borderColor: "#cccc",
        marginRight: 8,
        padding: 8,
        borderRadius: 8,
        color: "#fff",
        backgroundColor: "rgba(255,255,255, 0.3)",
        fontWeight: "800"
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        // backgroundColor: "red",
        marginTop: 16
    },
    button: {
        width: "40%",
        marginHorizontal: 8,
    },
    background: {
        flex: 1,

    }
})

export default GoalInput;