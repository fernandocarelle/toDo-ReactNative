import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    imageIcon:{
        width: 40,
        height: 40,
        marginHorizontal: 10,
    },
    label: {
        color: '#707070',
        fontSize: 16,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 5,
    },
    input: {
        fontSize: 16,
        padding: 10,
        width: '95%',
        borderBottomWidth: 1,
        borderBottomColor: '#f4a261',
        marginHorizontal: 10
    },
    inputArea:{
        fontSize: 16,
        padding: 10,
        width: '95%',
        marginHorizontal: 10,
        borderRadius: 10,
        height: 100,
        textAlignVertical: 'top'
    },
    inline:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    inputInline: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    SwitchLabel: {
        fontWeight: 'bold',
        color: '#f4a261',
        textTransform: 'uppercase',
        fontSize: 16,
        paddingLeft: 10
    },
    removeLabel: {
        fontWeight: 'bold',
        color: '#2A9D8F',
        textTransform: 'uppercase',
        fontSize: 16,
    
    }
});

export default styles