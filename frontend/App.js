import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SendButton from './components/SendButton';
import service from './service';

export default function App() {
  const [status, setStatus] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handlePress = async () => {
    setLoading(true);
    try {
      const result = await service.sendEmail();
      setStatus({ status: result.status, emailDetails: result.emailDetails });
    } catch (error) {
      setStatus({ status: 'failed', emailDetails: 'Failed to send the email' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Email Sender</Text>
      <SendButton title='Send Button' pressHandler={handlePress} isDisabled={isLoading} />
      <View>
        {status && status.emailDetails && (
          <Text>{JSON.stringify(status.emailDetails, null, 2)}</Text>
        )}
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  },
  text: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
});
