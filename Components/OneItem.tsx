import React, { useState } from 'react'
import {Card,Button} from 'react-native-paper'
import { Modal, Text,TouchableOpacity,View } from 'react-native'
import { ICardItemProp } from '../interfaces'

import WebView from 'react-native-webview'

const OneItem = (item: ICardItemProp) => {
    const [webShow,setWebShow]=useState(false)
    
    

    return <Card style={{backgroundColor:item.dark ? 'black':'white'}} mode='outlined' onPress={()=>
    {
      console.log(item.item.link)
      if ( webShow)
      {
        setWebShow(false)
      }
      else
      {
        setWebShow(true)
        //return <WebViewItem url={item.item.link} visible={true}></WebViewItem>
      }
    }}>
      <View style={{paddingVertical:10,paddingHorizontal:10}}>
      <Modal  visible={webShow} style={{position:'absolute',left:0,top:0,width:400,height:400}}>
      {webShow ? <WebView
            source={{ uri: item.item.link }}
            style={{ marginTop: 20 }}></WebView> : null }
          <Button icon="close" mode="contained" onPress={() => setWebShow(false)}>
          Close
        </Button  >
        </Modal>
      <Text style={{color : item.dark ? 'white':'black'}}>{item.item.title}</Text>
      <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
      <Text style={{color : item.dark ? 'white':'black'}}>Answer Count:{item.item.answer_count}</Text>
      <Text style={{color : item.dark ? 'white':'black'}}>Score:{item.item.score}</Text>
      <Text style={{color : item.dark ? 'white':'black'}}>View Count: {item.item.view_count}</Text>
      </View>
      
      </View>


    </Card>

  }
  export default OneItem;