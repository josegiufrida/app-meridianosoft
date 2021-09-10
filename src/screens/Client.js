import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, ActivityIndicator, Alert } from 'react-native';

import DetailItem from '../components/molecules/DetailItem';
import SvgIcons from '../assets/svg/SvgIcons';
import colors from '../theme/colors';
import ErrorMsg from '../components/molecules/ErrorMsg';



const Client = ({id, title, subTitle}) => {

    const [data, setData] = useState(null);

    const [error, setError] = useState(false);


    useEffect(() => {
        getApi();
    }, []);


    const getApi = async () => {
        try {

            var api_url = 'https://612ec987d11e5c00175586dd.mockapi.io/api/v1/clients/1';

            const response = await fetch(api_url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'TOKEN',       // ############
                }
            });

            var json = await response.json();

        } catch (error) {
            setError(true);
        }
    };



    return(
        <View style={styles.container}>
            
            <Text style={styles.title}>{'title'}</Text>
            <Text style={styles.subTitle}>{'sub title'}</Text>

            { data ?

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

                !error ? 

                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size='large' color={colors.primary} />
                    </View>

                    :

                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ErrorMsg />
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