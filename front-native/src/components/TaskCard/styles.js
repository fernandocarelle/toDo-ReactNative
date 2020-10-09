import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '90%',
        marginVertical: 10,
        height: 90,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 2,
      },
      cardLeft: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      typeActive: {
        width: 50,
        height: 50
      },
      cardTitle: {
        marginLeft: 10,
        fontWeight: 'bold', 
        fontSize: 16
      },
      cardRight: {
        alignItems: 'flex-end',
        justifyContent: 'space-between'
      },
      cardDate: {
        color: '#f4a261',
        fontWeight: 'bold',
        fontSize: 16
      },
      cardTime: {
        color: '#707070'
      },
      cardDone: {
        opacity: 0.5
      }

});

export default styles