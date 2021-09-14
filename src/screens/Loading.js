import * as React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';


function Loading() {
	return (
		<View style={{flex:1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>

			<ActivityIndicator 
				size={'large'}
			/>

		</View>
	);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        flexDirection: 'column'
    },

    title: {
        fontSize: 26,
    },

    subtitle: {
        fontSize: 14,
        marginBottom: 30,
    }
});

  
export default Loading;