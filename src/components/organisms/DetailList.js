import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import DetailItem from '../molecules/DetailItem';


const DataList = ({data}) => {
    return(
        <>
			<FlatList
                data={data}
				renderItem={DetailItem}
				keyExtractor={item => item.id_cliente}
				contentContainerStyle={{ flexGrow: 1 }}
				onEndReached={() => endReached()}
				ListFooterComponent={footerComponent}
				ListEmptyComponent={emptyList}
			/>
        </> 
    );
};


const styles = StyleSheet.create({
    container: {
		
    },
});

export default DataList;