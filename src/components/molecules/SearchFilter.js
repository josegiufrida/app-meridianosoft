import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import colors from '../../theme/colors';

import FilterBtn from '../atoms/FilterBtn';

const SearchFilter = ({filters, setFilter, selected}) => {

	const renderItem = ({ item }) => {
		return(
			<FilterBtn
				filter={item}
				selected={
					item.id === selected?.id
				}
				setFilter={setFilter}
			/>
		);
	};

    return (
		<View>

			<FlatList
				data={filters}
				renderItem={renderItem}
				horizontal={true}
				contentContainerStyle={{paddingVertical: 10}}
			/>

		</View>
    );
}


const styles = StyleSheet.create({
    
});
  

export default SearchFilter;