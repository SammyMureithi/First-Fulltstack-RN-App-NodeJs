import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Card, TextInput} from 'react-native-paper';
import {useState} from 'react';
import SnackbackComponent from '../components/snackback';
import ProgessBarComponent from '../components/progessBar';
const Login = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [visible, setVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [taostError, setToastError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  async function handleLogin() {
    setIsLoading(prevState => !prevState);
    if (username !== null && password !== null) {
      try {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        fetch('https://8ee7-105-160-25-207.in.ngrok.io/LearnPhp/login.php', {
          method: 'POST',
          headers: {},
          body: formData,
        })
          .then(res => res.json())
          .then(data => {
            setVisible(prevShow => !prevShow);
            setToastMessage(data.message);
            setToastError(data.error);
            setIsLoading(prevState => !prevState);
          })
          .catch(e => console.log('Errr' + e));
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsLoading(prevState => !prevState);
      setToastMessage('Ensure all fields are field');
      setVisible(true);
      setToastError(true);
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
              source={require('../images/AF.PNG')}
              style={{width: 150, height: 150}}
            />
            {isLoading ? <ProgessBarComponent /> : null}
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
        message={toastMessage}
        error={taostError}
        handleSnackDismiss={handleSnackDismiss}
        visible={visible}
      />
    </View>
  );
};

export default Login;
