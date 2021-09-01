import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator, Alert } from 'react-native';
import colors from '../../theme/colors';

import Result from '../molecules/Result';


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      subTitle: 'First Sub',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      subTitle: 'Second Sub',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      subTitle: 'Third Sub',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baq',
        title: 'First Item',
        subTitle: 'First Sub',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63w',
        title: 'Second Item',
        subTitle: 'Second Sub',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d7e',
        title: 'Third Item',
        subTitle: 'Third Sub',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bea',
        title: 'First Item',
        subTitle: 'First Sub',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd9d1aa97f63',
        title: 'Second Item',
        subTitle: 'Second Sub',
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455w71e29d72',
        title: 'Third Item',
        subTitle: 'Third Sub',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3adw53abb28ba',
        title: 'First Item',
        subTitle: 'First Sub',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd9e1aa97f63',
        title: 'Second Item',
        subTitle: 'Second Sub',
      },
      {
        id: '58694a0f-3da1-471f-bd9d6-145571e29d72',
        title: 'Third Item',
        subTitle: 'Third Sub',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aedq5-3ad53abb28ba',
        title: 'First Item',
        subTitle: 'First Sub',
      },
      {
        id: '3ac68afc-c605-48d3-a4df8-fbd91aa97f63',
        title: 'Second Item',
        subTitle: 'Second Sub',
      },
      {
        id: '58694a0f-3da1-471f-bcd96-145571e29d72',
        title: 'Third Item',
        subTitle: 'Third Sub',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aedv5-3ad53abb28ba',
        title: 'First Item',
        subTitle: 'First Sub',
      },
      {
        id: '3ac68afc-c605-48d3-a4ef8-fbd91aa97f63',
        title: 'Second Item',
        subTitle: 'Second Sub',
      },
      {
        id: '58694a0f-3da1-471f-btd96-145571e29d72',
        title: 'Third Item',
        subTitle: 'Third Sub',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2b8ba',
        title: 'First Item',
        subTitle: 'First Sub',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91yaa97f63',
        title: 'Second Item',
        subTitle: 'Second Sub',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571ne29d72',
        title: 'Third Item',
        subTitle: 'Third Sub',
      },
      {
        id: 'bd7acbyea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        subTitle: 'First Sub',
      },
      {
        id: '3tac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        subTitle: 'Second Sub',
      },
      {
        id: '58694ay0f-3da1-471f-bd96-145571e29d72',
        title: 'Thirdasdddddddddddddddddddddddd Item',
        subTitle: 'Third Sub',
      },    
];




const Results = () => {

    const [loading, setLoading] = useState(false);

    const getApi = async () => {
        try {

            const response = await fetch('https://612ec987d11e5c00175586dd.mockapi.io/api/v1/clients', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'TOKEN',       // ############
                }
            });

            Alert.alert(JSON.stringify(response));

        } catch (error) {
            console.error(error);
        }
    };

    const renderItem = ({ item }) => (
        <Result title={item.title} subTitle={item.subTitle} />
    );
    
    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onEndReached={() => getApi()}
            ListFooterComponent={
                <ActivityIndicator animating={loading} size='large' color={colors.primary} />
            }
        />
    );

};


const styles = StyleSheet.create({
    
});

export default Results;