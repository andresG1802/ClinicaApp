import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { getTreatmentsById } from '../services/treatmentById';

const TreatmentDetailScreen = ({ route }) => {
  const { id } = route.params;
  const [treatment, setTreatment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTreatment = async () => {
      try {
        const result = await getTreatmentsById(id);
        setTreatment(result);
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchTreatment();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
      </View>
    );
  }

  if (!treatment) {
    return (
      <View style={styles.container}>
        <Text>No treatment found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>Tratamientos</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Detalles del Tratamiento</Text>
        <View style={styles.detailRow}>
          <Text style={styles.label}>ID:</Text>
          <Text style={styles.value}>{treatment.id}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Emergencia ID:</Text>
          <Text style={styles.value}>{treatment.emergencia_id}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Descripción:</Text>
          <Text style={styles.value}>{treatment.descripcion}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Medicamentos:</Text>
          <Text style={styles.value}>{treatment.medicamentos}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Instrucciones:</Text>
          <Text style={styles.value}>{treatment.instrucciones}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6200ee',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  value: {
    fontSize: 18,
    color: '#666',
    flex: 2,
  },
});

export default TreatmentDetailScreen;
