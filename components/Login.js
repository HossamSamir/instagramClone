import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  Text,
  Button,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';


export default () => (

  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
  <Image
    source={{uri: 'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/20045864_498693043805931_133968181_n.png?oh=ff9c482106a4ab3859f01016b8667011&oe=5966C5DC'}}
    style={
      {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
      }
  } />

  <Image
    source={{uri: 'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/19964723_498693020472600_152053877_n.png?oh=97002dc0c5c40cd9c49811145ba0340f&oe=5966BC87'}}
    style={
      {
        width: '60%',
        height: 115,
        position: 'absolute',
        resizeMode: 'contain',
        top: 140
      }
  } />

  <TextInput
  placeholder="Username"
  underlineColorAndroid="transparent"
  placeholderTextColor='rgba(255, 255, 255, .4)'
  style={{
    position: 'absolute',
    top: 250,
    fontWeight: 'bold',
    width: '80%',
    fontSize: 20,
    backgroundColor: 'rgba(255, 255, 255, .1)',
    padding: 10,
    borderRadius: 5
  }}
  />

  <TextInput
    placeholder="Password"
    underlineColorAndroid="transparent"
    placeholderTextColor='rgba(255, 255, 255, .4)'
  style={{
    position: 'absolute',
    top: 312,
    width: '80%',
    fontSize: 20,
    backgroundColor: 'rgba(255, 255, 255, .1)',
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
  }}
  />

  <TouchableOpacity style={{
  position: 'absolute',
  width: '80%',
  top: 375,
  backgroundColor: 'transparent',
  borderColor: 'rgba(255, 255, 255, .1)',
  borderWidth: 2,
  padding: 10,
  borderRadius: 5,
  alignItems: 'center'
  }}>
  <Text style={{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, .3)'
  }}>Login</Text>
  </TouchableOpacity>



  <View style={{
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, .1)',
    borderWidth: 2,
    alignItems: 'center',
    borderColor: 'transparent',
    borderTopColor: 'rgba(255, 255, 255, .1)',
    backgroundColor: 'rgba(255, 255, 255, .1)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  }}>
    <Text style={{
      padding: 20,
      fontSize: 15,
      fontWeight: 'bold',
      opacity: .5,
      color: 'white'
    }}>
      Don't have an account?



    </Text>


  </View>



  </View>


);
