import React from "react";

import { View, Text, StyleSheet, Pressable } from "react-native";

const Goals = ({ itemData, onDelete }) => {
    return (
        <View style={styles.goals} >
            <Pressable android_ripple={{ color: "#210644", borderless: true }} style={({ pressed }) => pressed && styles.pressed} onPress={() => { onDelete(itemData.index) }}>
                <Text style={styles.goalsInfo} >{itemData.item.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goals: {
        backgroundColor: "#5e0acc",
        color: "#FFF",
        borderRadius: 8,
        marginBottom: 8,
    },
    goalsInfo: {
        color: '#fff',
        padding: 10,
        textAlign: "center",
        fontWeight: "800"
    },
    pressed: {
        backgroundColor: "#210644",
        borderRadius: 8,
    }
})

export default Goals;