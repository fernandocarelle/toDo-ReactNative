import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#2A9D8F',
        borderBottomWidth: 5,
        borderBottomColor: '#F4A261',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 30,
        
    },
    notification: {
        position: 'absolute',
        right: 20,
        
    },
    notificationImage: {
        width: 30,
        height: 35
        
    },
    circle: {
        width: 25,
        height: 25,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 13,
        bottom: 13
        
        
    },
    notificationText: {
        color: '#F4A261',
        fontWeight: 'bold'
        
    },
    leftIcon: {
        position: 'absolute',
        left: 20,
        
    },
    leftIconImage: {
        width: 30,
        height: 30
        
    }

});

export default styles;