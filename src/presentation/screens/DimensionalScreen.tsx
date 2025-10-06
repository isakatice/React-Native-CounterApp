import { StyleSheet, Text, useWindowDimensions, View } from "react-native"

export const DimensionalScreen = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View style={ {...styles.conteiner,width: width, height:height}}>
        <View style={ styles.blackBox}>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    conteiner: {
        height: 200,
        width: 200,
        backgroundColor: 'blue'
    },
    blackBox: {
        backgroundColor: 'black',
        height: '50%',
        width: '50%'
    }
})
