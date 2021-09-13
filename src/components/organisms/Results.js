import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator, Alert } from 'react-native';
import colors from '../../theme/colors';
import ErrorMsg from '../molecules/ErrorMsg';
import API from '../../utils/api';
import axios from 'axios';

import Result from '../molecules/Result';




const Results = ({search, filter}) => {

    const [isLoading, setLoading] = useState(true);

    const [data, setData] = useState([]);

    const [pagination, setPagination] = useState(null);

    const [isLastPage, setIsLastPage] = useState(false);

    const [loadingMore, setloadingMore] = useState(false);

    const [error, setError] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null);

    
    
    useEffect(() => {
        refreshQuery();
        queryApi(true);
    }, [search, filter]);


    const refreshQuery = () => {
        setLoading(true);
        setloadingMore(false);
        setIsLastPage(false);
        setError(false);
        setErrorMessage(null);
    };


    const queryApi = async (new_query) => {
        try {

            const response = await axios.get(API.CLIENTS, {
                params: {
                    search: search || '',
                    filter: filter?.id || '',
                }
            });

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

            // On Server Error
            if(error.response){

                // O tambien por codigo 400, 404 etc                    #####################

                if(error.response.data?.error === 'unauthenticated'){
                    // Lost token, need re-login
                }

                if(error.response.data?.error === 'unauthorized'){
                    // Not authorized to query this resource
                }

                if(error.response.data?.error === 'query error'){
                    // Bad query input
                }

                setErrorMessage(error.response.data?.message);
                // SET ERROR HTTP CODE OR ERROR NAME

            } else {
                setErrorMessage('Ha ocurrido un error');
            }

            console.error(error);
            setError(true);

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




    const renderItem = ({ item }) => (
        <Result
            data={item}
            title={item.razon_social}
            subTitle={`Cod. ${item.id_cliente}`}

            search={search}
            filter={filter}
            ocurrence={
                filter ? item[filter.id] : null
            }
        />
    );
    


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