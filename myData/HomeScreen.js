import React from "react";
import{View,Text,ScrollView,StyleSheet,TextInput,Button,FlatList,Image} from 'react-native';
import CategoryList from './CategoryList';
import taskList from './taskList.js';

const HomeScreen = ()=>{
    
    return(
    // No styles added for now
    <ScrollView style={styles.container}>
        <View style={styles.firstItem}>
            <Text style={styles.dothedo}>Hello, Devs</Text>
            <Image source={require('./assets/pic 1.png')} style={styles.logo}/>
        </View>
        <View style={styles.dothesay}>
            <View style={styles.horizontalBox}>
                <Image source={require('./assets/pic 1.png')} style={styles.logo} />
                <Text style={styles.horizontalText}>  Search</Text>
            </View>
            <Image source={require('./assets/pic 1.png')} style={styles.logo}/>
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
    const styles = StyleSheet.create({
        container:{
            flex:1,
            padding:16,
            backgroundColor:'#ccc',
        },
        input:{
            borderColor: '#fff',
            borderWidth: 1,
            padding: 8,
            marginBottom: 16, 
    
        },
       
        horizontalBox: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#eee',
            padding: 8,
            marginBottom: 16,
            width:430,
            borderRadius:20,
            height:50,
          },
    
        firstItem:{
            flexDirection:'row',
            alignItems:'center',
            padding:8,
            justifyContent:'space-between',
            marginTop:52,
        },
          horizontalText: {
            flex: 1,
            fontSize: 18
          },
        logo: {
            width: 50,
            height: 50,
        },
        dothedo:{
            fontSize:36,
            fontWeight:'bold',
        },
    
        dothesay:{
            justifyContent:'space-between',
            flexDirection:'row',
            marginTop:134,
           
        },
        dothethree:{
            marginTop:249,
        },
        stforcat:{
            fontWeight:'bold',
            fontSize: 24,
        },
    }); 

 export default HomeScreen;