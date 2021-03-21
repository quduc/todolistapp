import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TextInput } from 'react-native';
import ToDo from './ToDo';
const ToDoList = () => {

    const [title, setTitle] = useState('todolist')
    const [text, setText] = useState();
    const [list, setList] = useState(['helloworld']);

    const addItem = () => {
        const updatedList = list;
        updatedList.push(text);
        setList(updatedList);
        setText("");
    };

    const deleteItem = (index)=>{
        const updatedList = list.filter((todo)=>todo !== index);
        setList(updatedList);
    }
    return (
        <View style={{ width: '80%', marginBottom: 60 }}>
            <Text style={[styles.align, styles.font]}>{title}</Text>
            <ScrollView>
                {list.map((x, index) => (
                    <ToDo key={index} item={x} index={index} delete={deleteItem}/>
                ))}
            </ScrollView>
            <View>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={(text) => setText(text)}
                />
            </View>
            <Button title='Add Item' onPress={addItem} />
        </View>
    )
}
const styles = StyleSheet.create({
    align: {
        alignSelf: 'center'
    },
    font: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        borderBottom: 8,
        marginBottom: 8
    }
})
export default ToDoList;