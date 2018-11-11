import React, {Component} from 'react';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';
import {Container, Content, Thumbnail, Button} from 'native-base';

export class Home extends React.Component{
  render(){
    return(
      <View style= {Styles.container}>
          <Text style={Styles.title}>
            Welkom tu Mobel Lejen
          </Text>

          <Image
           style={Styles.gambar}
           source={require('./image/emel.jpg')}
          />

          <Text style={Styles.Judul}>
            Enemy Has Been Slain
          </Text>
          <Text style={Styles.Judul}>
            You Destroyed a Turret
          </Text>
          <Text style={Styles.Judul}>
            Victory
          </Text>
          
          <Button block style={Styles.button}  onPress={() => this.props.navigation.navigate('Heroes')}
          >
            <Text style={{color: '#fff'}}>Lets Start</Text>
          </Button>
        </View>
    );
  }
}

const Styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    title: {
      fontSize: 25, 
      marginTop:55, 
      textAlign: 'center', 
      color: '#fff',  
    },

    gambar: {
        alignItems: 'center', 
        width: 350, 
        height:200, 
        marginBottom: 30, 
        marginTop:30, 
    },

    Judul: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white'
    },

    button: {
        alignItems: 'center',   
        marginTop: 30,
        borderRadius: 30,
        backgroundColor: '#000666',
        marginVertical: 30,
        paddingVertical: 30,
        
    },
}