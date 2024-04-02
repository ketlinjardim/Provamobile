import { View,Text,TouchableOpacity, Image } from "react-native"
import {estile} from "./styles"

export default function Card({name}){
    return(

        <View >
            <View>
            <View style = {estile.container}>
                <View style ={estile.excluir}>
                    <Image  source={require('../../assets/imagem-perfil-removebg-preview.png')} style={estile.perfil}/>
                </View>
               
              <Text style = {estile.textol}>
                {name}
              </Text>
             
            </View>
            </View> 
         
        </View>
       
    )
}