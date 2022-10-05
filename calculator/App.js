import { StatusBar, SafeAreaView } from 'react-native'
import * as NavigationBar from 'expo-navigation-bar';
import Home from './src/screens/Home'

export default function App()
{
    NavigationBar.setBackgroundColorAsync("#010101")

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar />
            <Home />
        </SafeAreaView>
    )
}