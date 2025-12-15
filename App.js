import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [amount, setAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  
  // Mock exchange rate (in real app, fetch from API)
  const exchangeRate = 0.85;
  const convertedAmount = (parseFloat(amount) || 0) * exchangeRate;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          placeholder="Enter amount"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>From: {fromCurrency}</Text>
        <Text style={styles.label}>To: {toCurrency}</Text>
      </View>

      <View style={styles.resultCard}>
        <Text style={styles.resultLabel}>Converted Amount</Text>
        <Text style={styles.resultValue}>
          {convertedAmount.toFixed(2)} {toCurrency}
        </Text>
      </View>

      <Text style={styles.note}>
        This is a simplified demo for Snack.{'\n'}
        Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
    color: '#1a1a1a',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  resultCard: {
    backgroundColor: '#2563eb',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
    opacity: 0.9,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
  note: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginTop: 12,
  },
});
