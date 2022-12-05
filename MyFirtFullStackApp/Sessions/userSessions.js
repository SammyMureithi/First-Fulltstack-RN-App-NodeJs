import AsyncStorage from '@react-native-async-storage/async-storage';
import {json} from 'express';

async function getCurrentUser() {
  try {
    const user = await AsyncStorage.getItem('@user');
    if (!user) return null;
    return user;
  } catch (error) {
    console.log('Errores++++' + error);
  }
}
async function setCurrentUser(details) {
  try {
    const userId = await AsyncStorage.setItem('@user', JSON.stringify(details));
  } catch (error) {}
}
export {getCurrentUser, setCurrentUser};
