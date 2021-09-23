/*import Navigator from './src/navigation/Navigator';

export default Navigator;*/




import * as React from 'react';
import { StatusBar } from 'react-native';
import Navigator from './src/navigation/Navigator';
import colors from './src/theme/colors';
import { AuthProvider } from './src/utils/AuthContext';



const App = () => {
    StatusBar.setBackgroundColor(colors.statusBar, false);
    return (
        <AuthProvider>
            <Navigator />
        </AuthProvider>
    );
}


export default App;
