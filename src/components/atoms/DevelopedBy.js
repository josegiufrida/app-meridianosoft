
import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';


function DevelopedBy() {

    return (
        <>
			<Text style={styles.text}>Desarrollado por </Text>
			<Text style={styles.link}
				onPress={() => Linking.openURL('https://meridianosoft.com.ar')}>
				MeridianoSoft
			</Text>
		</>
    );
}


const styles = StyleSheet.create({
    text: {
        color: colors.textPrimary, 
		fontFamily: fonts.type.poppinsRegular,
		fontSize: 14,
    },

	link: {
		color: colors.primary,
		fontFamily: fonts.type.poppinsMedium,
		fontSize: 14,
	}
});

  
export default DevelopedBy;