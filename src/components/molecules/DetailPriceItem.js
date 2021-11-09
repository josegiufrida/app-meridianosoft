import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, ToastAndroid, TouchableWithoutFeedback, Alert, Dimensions } from 'react-native';
import colors from '../../theme/colors';
import Clipboard from '@react-native-clipboard/clipboard';

import DetailIcon from '../atoms/DetailIcon';
import capitalizeAll, { roundNumber } from '../../utils/utils';

const DataItem = ({info}) => {

    function copy_value_to_clipboard(text){
        Clipboard.setString(text);
        ToastAndroid.show('Copiado', ToastAndroid.SHORT);
    }

	const renderItem = info.map( item => {

		const precio = '$' + roundNumber(item.precio);

        return (
			<View key={item.precio + item.lista}>
				<TouchableWithoutFeedback
					delayLongPress={1000}
					onLongPress={ () => copy_value_to_clipboard(precio) }
				>
					<View style={{marginBottom: 14}}>
						<Text style={styles.list_name}>{item.lista}</Text>
						<View style={styles.price_box}>
							<Text style={styles.price}>{precio}</Text>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
    });


	if( info.length ){
		return (
			<View style={styles.container}>
				{renderItem}
			</View>
		);
	} else {
		return (<></>);
	}
}


const styles = StyleSheet.create({
    container: {
		flexDirection: 'row-reverse',
		flexWrap: 'wrap',
		justifyContent: 'space-between',

        paddingTop: 25,
		paddingBottom: 14,
        paddingHorizontal: 14,
        borderBottomColor: colors.borderColor,
        borderBottomWidth: 1,
    },

    list_name:{
        fontSize: 16,
		textAlign: 'center',
		marginBottom: 5,
        color: colors.textSecondary,
    },

	price_box: {
		backgroundColor: 'rgba(56, 193, 163, 0.9)',
		paddingVertical: 6,
		paddingHorizontal: 14,
		borderRadius: 10,
	},

    price:{
        fontSize: 18,
		color: colors.white
    },
});
  

export default DataItem;