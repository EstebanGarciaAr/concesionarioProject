import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const ServiceCalendar = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
  );
};

export default ServiceCalendar;