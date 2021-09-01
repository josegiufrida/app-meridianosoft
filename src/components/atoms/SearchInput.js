import React from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput } from 'react-native';
import colors from '../../theme/colors';


const SearchInput = () => {

    const [text, onChangeText] = React.useState('');

    return(
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Search'
                autoCompleteType='off'
                maxLength={100}
                selectionColor={colors.primary}
                placeholderTextColor={colors.textSecondary}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        borderColor: colors.borderColor,
        color: colors.textPrimary,
        fontSize: 14,
        padding: 14
    },
});

export default SearchInput;