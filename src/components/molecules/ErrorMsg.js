import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import SvgIcons from '../../assets/svg/SvgIcons';


const ErrorMsg = ({message}) => {

	const messageText = message || 'Ha ocurrido un error';

    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
			<SvgIcons src={'error'} size={35} />
            <Text style={styles.errorText}>{messageText}</Text>
		</View>
    );
}


const styles = StyleSheet.create({
    errorText: {
        marginTop: 8,
        fontSize: 16
    }
});
  

export default ErrorMsg;