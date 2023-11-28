import { StyleSheet, Text, View, Image,Dimensions,SafeAreaView,TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';

const Login = ({navigation}) => {
    var imagem1 = require('../assets/game.png');
    const aaa = navigation;
    var [imagem , setImagem] = useState(imagem1);

    const [text, onChangeText] = React.useState('Login');

    return <SafeAreaView style={styles.principal}>
               <View style={styles.boxVisao}>
                    <Image source={imagem}></Image>
               </View>
               <View style={styles.boxSecundario}>

                    <TouchableOpacity style={styles.botao} onPress={() => {
                            console.log(aaa)
                             navigation.navigate('Bet_Game')
                    }}>
                        <Text style={styles.textoBotao}>Jogar</Text>
                    </TouchableOpacity>
                   


               </View>
            </SafeAreaView>

}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    
    boxVisao: {
      width:200,
      height:200 ,
      display:'flex',
      flexDirection: 'column',
      justifyContent:'flex-end',
      alignItems:'center',
      marginTop:20,
  
    },
    boxSecundario: {
        backgroundColor:'white',
        width:windowWidth - 50,
        height:windowHeight - 300 ,
        display:'flex',
        flexDirection: 'column',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginTop:30,
        display: 'flex',
        justifyContent:'flex-start',
        alignItems:'center'
    
      },
    texto:{
      color:'black',
      fontSize:25,
      alignSelf:'flex-start',
      marginLeft:17,
      marginTop:10
    },
    textoBotao:{
        fontSize:20,
        color: "#fff"
    },
    
      botao: {
        width: 250,
        marginTop:50,
        height:50,
        backgroundColor: 'darkviolet',
        display:'flex',
        alignItems:"center",
        justifyContent:"center"
      },
    principal: {
      display:'flex',
      flexDirection: 'collumn',
      justifyContent:'center',
      alignItems:'center',
      flexWrap:'nowrap',
      backgroundColor:'white'
  
    }
  });


export default Login;