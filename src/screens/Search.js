import React, { useState, useEffect, useContext }  from 'react';
import { StyleSheet, ScrollView, Text, View, Alert } from 'react-native';

import axios from 'axios';
import SearchInput from '../components/atoms/SearchInput';
import SearchFilter from '../components/molecules/SearchFilter';
import Results from '../components/organisms/Results';
import API from '../utils/api';
import { AuthContext } from '../utils/AuthContext';





const Search = ({table}) => {

    
    const [search, setSearch] = useState(null);
    const [filters, setFilters] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState(null);

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const { clearUserData } = useContext(AuthContext);


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

            if(error.response){

                var error_message = error.response.data?.message || 'Ha ocurrido un error';

				switch (error.response.status){

					case 401:
						// Unauthenticated
                        // Back to login
                        clearUserData();
						break;

                    case 404:
                        // Table not found
                        setErrorMessage(error_message);
                        break;
                
					default:
                        setErrorMessage(error_message);
					
				}

            } else {
                setErrorMessage('Ha ocurrido un error');
            }
            
            setError(true);

            console.error(error);

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