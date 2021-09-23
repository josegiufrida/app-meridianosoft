import React from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import SvgIcons from '../../assets/svg/SvgIcons';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';


const SearchInput = ({setSearch}) => {

    const [text, onChangeText] = React.useState('');

    return(
        <View >

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Buscar'
                autoCompleteType='off'
                maxLength={100}
                selectionColor={colors.primary}
                placeholderTextColor={colors.textSecondary}
                returnKeyType={'search'}
                onSubmitEditing={() => setSearch(text)}
            />

            <TouchableWithoutFeedback
                onPress={() => setSearch(text)}
            >
                <View style={styles.searcIcon}>
                    <SvgIcons src={'search'} size={28} color={colors.primary} />
                </View>
            </TouchableWithoutFeedback>

        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        height: 48,

        backgroundColor: colors.white,
        borderRadius: 6,
        borderColor: colors.borderColor,
        color: colors.textPrimary,

        paddingTop: 14,
        paddingLeft: 14,
        paddingRight: 42,

        fontFamily: fonts.type.poppinsRegular,
        fontSize: 14,
    },

    searcIcon: {
        position: 'absolute',
        justifyContent: 'center',
        paddingTop: 16,
        paddingLeft: 14,
        right: 0,
        height: '100%',
    }
});

export default SearchInput;