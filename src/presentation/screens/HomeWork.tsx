import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'

export const HomeWork = () => {
      const { width, height } = useWindowDimensions();
   return (
     <View style={{...styles.conteiner,width: width, height:height-80}}>
        <View style ={{...styles.myBox, ...styles.purpleBox}} />
        <View style ={{...styles.myBox, ...styles.orangeBox}} />
        <View style ={{...styles.myBox, ...styles.cyanBox}} />  
     </View>
   )
 }
 
 const styles = StyleSheet.create({
     conteiner: {
        backgroundColor: '#284258',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row'
     },
     myBox:{
        width:  100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
     },
     purpleBox: {
         backgroundColor: '#5856D6',
     },
    orangeBox: {
         backgroundColor: '#F0A23B',
         top:50
     },
    cyanBox: {
         backgroundColor: '#2BC4D9',
     }
 })
 