import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import OrphanagesMap from './pages/OrphanageMap';
import OrphanageDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/createOrphanage/SelectMapPosition';
import OrphanageData from './pages/createOrphanage/OrphanageData';
import Header from './components/Header';


const {Navigator, Screen } = createNativeStackNavigator();


export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false,  contentStyle: {backgroundColor: '#f2f3f5'}}} >

                <Screen name='OrphanagesMap' component={OrphanagesMap} />

                <Screen name='OrphanageDetails' component={OrphanageDetails} options={{
                    headerShown: true,
                    header: () => <Header showCancel= {false} title= "Orfanato"/>
                }} />

                <Screen name='SelectMapPosition' component={SelectMapPosition} options={{
                    headerShown: true,
                    header: () => <Header title= "Selecione no mapa"/>
                }} />

                <Screen name='OrphanageData' component={OrphanageData} options={{
                    headerShown: true,
                    header: () => <Header title= "Informe os dados"/>
                }} />
            </Navigator>
        </NavigationContainer>
    )
}