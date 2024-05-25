import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { getTreatments } from '../services/treatmentService';

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;

const TableHeader = styled.View`
  flex-direction: row;
  padding: 10px;
  background-color: #6200ee;
`;

const TableHeaderText = styled.Text`
  flex: 1;
  font-size: 14px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

const TableRow = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const TableRowText = styled.Text`
  flex: 1;
  font-size: 14px;
  color: #333;
  text-align: center;
`;

const TreatmentScreen = () => {
  const navigation = useNavigation();
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const result = await getTreatments();
        setTreatments(result);
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchTreatments();
  }, []);

  const handleRowPress = () => {
    navigation.navigate('TreatmentDetail');
  };

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#6200ee" />
      </Container>
    );
  }

  // if (error) {
  //   return (
  //     <Container>
  //       <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
  //     </Container>
  //   );
  // }

  return (
    <Container>
      <TableHeader>
        <TableHeaderText>ID</TableHeaderText>
        <TableHeaderText>Emergencia ID</TableHeaderText>
        <TableHeaderText>Descripcion</TableHeaderText>
        <TableHeaderText>Medicamentos</TableHeaderText>
        <TableHeaderText>Instrucciones</TableHeaderText>
      </TableHeader>
      <FlatList
        data={treatments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TableRow onPress={() => handleRowPress()}>
            <TableRowText>{item.id}</TableRowText>
            <TableRowText>{item.emergencia_id}</TableRowText>
            <TableRowText>{item.descripcion}</TableRowText>
            <TableRowText>{item.medicamentos}</TableRowText>
            <TableRowText>{item.instrucciones}</TableRowText>
          </TableRow>
        )}
      />
    </Container>
  );
};

export default TreatmentScreen;
