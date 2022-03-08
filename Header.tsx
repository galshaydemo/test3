import React from 'react'
import {Card,Avatar} from 'react-native-paper'
import { StackOverflowItem } from './stockoverflow'
import { Text,View } from 'react-native'
import { ICardItemProp } from './interfaces'

const Header = (item: ICardItemProp) => {



    return <View style={{paddingVertical:10, flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',backgroundColor: item.dark ? 'black':'white'}}>
      <View>
      <Avatar.Image size={48} source={{uri:item.item.owner.profile_image}}/>
      </View>
      <View>
      <Text style={{color:item.dark ? 'white':'dark', fontWeight:'bold',fontSize:18}}>{item.item.owner.display_name}</Text>
      <Text style={{color:item.dark ? 'white':'dark',fontWeight:'bold',fontSize:18}}>{item.item.owner.reputation}</Text>
      <Text style={{color:item.dark ? 'white':'dark',fontWeight:'bold',fontSize:18}}>{item.item.owner.user_type}</Text>
      </View>
      </View>

    

  }
  export default Header;