import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'
interface IWebViewItemProps {
    visible: boolean;
    url: string;
}
const WebViewItem = (props: IWebViewItemProps) => {
    if (props.visible) {
        return <WebView
            source={{ uri: props.url }}
            style={{ marginTop: 20 }}></WebView>
    }
    return <View></View>
        
}
export default WebViewItem;