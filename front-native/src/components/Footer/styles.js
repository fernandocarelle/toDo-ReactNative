import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        backgroundColor: '#2A9D8F',
        borderTopWidth: 5,
        borderTopColor: '#F4A261',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        position: 'relative',
        top: -25
    },
    image: {
        width: 80,
        height: 80

    },
    text: {
        position: 'relative',
        bottom: 20,
        color: '#fff'
    }

});

export default styles;