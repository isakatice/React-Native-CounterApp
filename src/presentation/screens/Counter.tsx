import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { FAB } from "react-native-paper"
import { globalStyles } from "../themes/global.styles"
// import { PrimaryButton } from "../components"
// import { Button } from "react-native-paper"


export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <View style={globalStyles.conteiner}>
            <Text style={globalStyles.number}>{count}</Text>
            {/* <PrimaryButton 
                text="incremento +1" 
                onPress={()=>setCount(count + 1)} 
                onLongPress={()=>setCount(0)}
            /> */}
            {/* <Button
                mode="contained"
                onPress={()=>setCount(count + 1)}
                onLongPress={()=>setCount(0)}
            >
                Incrementar               
            </Button> */}
            <FAB
                label="Incrementar"
                icon='plus'
                mode="elevated"
                style={globalStyles.fab}
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
            />
        </View>
    )
}