import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Highlighter from 'react-native-highlight-words';

import Arrow from '../atoms/Arrow';
import colors from '../../theme/colors';
import DetailIcon from '../atoms/DetailIcon';
import SvgIcons from '../../assets/svg/SvgIcons';
import fonts from '../../theme/fonts';


const Result = ({data, title, subTitle, search, filter, ocurrence}) => {

    const navigation = useNavigation();

    const initial_data = data;

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate({ name: 'Client', params: data})}
        >
            <View style={styles.result}>

                <View style={{flex: 1, flexDirection: 'column'}}>

                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    <Text style={styles.subTitle} numberOfLines={1}>{subTitle}</Text>
                    
                </View>
                
                <Arrow />

            </View>

            { ocurrence &&
                <View style={styles.ocurrence}>

                    <View style={{justifyContent: 'center', marginRight: 8}}>
                        <SvgIcons src={'search'} size={11} color={colors.primary} />
                    </View>

                    <Text>{filter?.name}: </Text>

                    <Highlighter
                        highlightStyle={{color: colors.primary}}
                        searchWords={[search]}
                        textToHighlight={ocurrence.toString()}
                        style={{flex: 1}}
                        numberOfLines={1}
                    />

                </View>
            }

        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignContent: 'center',

        marginBottom: 16,

        backgroundColor: colors.white,
        borderRadius: 6,
        elevation: 1.25,
    },

    result: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',

        paddingVertical: 11,
        paddingHorizontal: 14,
    },

    title:{
        fontFamily: fonts.type.poppinsMedium,
        fontSize: 14,
        color: colors.textPrimary,
        paddingRight: 14,
    },

    subTitle:{
        fontFamily: fonts.type.poppinsRegular,
        fontSize: 14,
        color: colors.textSecondary,
    },

    ocurrence: {
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 14,
        flexDirection: 'row',
        backgroundColor: colors.arrowCircle,
    },
});
  

export default Result;