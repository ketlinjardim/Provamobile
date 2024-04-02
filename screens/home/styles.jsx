import {StyleSheet} from "react-native";

export const estilo = StyleSheet.create({
    tela:{
        flex:1,
        backgroundColor: "#f1faee",
        marginTop:35
    },


    tela2:{

        padding:20
    },


    cabecalho:{

        padding:20,
        flexDirection:'row',
        backgroundColor:'#00b4d8',
        height:100,
        justifyContent:'space-around'
    },

    imgperfil:{
        justifyContent:'center',
        alignItems:'center'
    },

    imglupa:{
        height:40,
        width:40,
    },

    botaolupa:{

        borderRadius:5,
        backgroundColor: '#f1faee',
        height:60,
        width:60,
        justifyContent:'center',
        alignItems:'center'
    },


    forai:{
        margin:1,
        borderRadius:5,
        height:'100%',
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#f1faee',
        
    },

    input:{
        height:50,
        width:'95%',
        backgroundColor:'#caf0f8',
        borderRadius: 5,
        padding:10,
        fontSize:25,
    },

    titulo:{
        marginTop: 30,
        fontSize:50,
        fontWeight: 'bold',
        borderRadius: 10,
        
      
    },

    sutitulo:{
        fontSize:25,
        marginTop:15,
        marginBottom:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    form:{
        flexDirection: 'row',
        width:"100%",
        backgroundColor:'#faedcd',
        padding:10,
        borderRadius:10
    },
    inputtext:{
        flex: 1,
        fontSize: 26,
        padding:15,
        backgroundColor: '#f1faee',
        borderRadius: 10,
        margin:5
    },
    botao:{
        width: 70,
        backgroundColor: '#00b4d8',
        borderRadius: 10,
        display:'flex',
        justifyContent: 'center',
        alignItems: "center",
        margin: 2,
        
    },

    adicionar:{
        fontSize:40,
    },

    cards:{

        padding:20
    },

    pp:{
        height:70,
        width:'100%',

    }

})