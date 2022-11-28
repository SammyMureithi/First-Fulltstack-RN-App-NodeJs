import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Card, TextInput} from 'react-native-paper';
import {useState} from 'react';

function ForgotPassword({navigation}) {
  const [username, setUsername] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCPassword] = useState('');

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
              label="National Id"
              mode="outlined"
              secureTextEntry={true}
              value={nationalId}
              onChangeText={nationalId => setNationalId(nationalId)}
            />
            <TextInput
              label="Phone Number"
              mode="outlined"
              value={phoneNumber}
              onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
            />
            <TextInput
              label="Password"
              mode="outlined"
              secureTextEntry={true}
              value={password}
              onChangeText={password => setPassword(password)}
            />
            <TextInput
              label="Confirm Password"
              mode="outlined"
              value={Cpassword}
              secureTextEntry={true}
              onChangeText={Cpassword => setCPassword(Cpassword)}
            />
          </View>
          <View style={{marginTop: 20}}>
            <TouchableOpacity>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: 'green',
                  padding: 5,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}>
                  Reset Password
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    color: 'green',
                    padding: 10,
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

export default ForgotPassword;
