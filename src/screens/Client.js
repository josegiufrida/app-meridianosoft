import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, ScrollView, Text, View, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

import DetailItem from '../components/molecules/DetailItem';
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

    const { id_cliente, razon_social } = route.params;

    const { clearUserData } = useContext(AuthContext);


    useEffect(() => {
        queryApi();
    }, []);


    const queryApi = async () => {
        try {

            const response = await axios.get(API.CLIENTS + '/' + id_cliente);

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

                <HeaderNav />

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
                            <DetailItem title={'domicilio'} subTitle={`${data.domicilio}\n${data.localidad}  •  ${data.zona}\n${data.provincia}  •  ${data.cp}`} />
                            <DetailItem title={'telefono'} subTitle={data.telefono} />
                            <DetailItem title={'CIUT'} subTitle={data.cuit} />
                            <DetailItem title={'vendedor'} subTitle={data.vendedor} />
                            <DetailItem title={'email'} subTitle={data.email} />
                            <DetailItem title={'lista'} subTitle={`ID: ${data.id_lista}  •  ${data.lista}`} />
                            <DetailItem title={'pago'} subTitle={data.pago} />
                            <DetailItem title={'observacion'} subTitle={data.observacion} />
                            <DetailItem title={'contacto'} subTitle={data.contacto} />
                            <DetailItem title={'bonificacion'} subTitle={data.bonificacion} />
                            <DetailItem title={'saldo'} subTitle={data.saldo} />
                            <DetailItem title={'limite credito'} subTitle={data.limite_credito} />
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
        paddingHorizontal: 14,
        flexDirection: 'column',
        backgroundColor: colors.backgroundColor,
    },

    title: {
        fontFamily: fonts.type.poppinsMedium,
        fontSize: 24,
        color: colors.white,
    },

    subTitle: {
        fontFamily: fonts.type.poppinsMedium,
        fontSize: 16,
        color: colors.white,
    },
});


export default Client;