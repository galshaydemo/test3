import React from 'react'
import { View,Text } from 'react-native'
import {Searchbar,IconButton} from 'react-native-paper'
import { black, white } from 'react-native-paper/lib/typescript/styles/colors'
export interface ISearchLineProps
{
  dark?:boolean
    searchData: (userId: string) => void;

}
const SearchLine=(props:ISearchLineProps)=>
{
    const [userId,setUserId]=React.useState('1264804')
 return <View style={{ flexDirection: 'row',backgroundColor: props.dark ? 'black':'white'}}>
            <View style={{ flex: 6 }}>
              <Searchbar 
                style={{height:40}}
                placeholder="Search"
                onChangeText={setUserId}
                value={userId}

              />
            </View>
          <View style={{ flex: 1,height:40,backgroundColor : props.dark ?'black':'white' }}>
            
          <IconButton color={props.dark ? 'white' :'black'} onPress={()=>{props.searchData(userId)}}

            icon={"refresh"}></IconButton></View>
        </View>
 
}
export default SearchLine;