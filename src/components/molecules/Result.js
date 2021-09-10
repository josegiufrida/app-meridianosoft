import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Highlighter from 'react-native-highlight-words';

import Arrow from '../atoms/Arrow';
import colors from '../../theme/colors';
import DetailIcon from '../atoms/DetailIcon';
import SvgIcons from '../../assets/svg/SvgIcons';


const Result = ({data, title, subTitle, search, filter, ocurrence}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('Client', {data, title, subTitle})}
        >
            <View style={{flex: 1, flexDirection: 'column'}}>

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>

                { ocurrence &&
                    <View style={{flexDirection: 'row', marginTop: 5}}>

                        <View style={{justifyContent: 'center', marginRight: 8}}>
                            <SvgIcons src={'search'} size={11} color={colors.primary} />
                        </View>

                        <Text>{filter?.name}: </Text>

                        <Highlighter
                            highlightStyle={{color: colors.primary}}
                            searchWords={[search]}
                            textToHighlight={ocurrence.toString()}
                        />

                    </View>
                }

            </View>
            
            <Arrow />
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',

        marginBottom: 16,
        padding: 14,

        backgroundColor: '#FFFFFF',
        borderRadius: 6,
    },

    title:{
        fontSize: 14,
        color: colors.textPrimary,
    },

    subTitle:{
        fontSize: 14,
        color: colors.textSecondary,
    }
});
  

export default Result;