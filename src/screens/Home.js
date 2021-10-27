import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button, Linking } from 'react-native';
import { AuthContext } from '../utils/AuthContext';

import Menu from '../components/organisms/Menu';
import Header from '../screens/Header';
import colors from '../theme/colors';
import HeaderNav from '../components/molecules/HeaderNav';
import fonts from '../theme/fonts';
import DevelopedBy from '../components/atoms/DevelopedBy';


function HomeScreen({ navigation }) {

    const { auth, logOut } = useContext(AuthContext);

    return (
        <View style={{flex: 1, backgroundColor: colors.primary}}>

            <View style={styles.header}>
                <HeaderNav title={'Listados'} />
            </View>

            <View style={styles.container}>

                <View style={{marginTop: 36, marginLeft: 14}}>
                    <Text style={styles.title}>{auth.company_name}</Text>
                    <Text style={styles.subtitle}>Actualizado hace 34 minutos</Text>
                </View>

                <Menu collections={auth.collections} />

                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                    <DevelopedBy />
                </View>

            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        paddingTop: 36,
        paddingBottom: 36,
    },

    container: {
        flex: 1,
        padding: 14,
        paddingTop: 0,
        flexDirection: 'column',
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        backgroundColor: colors.backgroundColor
    },

    title: {
        fontSize: 26,
        fontFamily: fonts.type.poppinsMedium,
    },

    subtitle: {
        fontSize: 14,
        fontFamily: fonts.type.poppinsRegular,
        color: colors.textSecondary,
        marginBottom: 30,
    }
});

  
export default HomeScreen;