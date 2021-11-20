import React, { Component,useState } from 'react';
import { View, Text,StyleSheet,KeyboardAvoidingView,TouchableOpacity,TextInput } from 'react-native';
import stylesheet  from './asserts/stylesheet'
import Tasks from './components/Tasks';

export default function App (){
  const [task,setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddtask = () => {
    
  setTaskItems([...taskItems,task])
  setTask(null);  
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems,task]
    itemsCopy.splice(index,);
    setTaskItems(itemsCopy);
    
    }
 
    return (
      <View style={stylesheet.container}>

        <View>
        <Text style={stylesheet.title}> Today's Tasks </Text>
        </View>
        {/* tasks area */}
        {
           taskItems.map((item,index)  => {
           return( 
           <TouchableOpacity  key={index} onPress={() => completeTask(index)}>
             <Tasks  text={item} />
           </TouchableOpacity>
        
           )
           })

        }
        
       

        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={stylesheet.lastcont}>
        <TextInput style={stylesheet.input} placeholder={'Write a task'}  onChangeText = {text =>setTask(text)} />
        <TouchableOpacity onPress = {() => handleAddtask()} >
          <View style={stylesheet.addbtn}>
            <Text style={stylesheet.btntext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
        <View>

        </View>
      
      </View>
    );
  
}
