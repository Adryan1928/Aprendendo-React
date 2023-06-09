import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout  ,PROVIDER_GOOGLE} from 'react-native-maps';
import { Feather } from '@expo/vector-icons' 
import  MapMarker from '../images/map-marker.png';   
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import api from "../services/api"

// import { useFonts } from 'expo-font';
// import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

interface Orphanage {
  id : number,
  name: string,
  latitude: number,
  longitude: number
}


export default function OrphanagesMap () {
    // const [fontsLoaded] = useFonts({
    //     Nunito_600SemiBold, 
    //     Nunito_700Bold, 
    //     Nunito_800ExtraBold
    //   })
    
    //   if (!fontsLoaded){
    //     return null;
    //   }

    const [orphanages, setOrphanages] = useState<Orphanage[]>([])

    useEffect(() => {
      api.get('orphanages').then(response => {
        setOrphanages(response.data)
      })
    }, [])


    const navigation = useNavigation();
    function handleNavigateToOrphanageDetails (id:number) {
        navigation.navigate("OrphanageDetails" as never, { id } as never)
    }
    function handleNavigateToCreateOrphanage () {
      navigation.navigate("SelectMapPosition" as never)
    }

    return (
        <View style={styles.container}>
            <MapView 
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
                latitude: -6.1029454,
                longitude: -38.1582802,
                latitudeDelta: 0.008 ,
                longitudeDelta: 0.008
            }} 
            >
                {orphanages.map(orphanage => {
                  return (
                    <Marker
                    key={orphanage.id}
                    icon={MapMarker}
                    coordinate={{
                    latitude: orphanage.latitude,
                    longitude: orphanage.longitude,
                    }}
                    calloutAnchor={{
                    x: 2.7,
                    y: 0.8,
                    }}
                    >
                    <Callout tooltip= {true} onPress={() => handleNavigateToOrphanageDetails(orphanage.id)} >
                        <View style={styles.calloutContainer}>
                        <Text style={styles.calloutText}> {orphanage.name} </Text>
                        </View>
                    </Callout>
                    </Marker>
                      )
                    })}
            </MapView>
            <View style={styles.footer}>
                <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>

                <TouchableOpacity   style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
                    <Feather name='plus' size={20} color='#fff' ></Feather>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  
    },
  
    calloutContainer : {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    },
  
    calloutText : {
      color: '#0089a5',
      fontSize: 14,
      // fontFamily: 'Nunito_700Bold',
    },
  
    footer : {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor : '#fff',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 3,
  
  
    },
  
    footerText : {
      color: '#8fa7b3',
      // fontFamily:  'Nunito_700Bold',
    },
  
    createOrphanageButton : {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  