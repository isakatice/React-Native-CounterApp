import { Pressable, StyleSheet, Text } from "react-native"

interface Props {
    text?: string;
    onPress?: () => void;
    onLongPress?: () => void; 
}

export const PrimaryButton = ({text = 'boton', onPress, onLongPress}:Props) => {
  return (
    <Pressable 
        style={({pressed}) => [
            styles.button,
            pressed && styles.buttonPressed
        ]}
        onPress={()=>onPress && onPress()}
        onLongPress={()=>onLongPress && onLongPress()}
    >
        <Text>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: '#63FFCE',
        borderRadius: 10,
        padding: 10,
        width: 150
    },
    buttonPressed: {
        backgroundColor: '#d01ad6'
    }
})