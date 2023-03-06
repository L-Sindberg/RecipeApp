import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const StatisticsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>statistics Screen</Text>
        <Button
        title='Click here'
        onPress={()=> alert('butten pressed')} />
        </View>
    );
}

export default StatisticsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#8fcbbc'   
},
});