import { View, Text, Button } from 'react-native'
import React from 'react'

const Accueil = ({navigation}) => {
  return (
    <View>
      <Text>Accueil</Text>
      <Button title='A propos'
        onPress={()=>navigation.navigate('About')}
      />
      <Button title='Profil'
        onPress={()=>navigation.navigate('Profil')}
      />
    </View>
  )
}

export default Accueil