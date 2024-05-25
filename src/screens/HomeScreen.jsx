import React from 'react';
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
  color: #333;
`;

const Description = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
`;

const StyledButton = styled.Button`
  background-color: #6200ee;
  color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  margin-top: 20px;
`;

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Welcome to ClinicaApp</Title>
      <Description>Manage your treatments and appointments efficiently.</Description>
      <StyledButton title="View Treatments" onPress={() => navigation.navigate('Treatment')} />
    </Container>
  );
};

export default HomeScreen;
