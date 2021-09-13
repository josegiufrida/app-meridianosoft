import axios from 'axios';
import React, { useState, useEffect }  from 'react';
import { StyleSheet, ScrollView, Text, View, Alert } from 'react-native';

import SearchInput from '../components/atoms/SearchInput';
import SearchFilter from '../components/molecules/SearchFilter';
import Results from '../components/organisms/Results';
import API from '../utils/api';





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

            const response = await axios.get(API.FILTERS.CLIENTS);

            const filtros = await response.data;

            // Default filter
            setSelectedFilter(filtros.find( filtro => filtro.default ));

            setFilters(filtros);

        } catch (error) {
            console.log(error);
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