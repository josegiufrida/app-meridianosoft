import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';

import DetailIcon from '../atoms/DetailIcon';
import capitalizeAll from '../../utils/utils';

const DataItem = ({title, subTitle}) => {

    return (
        <View style={styles.container}>
            <DetailIcon src={title} />
			<View style={{flex: 1, flexDirection: 'column', marginLeft: 14}}>
                <Text style={styles.title}>{capitalizeAll(title)}</Text>
                <Text style={styles.detail}>{subTitle}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'center',

        paddingVertical: 25,
        paddingHorizontal: 14,
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