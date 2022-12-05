import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Card, TextInput} from 'react-native-paper';
import {useState} from 'react';
import {getCurrentUser, setCurrentUser} from '../Sessions/userSessions';
import SnackbackComponent from '../components/snackback';

import axios from 'axios';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);
  async function handleLogin() {
    try {
      const formData = new FormData();
      formData.append('username', 'Mum');
      formData.append('password', '7');
      fetch('https://a895-105-160-25-207.ap.ngrok.io/LearnPhp/login.php', {
        method: 'POST',
        headers: {},
        body: formData,
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(e => console.log('Error' + e));
    } catch (error) {
      console.log(error);
    }
  }
  function handleSnackDismiss() {
    setVisible(false);
  }
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Card style={{width: '90%', alignSelf: 'center'}}>
        <Card.Content>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../images/icon.jpg')}
              style={{width: 150, height: 150}}
            />
          </View>
          <View>
            <TextInput
              label="Username"
              mode="outlined"
              value={username}
              onChangeText={username => setUsername(username)}
            />
            <TextInput
              label="Password"
              mode="outlined"
              secureTextEntry={true}
              value={password}
              onChangeText={password => setPassword(password)}
            />
          </View>
          <View style={{marginTop: 20}}>
            <TouchableOpacity onPress={handleLogin}>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: 'green',
                  padding: 5,
                }}>
                <Text
                  style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                  Login
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    color: 'green',
                    padding: 10,
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text
                    style={{textAlign: 'center', fontSize: 15, color: 'green'}}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
      <SnackbackComponent
        message={'Login Successfully'}
        error={false}
        handleSnackDismiss={handleSnackDismiss}
        visible={visible}
      />
    </View>
  );
};

export default Login;
