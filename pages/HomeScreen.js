import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
        title='Click here'
        onPress={()=> alert('butten pressed')} />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#8fcbbc'   
},
});