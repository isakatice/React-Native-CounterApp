import { StatusBar } from "react-native";
import { HomeWork} from './src/presentation/screens';
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function App() {

  return (
      <PaperProvider>
        <SafeAreaProvider>
        <SafeAreaView style={{flex: 1,  backgroundColor: 'grey'}}>
          <StatusBar barStyle= 'dark-content' backgroundColor="white" />
        {/* Tu contenido aquí */}
            {/* <HelloWorldScreen name="Isakatice"/> */}
            {/* <Counter/> */}
            {/* <PantallasLocas/> */}
            {/* <DimensionalScreen/> */}
            <HomeWork/>
        </SafeAreaView>
        </SafeAreaProvider>
      </PaperProvider>

  );
}


export default App;
