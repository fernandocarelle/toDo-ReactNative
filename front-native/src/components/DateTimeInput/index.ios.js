import React, { useState } from 'react';
import { TouchableOpacity, Image, DatePickerIOS } from 'react-native';

import iconCalendar from '../../assets/Icon awesome-calendar-alt.png';
import iconClock from '../../assets/Icon awesome-clock.png';
import styles from './styles';


export default function DateTimeInputIOS ({ type }){
    const [dateTime, setDateTime] = useState(new Date);

    return(
        <TouchableOpacity style={styles.input}>
            <DatePickerIOS date={dateTime} mode={type} minimumDate={new Date} onDateChange={setDateTime} />
            <Image style={styles.iconTextInput} source={type == 'date' ? iconCalendar : iconClock } />
        </TouchableOpacity>
    )

};