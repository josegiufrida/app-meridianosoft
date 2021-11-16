import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, ScrollView, Text, View, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

import DetailItem from '../components/molecules/DetailItem';
import DetailPriceItem from '../components/molecules/DetailPriceItem';
import colors from '../theme/colors';
import ErrorMsg from '../components/molecules/ErrorMsg';
import API from '../utils/api';
import { AuthContext } from '../utils/AuthContext';
import HeaderNav from '../components/molecules/HeaderNav';
import fonts from '../theme/fonts';


const Client = ({ route, navigation }) => {


    const [data, setData] = useState(null);

    const [error, setError] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null);

	const { collection, filters } = route.params;

    const { id_articulo, descripcion } = route.params.data;

    const { clearUserData } = useContext(AuthContext);


    useEffect(() => {
        queryApi();
    }, []);


    const queryApi = async () => {
        try {
	
            const response = await axios.get(API.BASE + collection.search + '/' + id_articulo);

            var json = await response.data;

            setData(json);

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

                    case 404:
                        // Non-existent record
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
        <View style={{flex: 1, backgroundColor: colors.primary}}>

            <View style={styles.header}>

                <HeaderNav title={collection.title} />

                <View style={{marginTop: 30, alignItems: 'center'}}>
                    <Text style={styles.title}>{descripcion}</Text>
                    <Text style={styles.subTitle}>{`Cod: ${id_articulo}`}</Text>
                </View>

            </View>


            <View style={styles.container}>
                
                { error ?

                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ErrorMsg message={errorMessage}/>
                    </View>

                    :

                    data ?

                        <ScrollView>
                            <DetailPriceItem info={data.precio} />
							<DetailItem title={filters.grupo} info={`ID: ${data.id_grupo}  •  ${data.grupo}`} icon={'grupo'} />
                            <DetailItem title={filters.subgrupo} info={`ID: ${data.id_subgrupo}  •  ${data.subgrupo}`} icon={'subgrupo'} />
                            <DetailItem title={filters.iva} info={data.iva} icon={'iva'} />
                            <DetailItem title={filters.codigo_barra} info={data.codigo_barra} icon={'codigo_barra'} />
                            <DetailItem title={filters.stock} info={data.stock} icon={'stock'} />
                        </ScrollView>

                        :
                        
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <ActivityIndicator size='large' color={colors.primary} />
                        </View>

                }

            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        paddingTop: 36,
        paddingBottom: 24,
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.backgroundColor,
    },

    title: {
        fontFamily: fonts.type.poppinsMedium,
        fontSize: 24,
        color: colors.white,
		paddingHorizontal: 14,
        textAlign: 'center',
    },

    subTitle: {
        fontFamily: fonts.type.poppinsMedium,
        fontSize: 16,
        color: colors.white,
    },
});


export default Client;