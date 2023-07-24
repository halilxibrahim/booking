import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

const ReservationPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [reservations, setReservations] = useState([]);

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const saveReservation = () => {
    if (selectedDate && name !== '') {
      const newReservation = {
        date: selectedDate,
        name: name,
        notes: notes,
      };
      setReservations([...reservations, newReservation]);
      setSelectedDate(null);
      setName('');
      setNotes('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.reservationItem}>
      <Text style={styles.reservationDate}>{item.date}</Text>
      <Text style={styles.reservationName}>{item.name}</Text>
      <Text style={styles.reservationNotes}>{item.notes}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rezervasyon Uygulaması</Text>
      <Calendar
        onDayPress={onDayPress}
        markedDates={selectedDate ? { [selectedDate]: { selected: true, marked: true } } : {}}
        theme={{
          selectedDayBackgroundColor: 'blue',
          selectedDayTextColor: 'white',
          todayTextColor: 'blue',
          arrowColor: 'blue',
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Ad Soyad"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Notlar"
        value={notes}
        onChangeText={(text) => setNotes(text)}
      />
      <TouchableOpacity style={styles.saveButton} onPress={saveReservation}>
        <Text style={styles.saveButtonText}>Rezervasyonu Kaydet</Text>
      </TouchableOpacity>
      {reservations.length > 0 && (
        <>
          <Text style={styles.reservationListTitle}>Rezervasyonlar:</Text>
          <FlatList
            data={reservations}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reservationListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  reservationItem: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  reservationDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reservationName: {
    fontSize: 16,
  },
  reservationNotes: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 5,
  },
});

export default ReservationPage;
