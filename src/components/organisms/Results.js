import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator, Alert } from 'react-native';
import colors from '../../theme/colors';
import ErrorMsg from '../molecules/ErrorMsg';
import API from '../../utils/api';
import axios from 'axios';

import Result from '../molecules/Result';
import { AuthContext } from '../../utils/AuthContext';




const Results = ({search, filter}) => {


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

        if(filter !== lastFilter && !search){
            return;
        }

        refreshQuery();
        queryApi(true);

    }, [search, filter]);


    const refreshQuery = () => {
        setLoading(true);
        setloadingMore(false);
        setIsLastPage(false);
        setError(false);
        setErrorMessage(null);
        setLastFilter(filter);
    };


    const queryApi = async (new_query) => {
        try {

            var parms = new URLSearchParams({
                search: search,
                filter: filter?.id,
            });

            var query_url = ( new_query ? API.CLIENTS + '?' + parms : pagination.next_page_url );

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
                    title={item.razon_social}
                    subTitle={`Cod. ${item.id_cliente}`}

                    search={search}
                    filter={filter}
                    ocurrence={
                        filter && filter.id != 'id_cliente' && search ? item[filter.id] : null
                    }
                />
            }
            </>
        );
    };
    


    return (
        <View style={{flex: 1, justifyContent: 'center'}}>

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
                        keyExtractor={item => item.id_cliente}
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