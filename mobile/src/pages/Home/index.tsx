import React, { useState, useEffect } from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import { View, ImageBackground, Text, Image, StyleSheet, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import RNPickerSelect, { PickerStyle } from 'react-native-picker-select'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

interface Uf {
    sigla: string;
}

interface City {
    nome: string;
}

const Home = () => {

    const [allUf, setAllUf] = useState<string[]>([])
    const [allCities, setAllCities] = useState<string[]>([])
    const [uf, setUf] = useState('')
    const [city, setCity] = useState('')
    const navigation = useNavigation()

    useEffect(() => {
      axios
          .get<Uf[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
              .then(response => {
                  const ufInitials = response.data.map(uf => uf.sigla)
                  ufInitials.sort()
                  setAllUf(ufInitials)
              })
    }, [])

    useEffect(() => {
      if (uf === '') return

      axios
          .get<City[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
              .then(response => {
                  const citiesNames = response.data.map(city => city.nome)
                  
                  setAllCities(citiesNames)
              })
    }, [uf])

    function handleSelectedUf(uf: string) {
       setUf(uf)
    }

    function handleSelectedCity(city: string) {
      setCity(city)
   }


    function handleNavigateToPoints() {
        if (!uf || !city) return

        navigation.navigate('Points', { uf, city })}

    return(
        <ImageBackground 
            style={styles.container} 
            source={require('../../assets/home-background.png')}
            imageStyle={{ width: 274, height: 368}}
            >
            <View style={styles.main}>
                <Image source={require('../../assets/logo.png')}/>
                <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
                <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
            </View>

            <View style={styles.footer}>
                <RNPickerSelect
                  value={uf}
                  style={pickerStyle}
                  placeholder={{
                    label: 'Selecione uma UF',
                    value: null,
                    color: '#9EA0A4',
                  }}
                  onValueChange={uf => { 
                    setUf(uf) 
                    setCity('') }}
                  items={allUf.map(((uf: string) =>
                      ({ label: uf, value: uf }))
                    )}
                  />
                <RNPickerSelect
            
                  value={city}
                  style={pickerStyle}
                  placeholder={{
                    label: 'Selecione uma cidade',
                    value: null,
                    color: '#9EA0A4',
                  }}
                  onValueChange={city => {
                    if (uf) setCity(city)}}
                  items={allCities.map(((city: string) =>
                    ({ label: city, value: city }))
                  )}
                  
                />
          
                <RectButton style={styles.button} onPress={handleNavigateToPoints}>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name='arrow-right' color='#fff' size={24}/>
                        </Text>
                    </View>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </RectButton>
            </View>
        </ImageBackground>
    )
}

const pickerStyle = {
  inputIOS: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},

    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });

export default Home