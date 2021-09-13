/*import Navigator from './src/navigation/Navigator';

export default Navigator;*/




import * as React from 'react';
import Navigator from './src/navigation/Navigator';
import { AuthProvider } from './src/utils/AuthContext';



const App = () => {
    return (
        <AuthProvider>
            <Navigator />
        </AuthProvider>
    );
}


export default App;
