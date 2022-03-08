import React from 'react'
import { TouchableOpacity, View,Text } from 'react-native'
interface ISortOrder{
    dark?:boolean,
    currentOrder?:number,
    changeSordOrder:(order:number)=>void
}
const SortOrder=(props:ISortOrder)=>
{
    const [order,setOrder]=React.useState(0)
    return <View style={{backgroundColor: props.dark ? 'black' :'white', flexDirection:'row',justifyContent:'center',paddingTop:15}}>
        <Text>Questions</Text>
        <TouchableOpacity style={{marginHorizontal:10}} onPress={()=>{setOrder(0); props.changeSordOrder(0)}}>
            <Text style={{backgroundColor : order == 0 ? 'lightblue':'white',paddingHorizontal:10}}>Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:10}} onPress={()=>{setOrder(1);props.changeSordOrder(1)}}>
            <Text style={{backgroundColor : order == 1 ? 'lightblue':'white',paddingHorizontal:10}}>Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:10}} onPress={()=>{setOrder(2);props.changeSordOrder(2)}}>
            <Text style={{backgroundColor : order == 2 ? 'lightblue':'white',paddingHorizontal:10}}>View</Text>
        </TouchableOpacity>
    </View>
}
export default SortOrder;