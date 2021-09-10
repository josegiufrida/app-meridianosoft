import React from 'react';
import { StyleSheet, ScrollView, Text, View, Alert } from 'react-native';

import colors from '../../theme/colors';

import SvgIcons from '../../assets/svg/SvgIcons';


const DataIcon = ({src}) => {

	return(
		<View style={styles.container}>
			<SvgIcons src={src}/>
		</View>
	);
};


const styles = StyleSheet.create({
    container: {
        height: 46,
        width: 46,

        padding: 11,
        borderRadius: 6, 
		backgroundColor: colors.arrowCircle,
		elevation: 8,
    },
});


export default DataIcon;