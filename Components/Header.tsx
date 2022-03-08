import React from 'react'
import {Avatar} from 'react-native-paper'
import { StyleSheet, Text,View } from 'react-native'
import { ICardItemProp } from '../interfaces'

const Header = (item: ICardItemProp) => {
    return <View style={item.dark ? styles.containerdark:
    styles.containerlight}>
      <View>
      <Avatar.Image size={48} source={{uri:item.item.owner.profile_image}}/>
      </View>
      <View>
      <Text style={item.dark ? styles.textdark:styles.textlight}>{item.item.owner.display_name}</Text>
      <Text style={item.dark ? styles.textdark:styles.textlight}>{item.item.owner.reputation}</Text>
      <Text style={item.dark ? styles.textdark:styles.textlight}>{item.item.owner.user_type}</Text>
      </View>
      </View>

    

  }
  export default Header;
  const styles=StyleSheet.create({
    textlight:
    {
      color:'black',
      fontWeight:'bold',
      fontSize:18
    },
    textdark:
    {
      color:'white',
      fontWeight:'bold',
      fontSize:18

    },
    containerdark:
    {
      paddingVertical:10, 
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
      backgroundColor: 'black'
    },
    containerlight:
    {
      paddingVertical:10, 
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
      backgroundColor: 'white'
    }
  })