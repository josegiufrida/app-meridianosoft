import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, ScrollView, Text, View, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

import DetailItem from '../components/molecules/DetailItem';
import colors from '../theme/colors';
import ErrorMsg from '../components/molecules/ErrorMsg';
import API from '../utils/api';
import { roundNumber } from '../utils/utils';
import { AuthContext } from '../utils/AuthContext';
import HeaderNav from '../components/molecules/HeaderNav';
import fonts from '../theme/fonts';


const Client = ({ route, navigation }) => {


    const [data, setData] = useState(null);

    const [error, setError] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null);

    const { collection, filters } = route.params;

    const { id_cliente, razon_social } = route.params.data;

    const { clearUserData } = useContext(AuthContext);


    useEffect(() => {
        queryApi();
    }, []);


    const queryApi = async () => {
        try {

            const response = await axios.get(API.BASE + collection.search + '/' + id_cliente);

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
                    <Text style={styles.title}>{razon_social}</Text>
                    <Text style={styles.subTitle}>{`Cod: ${id_cliente}`}</Text>
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
                            <DetailItem title={'Domicilio'} info={`${data.domicilio}\n${data.localidad}  •  ${data.zona}\n${data.provincia}  •  ${data.cp}`} icon={'domicilio'} />
                            <DetailItem title={filters.telefono} info={data.telefono} icon={'telefono'} />
                            <DetailItem title={filters.cuit} info={data.cuit} icon={'cuit'} />
                            <DetailItem title={filters.vendedor} info={data.vendedor} icon={'vendedor'} />
                            <DetailItem title={filters.email} info={data.email} icon={'email'} />
                            <DetailItem title={filters.lista} info={`ID: ${data.id_lista}  •  ${data.lista}`} icon={'lista'} />
                            <DetailItem title={filters.pago} info={data.pago} icon={'pago'} />
                            <DetailItem title={filters.observacion} info={data.observacion} icon={'observacion'} />
							<DetailItem title={filters.contacto} info={data.contacto} icon={'contacto'} />
                            <DetailItem title={filters.bonificacion} info={roundNumber(data.bonificacion)} icon={'bonificacion'} />
                            <DetailItem title={filters.saldo_final} info={roundNumber(data.saldo_final)} icon={'saldo_final'} />
                            <DetailItem title={filters.limite_credito} info={roundNumber(data.limite_credito)} icon={'limite_credito'} />
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