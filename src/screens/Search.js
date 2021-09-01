import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

import SearchInput from '../components/atoms/SearchInput';
import Results from '../components/organisms/Results';

const Search = ({search}) => {
    return(
        <View style={styles.container}>

            <SearchInput />
            <Results />
            
        </View> 
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        flexDirection: 'column'
    },

    title: {
        fontSize: 26,
    },

    subtitle: {
        fontSize: 14,
        marginBottom: 30,
    }
});

export default Search;