import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

import DetailItem from '../components/molecules/DetailItem';
import SvgIcons from '../assets/svg/SvgIcons';
import colors from '../theme/colors';
import ErrorMsg from '../components/molecules/ErrorMsg';
import API from '../utils/api';


const Client = ({ route, navigation }) => {


    const [data, setData] = useState(null);

    const [error, setError] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null);

    const { id_cliente, razon_social } = route.params;



    useEffect(() => {
        queryApi();
    }, []);


    const queryApi = async () => {
        try {

            const response = await axios.get(API.CLIENTS + '/' + id_cliente);

            var json = await response.data;

            setData(json);

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



    return(
        <View style={styles.container}>
            
            <Text style={styles.title}>{razon_social}</Text>
            <Text style={styles.subTitle}>{`Cod: ${id_cliente}`}</Text>


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
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        flexDirection: 'column'
    },

    title: {
        fontSize: 24
    },

    subTitle: {
        fontSize: 16
    },
});


export default Client;