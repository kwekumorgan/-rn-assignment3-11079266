import React from "react";
import{View,Text,ScrollView,StyleSheet,TextInput,Button,FlatList,Image} from 'react-native';
import CategoryList from '../Components/CategoryList';
import TaskList from '../Components/TaskList';

const HomeScreen = ()=>{
    
    return(
    // No styles added for now
    <ScrollView style={styles.container}>
        <View style={styles.firstItem}>
            <Text style={styles.dothedo}>Hello, Devs</Text>
            <Image source={require('../assets/ppp.png')} style={styles.logo}/>
        </View>
        <View style={styles.dothesay}>
            <View style={styles.horizontalBox}>
                <Image source={require('../assets/xxx.png')} style={styles.logo} />
                <Text style={styles.horizontalText}>  Search</Text>
            </View>
            <Image source={require('../assets/Filter.png')} style={styles.logo}/>
        </View >
        <View style={styles.dothethree}>
            <Text style={styles.stforcat}>Categories</Text>
        <CategoryList/>
        </View>
        <View>
        <Text style={styles.stforcat}>Ongoing Task</Text>
        <TaskList/>
        </View> 
        
        
    </ScrollView>
);
    };