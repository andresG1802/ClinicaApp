import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.Text`
  font-size: 18px;
  color: #666;
  margin-top: 10px;
  text-align: center;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: #6200ee;
  border-radius: 8px;
  padding: 15px 30px;
  margin-top: 30px;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Welcome to ClinicaApp</Title>
      <Description>Manage your treatments and appointments efficiently.</Description>
      <ButtonContainer onPress={() => navigation.navigate('Treatment')}>
        <ButtonText>View Treatments</ButtonText>
      </ButtonContainer>
    </Container>
  );
};

export default HomeScreen;

