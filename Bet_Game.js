import { RefreshControl, TextInput } from 'react-native';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Bet_Game = () => {


    const [betNumber, setBetNumber] = useState();
    const [numSorteado, setNumSorteado] = useState();
    const [bestAttemps, setBestAttemps] = useState();
    const [attemps, setAttemps] = useState();

    const salvar = async (chave, object) => {
        const jsonValue = JSON.stringify(object);
        await AsyncStorage.setItem(chave, jsonValue);

    }

    const buscar = async (chave) => {
    
        const jsonValue = await AsyncStorage.getItem(chave);

        setBestAttemps(JSON.parse(jsonValue))  

    }

    
    const sortearNum = () => {

        const randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

        return randomNum
    }
    const refresh = () => {
        setNumSorteado(sortearNum());
        setAttemps(0);
        setBetNumber("")
        
    }

    useEffect(() => {
        setNumSorteado(sortearNum());
        setAttemps(0);
        setBetNumber("")
        buscar('01');
    }, [])

    const checkBest = (num) => {

        if(num<bestAttemps){
            salvar('01', attemps +1)
            buscar('01')
        }

        console.log(bestAttemps);
    }

    const checkNumber = () => {


        if (betNumber > 100 || betNumber < 1) {
            alert("Número inválido");
            setBetNumber("")
            return
        }

        if (betNumber > numSorteado) {
            setAttemps(attemps + 1)
            alert("Número sorteado é MENOR")
        } else if (betNumber < numSorteado) {
            setAttemps(attemps + 1)
            alert("Número sorteado é MAIOR")
        } else {
            alert(`Parabens você Acertou!! Número de erros: ${attemps} `)
            refresh()
            checkBest(attemps)
            buscar('01')
            return
        }

        setBetNumber("")

        console.log(attemps + 1)

    }




    return (
        <View style={styles.container}>
            <Text>Descubra o número.</Text>
            <TextInput style={styles.input} value={betNumber} onChangeText={setBetNumber} placeholder='Digite um número' keyboardType='numeric' />
            <TouchableHighlight style={styles.botao} onPress={checkNumber}>
                <Text style={styles.textoBotao}>Adivinhar!</Text>
            </TouchableHighlight>

            <Text>Melhor Resultado: {bestAttemps} tentativas</Text>
        </View>

    )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBotao: {
        fontSize: 20,
        color: "#fff"
    },

    botao: {
        width: 250,
        marginTop: 20,
        height: 50,
        backgroundColor: 'darkviolet',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center"
    },

    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        display: 'flex',
        width: windowWidth - 80
    },
});

export default Bet_Game