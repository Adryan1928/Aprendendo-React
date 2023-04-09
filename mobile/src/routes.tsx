import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import OrphanagesMap from './pages/OrphanageMap';
import OrphanageDetails from './pages/OrphanageDetails';




const {Navigator, Screen } = createNativeStackNavigator();


export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}} >
                <Screen name='OrphanagesMap' component={OrphanagesMap} />
                <Screen name='OrphanageDetails' component={OrphanageDetails}/>

            </Navigator>
        </NavigationContainer>
    )
}