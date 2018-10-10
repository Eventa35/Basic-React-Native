import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default Biodata = (props) => (
  <View style={forstyle.container}>
    <View style={forstyle.background}>
      <View>
        <Image style={forstyle.photo} source={require('../me.jpg')}/>
      </View>
      <View style={forstyle.description}>
        <Text style={forstyle.name}>Nama    : Rizky Eventa Bahtiar</Text>
        <Text style={forstyle.name}>NO         : 29</Text>
        <Text style={forstyle.name}>Kelas     : XI RPL 4</Text>
      </View>
    </View>
      <View style={forstyle.footer}>
        <Text style={forstyle.smk}>Biodata</Text>
        <Text>Berhasil Login</Text>
      </View>
  </View>
)

const forstyle = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e4982',
    width: 300,
    height: 300,
    padding: 0,
    borderRadius: 10,
    marginBottom: 0
  },
  photo: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  description: {
    margin: 35,
    marginTop: 35,
    marginLeft: 5,
    marginRight: 5
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#f2f2f2'
  },
  footer: {
    marginTop: 80,
    alignItems: 'center'
  },
  smk: {
    fontSize: 20,
    fontWeight: 'bold',
  }
}