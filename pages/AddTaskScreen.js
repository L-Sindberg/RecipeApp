import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const AddTaskScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>Add task Screen</Text>
        <Button
        title='Click here'
        onPress={()=> alert('butten pressed')} />
        </View>
    );
}

export default AddTaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#8fcbbc'   
},
});