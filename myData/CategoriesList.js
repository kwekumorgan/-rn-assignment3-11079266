import React from "react";
import { View,Text,StyleSheet,FlatList,Image } from "react-native";

const categories= [
    { id: '1', title: 'Exercise' },
    { id: '2', title: 'Study',  },
    { id: '3', title: 'Code',  },
    { id: '4', title: 'Cook',  },
    { id: '5', title: 'Dress', },
    { id: '6', title: 'Dance',  },
    { id: '7', title: 'Sing',  },
    { id: '8', title: 'Eat',  },
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

 
  
  export default CategoryList;