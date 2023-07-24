import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ReservationPage from './components/ReservationPage';

const App = () => {
  const [isReservationPageVisible, setReservationPageVisible] = useState(false);

  const goToReservationPage = () => {
    setReservationPageVisible(true);
  };

  const onReservationDone = () => {
    setReservationPageVisible(false);
  };

  return (
    <View style={styles.container}>
      {isReservationPageVisible ? (
        <ReservationPage onReservationDone={onReservationDone} />
      ) : (
        <>
          <Text style={styles.title}>Hoş Geldiniz</Text>
          <TouchableOpacity style={styles.button} onPress={goToReservationPage}>
            <Text style={styles.buttonText}>Rezervasyon Yap</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
