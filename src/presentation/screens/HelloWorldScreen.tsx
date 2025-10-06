import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    name?: string
}

export const HelloWorldScreen = ({ name = 'World'} : Props) => {
  return (
    <View style={ styles.conteiner }>
        <Text style={styles.title}>
          Hola, {name}! 
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
    conteiner: {
         backgroundColor: 'black',
          display: 'flex',
          flex: 1,
          justifyContent:'center',
          alignItems: 'center',
    },
    title:{
        fontSize: 45,
        color: 'white'
    }
})