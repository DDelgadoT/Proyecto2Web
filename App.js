import Populares from "./components/Populares/Populares";
import Nacionales from "./components/Nacionales/Nacionales";
import Internacionales from "./components/Internacionales/Internacionales";
import RegistroBeca from "./components/RegistroBeca/RegistroBeca";
import Detalles from './components/Detalles/Detalles';
import EditarBeca from './components/EditarBeca/EditarBeca';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="Populares" component={ Populares } />
        <Stack.Screen name="Internacionales" component={ Internacionales } />
        <Stack.Screen name="Nacionales" component={ Nacionales } />
        <Stack.Screen name="RegistroBeca" component={ RegistroBeca } />
        <Stack.Screen name="Detalles" component={ Detalles } />
        <Stack.Screen name="Editar" component={ EditarBeca } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
