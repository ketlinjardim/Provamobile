import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from "react-native"
import { estilo } from "./styles"
import Card from "../../components/card"
export default function Home(){

    const Lista = ["ketlin","bruno","yas","lele", "keket","babu","haha"]

    return(
        <View style = {estilo.tela}>

            <View>
            <Image source={require('../../assets/imagemazul.jpg')} style={estilo.pp} />
                
                <View style ={estilo.cabecalho}>

                   
                    <View style={estilo.forai}>
                        <TextInput style = {estilo.input}>
                            BABALU
                        </TextInput>
                    </View>
                    <TouchableOpacity style ={estilo.botaolupa}>
                    <Image source={require('../../assets/procurar.png')} style={estilo.imglupa}  />
                    </TouchableOpacity>



                </View>
            </View>

           
             <FlatList
           data={Lista}
           keyExtractor={item => item}
           renderItem={({item} )=>(
            <Card key={item} name={item}/>
           )} 

           style ={estilo.cards}
          
           />
        </View>
    )
}