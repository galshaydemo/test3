/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { assertAnyTypeAnnotation } from '@babel/types';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { ActivityIndicator, Switch} from 'react-native-paper';
//import studentList from './data.json';
import { Data, StackOverflowItem } from './stockoverflow'
import { ICardItemProp } from './interfaces';
import {Header,OneItem,SortOrder,SearchLine} from './Components';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
const App = () => {
  const url1="https://api.stackexchange.com/2.2/users/"
  const url2="/questions?order=desc&sort=activity&site=stackoverflow"
  
  const [userId, setUserId] = useState('')
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<StackOverflowItem[]>([])
  const [order,setOrder]=useState(0)

  
  const searchData = (userId:string) => {
    console.log("userId")
    console.log(userId)
    setLoading(false)
    const url=url1 + userId + url2;
    console.log(url)
    axios.get(url).then((value)=>
      {
        const items=(value.data as Data).items
        setData(items)
        setLoading(true)
      })
    
  }
  useEffect(
    () => {
    console.log("Count Changed, its called");
    return () => {
    console.log("Compnent umount, its called");
    };
    },
    [order] );
    useEffect(
      () => {
      },
      [loading] );
  const ShowItem = (item: ICardItemProp) => {
    return <OneItem dark={isDarkMode} item={item.item}></OneItem>
  }
  const compareByTime=(a:StackOverflowItem,b:StackOverflowItem)=>
  {
      if ( a.creation_date > b.creation_date) return 1
      return -1;
  }
  const compareByView=(a:StackOverflowItem,b:StackOverflowItem)=>
  {
      if ( a.view_count > b.view_count) return 1
      return -1;
  }
  const compareByAnswer=(a:StackOverflowItem,b:StackOverflowItem)=>
  {
      if ( a.answer_count > b.answer_count) return 1
      return -1;
  }
  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: isDarkMode ? 'white' : 'black',
        }}
      />
    );
  }
  return (
    
      <View style={{flex:1,flexDirection:'column',borderWidth:1}}>
        <View style={{flex:1,flexDirection:'row', alignItems:'center', justifyContent:'flex-end',paddingHorizontal:20, backgroundColor: isDarkMode ? 'black':'white'}}>
        <Icon size={32} name={!isDarkMode ? "sun-o":"moon-o"} color={!isDarkMode ? "yellow":"white"}></Icon>
        <Switch  value={isDarkMode}  onValueChange={(value) => { setIsDarkMode(value) }}></Switch>
        
        </View>
        <View style={{flex:1,backgroundColor : isDarkMode ? 'black':'white'}}>
        <SearchLine dark={isDarkMode} searchData={(userId:string)=>
       {
         
         searchData(userId);
         console.log(userId)
       } }/>
          
        </View>
        {!loading 
        ?
        <ActivityIndicator style={{backgroundColor: isDarkMode ? 'black':'white'}} size={80}/> : null }
        <View style={{flex:2,alignSelf:'stretch',backgroundColor:isDarkMode ? 'black':'white'}}>
          {data.length > 0 ? <Header dark={isDarkMode} item={data[0]}/> : null }
        </View>
        {data.length>0 ?
        <View style={{flex:1,backgroundColor:isDarkMode ? 'black':'white'}}>
          <SortOrder dark={isDarkMode} changeSordOrder={function (order: number): void {
            if ( order == 0 )
            {
              const temp=data.sort(compareByTime )
              console.table(temp)
              setData(temp)
              setOrder(0)
            }
            if ( order == 2 )
            {
              const temp=data.sort(compareByView)
              console.table(temp)
              setData(temp)
              setOrder(2)
            }
            if ( order == 1 )
            {
              const temp=data.sort(compareByAnswer)
              console.table(temp)
              setData(temp)
              setOrder(1)
            }
          
        } }/>
        </View> : null }
        <View style={{flex:9,backgroundColor : isDarkMode ? 'black':'white'}}>
        {data.length>0 ? <FlatList 
        renderItem={ShowItem} data={data}
        ItemSeparatorComponent={ItemDivider}
         /> : null}
        </View>
      
      <View>
      </View>
      </View>
    
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
