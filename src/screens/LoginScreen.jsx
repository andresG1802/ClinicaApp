import React from 'react';
import { Button, TextInput } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled(TextInput)`
  width: 80%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
`;

const StyledButton = styled(Button)`
  background-color: #6200ee;
  color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
`;

const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Login</Title>
      <Input placeholder="Username" />
      <Input placeholder="Password" secureTextEntry={true} />
      <StyledButton title="Login" onPress={() => navigation.navigate('Home')} />
    </Container>
  );
};

export default LoginScreen;
