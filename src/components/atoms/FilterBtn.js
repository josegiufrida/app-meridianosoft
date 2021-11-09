import * as React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import colors from '../../theme/colors';


const FilterBtn = ({filter, selected, setFilter}) => {
    return (
		<TouchableHighlight 
			activeOpacity={0.8}
			underlayColor='transparent'
			onPress={() => setFilter(filter)}
		>
			<View style={[styles.container, selected ? styles.selected : '' ]}>
				<Text style={[styles.text, selected ? styles.textSelected : '']}>{filter.name}</Text>
			</View>
		</TouchableHighlight>
    );
}


const styles = StyleSheet.create({
    container: {
		paddingHorizontal: 18,
		paddingVertical: 8,
		marginHorizontal: 5,
		backgroundColor: colors.white,
		shadowColor: '#575757',
		elevation: 8,
		borderRadius: 50
	},
	
	text: {
		fontSize: 14
	},

	selected: {
		backgroundColor: colors.primary,
	},

	textSelected: {
		color: colors.white
	},
});
  

export default FilterBtn;