import React from "react";
import { View,Text,StyleSheet,FlatList,Image } from "react-native";

const categories= [
    { id: '1', title: 'Exercise', icon: require('./assets/pic 1.png') },
    { id: '2', title: 'Study'},
    { id: '3', title: 'Code' },
    { id: '4', title: 'Cook' },
    { id: '5', title: 'Dress' },
    { id: '6', title: 'Dance' },
    { id: '7', title: 'Sing' },
    { id: '8', title: 'Eat' },
  ];

  const CategoryList = ()=>{
    return(
      <View>
        <FlatList
        data={categories}
        horizontal
        renderItem={({item})=>(

          <View style={styles.categoryItem} >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.taskCountText}>  12 tasks today</Text>
            <Image source={item.icon} style={styles.icon} />
            
          </View>
        )}
        keyExtractor={(item)=> item.id}
        />
      </View>
    );
  };

 
  const styles= StyleSheet.create({
    container: {
      marginVertical: 16,
    },
    categoryItem: {
      alignItems: 'right',
      padding: 15 ,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      marginRight: 16,
      width: 186,
      height: 192,
      justifyContent: 'space-between',
    },
    icon: {
      width: 151,
      height: 132,
    },
    title: {
      fontSize: 16,
      alignContent: 'left',
      fontWeight:'bold',
    },

  });
  export default CategoryList;