import  { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert  } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function App() {
  const [password, setPassword] = useState('');

  function generatePassword() {
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#';
    let newPass = '';

    for (let i = 0; i < 12; i++) {
      newPass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(newPass);
  }

  
  function copyPassword() {
    if (!password) {
      Alert.alert("Atenção", "Gere uma senha primeiro!");
      return;
    }
    Clipboard.setString(password);
    Alert.alert("Copiado!", "A senha foi copiada para a área de transferência.");
  }

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="emoticon-bat" size={100} color="#f1c40f" />
      
      <Text style={styles.title}>BAT PASSWORD</Text>

      <View style={styles.passwordBox}>
        <Text style={styles.passwordText}>
          {password || '••••••••'}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GERAR SENHA</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.buttonCopy]} 
        onPress={copyPassword}
      >
        <Text style={[styles.buttonText, { color: '#f1c40f' }]}>COPIAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    color: '#f1c40f',
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  passwordBox: {
    backgroundColor: '#1a1a1a',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f1c40f',
    marginBottom: 25,
    alignItems: 'center',
  },
  passwordText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  button: {
    backgroundColor: '#f1c40f',
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonCopy: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#f1c40f',
  },
  buttonText: {
    color: '#0d0d0d',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
