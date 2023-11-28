import Login from './componentes/Login';
import Bet_Game from './componentes/Bet_Game';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export default function App() {

  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Bet_Game" component={Bet_Game} />
          </Stack.Navigator>
        </NavigationContainer>
      
  );


}
