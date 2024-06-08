import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
`;

const LinkText = styled.Text`
  color: #6200ee;
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #8eb8cf;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const BottomTextContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const BottomText = styled.Text`
  color: #333;
`;

const LoginScreen = () => {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    setLoading(true);
    // Aquí podrías implementar la lógica de autenticación
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Login', `Usuario: ${dni}\nContraseña: ${password}`);
      // Si el login es exitoso, navega a la pantalla principal
      // navigation.navigate('Home');
    }, 2000); // Simula una espera de 2 segundos para el login
  };

  return (
    <Background source={require('../../assets/backgroundLogin.jpg')}>
      <Overlay>
        <Title>ClinicaApp</Title>
        <Input
          placeholder="Usuario(DNI)"
          value={dni}
          onChangeText={setDni}
        />
        <Input
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <LinkText>¿Olvidó su contraseña?</LinkText>
        <Button onPress={() => navigation.navigate('Home')}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <ButtonText>Ingresar</ButtonText>
          )}
        </Button>
        <BottomTextContainer>
          <BottomText>¿No tiene una cuenta? </BottomText>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <LinkText>ingrese aquí</LinkText>
          </TouchableOpacity>
        </BottomTextContainer>
      </Overlay>
    </Background>
  );
};

export default LoginScreen;

