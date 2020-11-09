import React from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';

const ListItem = props => {
    return (
        <TouchableNativeFeedback activeOpscity={1} onLongPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.listItem}>
                <Text>{props.value}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: '#000',
        borderWidth: 1
    },
});

export default ListItem;