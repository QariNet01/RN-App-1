import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const ListInput = props => {
    const [enteredItem, setEnteredItem] = useState('');

    const ItemInputHandler = (enteredText) => {
        setEnteredItem(enteredText);
    }

    return (
        <View style={styles.formView}>
            <TextInput
                style={styles.inputField}
                placeholder="Write Shopping Items Here !"
                onChangeText={ItemInputHandler}
                value={enteredItem} />
            <Button title="Add Item" onPress={props.onAddItem.bind(this, enteredItem)} />
        </View>
    );
}

const styles = StyleSheet.create({
    formView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputField: {
        width: '70%',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 10
    },
});

export default ListInput;