import { StyleSheet, Text, View } from "react-native"

export const PantallasLocas = () => {
  return (
    <View style={styles.container}>
        <View style={styles.secondaryBox}>
            <Text style={{color: 'white'}}>hola soy las pantallas</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    secondaryBox: {
        height:30,
        backgroundColor: 'black',
        marginHorizontal: 20,
        marginVertical: 50,
        padding: 5
    }
})