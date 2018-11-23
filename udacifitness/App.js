import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
    AntDesign
} from '@expo/vector-icons'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AntDesign name="stepforward" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
