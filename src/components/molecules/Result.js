import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Highlighter from 'react-native-highlight-words';

import { getScreenName } from '../../utils/screens';
import Arrow from '../atoms/Arrow';
import colors from '../../theme/colors';
import DetailIcon from '../atoms/DetailIcon';
import SvgIcons from '../../assets/svg/SvgIcons';
import fonts from '../../theme/fonts';


const Result = ({ data, title, subTitle, collection, search, filters, selectedFilter, ocurrence }) => {

    const navigation = useNavigation();

    const initial_data = data;

    const nextScreenName = getScreenName(collection.name);

    function reduceFilters(){
        return filters.reduce((ac, el) => {
            return { ...ac, [el.id]: el.name };
        }, {});
    }

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate(nextScreenName, { data: data, collection: collection, filters: reduceFilters() })}
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

                    {/*<Text>{selectedFilter?.name}: </Text>*/}

                    <Highlighter
                        highlightStyle={{color: colors.primary}}
                        searchWords={[search]}
                        textToHighlight={ocurrence.toString()}
                        style={[styles.ocurrence_text, {flex: 1}]}
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

        marginBottom: 20,

        backgroundColor: colors.white,
        borderRadius: 6,

        shadowColor: '#616161',
        elevation: 8,
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
        backgroundColor: colors.searchOcurrence,
        borderBottomEndRadius: 6,
        borderBottomStartRadius: 6,
    },

    ocurrence_text: {
        color: colors.textSecondary
    }
});
  

export default Result;