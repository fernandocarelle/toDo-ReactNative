import React, { useState } from 'react';
import { View, ScrollView, Image, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Switch, Alert } from 'react-native';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import styles from './styles';
import typeIcons from '../../utils/typeIcons';

import DateTimeInput from '../../components/DateTimeInput/index';

import api from '../../services/api';


export default function Task({ navigation }){
    const[done, setDone] = useState(false);
    const[type, setType] = useState();
    const[title, setTitle] = useState();
    const[description, setDescription] = useState();
    const[date, setDate] = useState();
    const[hour, setHour] = useState();
    const[macaddress, setMacaddress] = useState('11:11:11:11:11:11');

    async function New(){

        if(!type)
        return Alert.alert('Defina um tipo para a tarefa');

        if(!title)
        return Alert.alert('Defina o nome da tarefa');

        if(!description)
        return Alert.alert('Defina a descrição da tarefa');

        if(!date)
        return Alert.alert('Defina uma data para a tarefa');

        if(!hour)
        return Alert.alert('Defina uma hora para a tarefa');

        await api.post('/task', {
            macaddress,
            type,
            title,
            description,
            when: `${date}T${hour}.000`
        }).then(() => {
            navigation.navigate('Home');
        });
    }

    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true} navigation={navigation} />
            <ScrollView style={{width: '100%' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical: 10}} >
                    {
                        typeIcons.map((icon, index) => (
                            icon != null &&
                        <TouchableOpacity onPress={() => setType(index)} >
                            <Image source={icon} style={[styles.imageIcon, type && type !== index && styles.typeIconInative]} />
                        </TouchableOpacity>
                        ))
                    }
                    
                </ScrollView>

                <Text style={styles.label}>Título</Text>
                <TextInput style={styles.input} maxLength={30} placeholder='Lembre-me de fazer...' onChangeText={(text) => setTitle(text) } value={title} />

                <Text style={styles.label}>Detalhes</Text>
                <TextInput style={styles.inputArea} maxLength={200} multiline={true} placeholder='Detalhes da atividade que eu tenho que lembrar...' onChangeText={(text) => setDescription(text) } value={description} />
                
                <DateTimeInput type={'date'} save={setDate} />
                <DateTimeInput type={'hour'} save={setHour} />

                <View style={styles.inline} >
                    <View style={styles.inputInline}>
                        <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#00761B' : '#f4a261'} />
                        <Text style={styles.SwitchLabel}>Concluído</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.removeLabel}>EXCLUÍR</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <Footer icon={ 'save' } />
        </KeyboardAvoidingView>
    )
}