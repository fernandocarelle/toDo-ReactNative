import React, { useState } from 'react';
import { View, ScrollView, Image, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Switch } from 'react-native';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import styles from './styles';
import typeIcons from '../../utils/typeIcons';


export default function Task(){
    const[done, setDone] = useState(false);

    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true} />
            <ScrollView style={{width: '100%' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical: 10}} >
                    {
                        typeIcons.map(icon => (
                            icon != null &&
                        <TouchableOpacity>
                            <Image source={icon} style={styles.imageIcon} />
                        </TouchableOpacity>
                        ))
                    }
                    
                </ScrollView>

                <Text style={styles.label}>Título</Text>
                <TextInput style={styles.input} maxLength={30} placeholder='Lembre-me de fazer...' />

                <Text style={styles.label}>Detalhes</Text>
                <TextInput style={styles.inputArea} maxLength={200} multiline={true} placeholder='Detalhes da atividade que eu tenho que lembrar...' />
                
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