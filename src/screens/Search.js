import React, { useState, useEffect }  from 'react';
import { StyleSheet, ScrollView, Text, View, Alert } from 'react-native';

import SearchInput from '../components/atoms/SearchInput';
import SearchFilter from '../components/molecules/SearchFilter';
import Results from '../components/organisms/Results';





const Search = ({table}) => {

    const [search, setSearch] = useState(null);
    const [filters, setFilters] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [error, setError] = useState(false);


    useEffect(() => {
        getFilters();
    }, []);


    const getFilters = async () => {
        try {

            var api_url = 'https://meridianosoft.com.ar/api/v1.0/filters/clients';

            const response = await fetch(api_url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': '4|X8HLVJj6vo7V9a1hDPGNIU10c4R0BDhC8f0txz3D',       // ##################
                }
            });

            var json = await response.json();

            setFilters(json);

        } catch (error) {
            setError(true);
        }
    };

   

    return(
        
        <View style={styles.container}>

            <SearchInput setSearch={setSearch} />

            <SearchFilter filters={filters} setFilter={setSelectedFilter} selected={selectedFilter} />
            
            <Results search={search} filter={selectedFilter} />
            
        </View> 
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        flexDirection: 'column',
    },
});

export default Search;