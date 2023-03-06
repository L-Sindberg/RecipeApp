import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const IdeasScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>ideas Screen</Text>
        <Button
        title='Click here'
        onPress={()=> alert('butten pressed')} />
        </View>
    );
}

export default IdeasScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#8fcbbc'   
},
});