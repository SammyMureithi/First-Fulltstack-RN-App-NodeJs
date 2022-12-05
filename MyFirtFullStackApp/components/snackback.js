import React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {Snackbar} from 'react-native-paper';

function SnackbackComponent({visible, message, error, handleSnackDismiss}) {
  return (
    <Snackbar
      visible={visible}
      duration={4000}
      style={{backgroundColor: error ? 'red' : 'green', alignItems: 'center'}}
      onDismiss={handleSnackDismiss}>
      {message}
    </Snackbar>
  );
}

export default SnackbackComponent;
