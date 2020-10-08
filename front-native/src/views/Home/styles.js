import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    filter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center'
    },
    filterTextActived: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#F4A261'
    },
    filterTextInative: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#2A9D8F',
        opacity: 0.5
    },
    content: {
        width: '100%',
        marginTop: 30
    },
    title: {
        width: '100%',
        borderColor: '#2A9D8F',
        alignItems: 'center'
    },
    titleText: {
        color: '#2A9D8F',
        fontSize: 18,
        position: 'relative',
        top: 11,
        backgroundColor: '#fff',
        paddingHorizontal: 10
    }


});

export default styles;