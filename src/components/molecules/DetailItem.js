import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ToastAndroid, TouchableWithoutFeedback } from 'react-native';
import colors from '../../theme/colors';
import Clipboard from '@react-native-clipboard/clipboard';

import DetailIcon from '../atoms/DetailIcon';
import capitalizeAll from '../../utils/utils';

const DataItem = ({title, info, icon}) => {

    function copy_value_to_clipboard(){
        Clipboard.setString(info);
        ToastAndroid.show('Copiado', ToastAndroid.SHORT);
    }

    return (
        <TouchableWithoutFeedback
            delayLongPress={1000}
            onLongPress={ () => copy_value_to_clipboard() }
        >
            <View style={styles.container}>
                <DetailIcon src={icon} />
                <View style={{flex: 1, flexDirection: 'column', marginLeft: 14}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.detail}>{info || '-'}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'center',

        paddingVertical: 25,
        paddingHorizontal: 28,
        borderBottomColor: colors.borderColor,
        borderBottomWidth: 1,
    },

    title:{
        fontSize: 14,
        color: colors.textSecondary,
    },

    detail:{
        fontSize: 14,
        color: colors.textPrimary,
		marginTop: 5
    },
});
  

export default DataItem;