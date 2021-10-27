import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator, Alert } from 'react-native';
import colors from '../../theme/colors';
import ErrorMsg from '../molecules/ErrorMsg';
import API from '../../utils/api';
import axios from 'axios';

import Result from '../molecules/Result';
import { AuthContext } from '../../utils/AuthContext';




const Results = ({collection, search, filters, selectedFilter}) => {

    const [isLoading, setLoading] = useState(true);

    const [data, setData] = useState([]);

    const [pagination, setPagination] = useState(null);

    const [isLastPage, setIsLastPage] = useState(false);

    const [loadingMore, setloadingMore] = useState(false);

    const [error, setError] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null);

    const [lastFilter, setLastFilter] = useState(null);

    const { clearUserData } = useContext(AuthContext);

    
    useEffect(() => {

        if(selectedFilter !== lastFilter && !search){
            return;
        }

        refreshQuery();
        queryApi(true);

    }, [search, selectedFilter]);


    const refreshQuery = () => {
        setLoading(true);
        setloadingMore(false);
        setIsLastPage(false);
        setError(false);
        setErrorMessage(null);
        setLastFilter(selectedFilter);
    };


    const queryApi = async (new_query) => {
        try {

            var parms = new URLSearchParams({
                search: search,
                filter: selectedFilter?.id,
            });

            var query_url = ( new_query ? API.BASE + collection.search + '?' + parms : pagination.next_page_url );

            const response = await axios.get(query_url);

            var json = await response.data;
            

            setData( new_query ? json.data : [...data, ...json.data] );

            setLoading(false);

            setloadingMore(false);

            setPagination({
                'current_page': json.current_page,
                'last_page': json.last_page,
                'next_page_url': json.next_page_url
            });

            if(json.current_page === json.last_page){
                setIsLastPage(true);
            }

        } catch (error) {

            if(error.response){

                console.log(error.response);

                var error_message = error.response.data?.message || 'Ha ocurrido un error';

				switch (error.response.status){

                    case 400:
                        // Invalid query
                        setErrorMessage(error_message);
                        break;

					case 401:
						// Unauthenticated
                        // Back to login
                        clearUserData();
						break;

                    case 403:
                        // Not authorized to this resource
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


    const endReached = () => {
        if(!isLastPage){
            setloadingMore(true);
            queryApi(false);
        }
    };
    

    const footerComponent = () => (
        <>
            { !isLastPage &&
                <ActivityIndicator animating={loadingMore} size='large' color={colors.primary} />
            }
        </>
    );


    const emptyList = () => (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.emptyListText}>Sin resultados</Text>
        </View>
    );




    const renderItem = ({ item }) => {
        // Sin la condicion, el componente se re-renderiza por milisegundos al cambiar el filtro, antes de que
        // Aparezca ActivityIndicator (workaround)
        return (
            <>
            { !isLoading &&
                <Result
                    data={item}
                    title={item[collection.title_field]}
                    subTitle={`Cod. ${item[collection.primary_key]}`}

                    collection={collection}
                    search={search}
                    filters={filters}
                    selectedFilter={selectedFilter}
                    ocurrence={
                        selectedFilter && selectedFilter.id != collection.primary_key && search ? item[selectedFilter.id] : null
                    }
                />
            }
            </>
        );
    };
    


    return (
        <View style={{flex: 1, justifyContent: 'center', marginTop: 11}}>

            { error ? 
            
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ErrorMsg message={errorMessage}/>
                </View>

                :

                isLoading ? 

                    <ActivityIndicator size='large' color={colors.primary} /> 
                    
                    :
                    
                    <FlatList
                        data={data}
                        extraData={data}
                        renderItem={renderItem}
                        keyExtractor={item => item[collection.primary_key]}
                        contentContainerStyle={{ flexGrow: 1 }}
                        onEndReached={() => endReached()}
                        ListFooterComponent={footerComponent}
                        ListEmptyComponent={emptyList}
                    />

            }

        </View>
    );
   

};


const styles = StyleSheet.create({
    emptyListText:{
        fontSize: 16
    }
});

export default Results;