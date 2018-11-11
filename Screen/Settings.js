import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Settings extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.judul}>SETTING</Text>
                <Text style={styles.title}>Febriansyah Rizqi Putra Setiyadi </Text>
                <Text style={styles.title}>XI RPL 4 </Text>
                <Text style={styles.title}>SMK Telkom Purwokerto </Text>
                <Text style={{ marginBottom : 100}}></Text>
            </View>
            )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  judul: {
    color : "#fff",
    fontSize : 40,
    marginBottom:50,
  },

title: {
    textAlign: 'center',
    color : "#fff",
    fontSize : 15,
},
})