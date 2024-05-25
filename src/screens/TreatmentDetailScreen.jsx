import React from 'react';
import { View, Text } from 'react-native';

const TreatmentDetailScreen = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>name treatment</Text>
      <Text style={{ fontSize: 16, color: '#666', textAlign: 'center' }}>name description</Text>
    </View>
  );
};

export default TreatmentDetailScreen;

