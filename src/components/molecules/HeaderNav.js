
import React, { useState, useContext, useRef } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Platform, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgIcons from '../../assets/svg/SvgIcons';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import { AuthContext } from '../../utils/AuthContext';


function HeaderNav({title}) {

	const navigation = useNavigation();
	
	const { logOut } = useContext(AuthContext);


	const go_back = () => {
		if(navigation.canGoBack()) {
			navigation.goBack();
		} else {
			BackHandler.exitApp();
		}
	};

	const tryLogout = () => {
		Alert.alert(
			'Cerrar sesión',
			'¿Estás seguro que quieres cerrar sesión?',
			[
				{
					text: 'Cancelar',
					style: 'cancel',
				},
				{
					text: 'Confirmar',
					onPress: () => logOut(),
					style: 'confirm'
				}
			],
			{
				cancelable: true,
			}
		);
	}


    return (
        <View style={styles.container}>

			<View style={{flex: 1, alignItems: 'flex-start'}}>
				<TouchableOpacity
					onPress={go_back}
				>
					<View style={styles.button}>
						<SvgIcons src={'back'} size={14} color={colors.white} />
					</View>
				</TouchableOpacity>
			</View>


			<Text style={styles.title}>{title}</Text>

			
			<View style={{flex: 1, alignItems: 'flex-end'}}>
				<TouchableOpacity
					onPress={() => tryLogout()}
				>
					<View style={styles.button}>
						<SvgIcons src={'user'} size={19} color={colors.white} />
					</View>
				</TouchableOpacity>
			</View>
			

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 14
    },

	title: {
		fontSize: 16,
		fontFamily: fonts.type.poppinsMedium,
		color: colors.white
	},

	button: {
		height: 38,
		width: 38,
		borderRadius: 19,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(255,255,255,0.25)',
	},
});

  
export default HeaderNav;