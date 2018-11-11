import React, {Component} from 'react';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';
import {Container, Content, Thumbnail, Button} from 'native-base';

export class Heroes extends React.Component{
  render(){
    return(
      <View style={Styles.subtitle}>
          <Text style={Styles.judul}>
            HEROES
          </Text>

          <Image
           style={Styles.gambar}
            source={require('./image/zilong.jpg')}
          />

          <Image
           style={Styles.gambar}
            source={require('./image/gatot.jpg')}
          />

          <Image
           style={Styles.gambar}
            source={require('./image/alu.jpg')}
          />

        </View>
    );
  }
}

const Styles = {
    subtitle: {
      backgroundColor: '#000000',
    },
    
    judul: {
        textAlign: 'center', 
        color: 'white', 
        fontSize: 25,
        marginTop:20, 
    },

    gambar: {
        alignItems: 'center', 
        width: 380, 
        height:135, 
        marginBottom: 10, 
        marginTop:10, 
    },

}