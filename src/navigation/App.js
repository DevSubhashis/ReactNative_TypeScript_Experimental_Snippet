
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, isReadyRef, push } from './RootNavigation';
import AppNavigator from './AppNavigator';

function App() {
    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                isReadyRef.current = true;
            }}
        >
            <AppNavigator />
        </NavigationContainer>
    );
}

export default App;
