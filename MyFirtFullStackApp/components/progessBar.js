import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {Card} from 'react-native-paper';

function ProgessBarComponent() {
  return (
    <Card
      style={{
        justifyContent: 'center',
        width: '90%',
        top: '60%',
        position: 'absolute',
        alignSelf: 'center',
      }}>
      <Card.Content
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text style={{color: 'black', fontWeight: 'bold', paddingLeft: 10}}>
          Please wait ...
        </Text>
      </Card.Content>
    </Card>
  );
}

export default ProgessBarComponent;
