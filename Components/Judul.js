import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
    render(){
        return(
            <Text style={salon.judul}>BIODATA</Text>
        )
    }
}
const salon={
    judul:{
        color: '#000',
        fontSize: 30,
        textAlign : 'center',
        backgroundColor:'#0f0',
    }

}
export default Judul;