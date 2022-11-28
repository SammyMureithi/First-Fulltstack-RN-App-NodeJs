import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Card, TextInput} from 'react-native-paper';
import {useState} from 'react';
import {getCurrentUser, setCurrentUser} from '../Sessions/userSessions';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function handleLogin() {
    await setCurrentUser({name: 'Sammy', id: 1, role: 0});
    let User = await getCurrentUser();
    console.log(User);
    console.log('Hallos');
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
    </View>
  );
};

export default Login;
