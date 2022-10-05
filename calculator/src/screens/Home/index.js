import { useCallback, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from 'expo-font'
import { MaterialCommunityIcons, FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons'
import styles from './styles'

import Keyboard from './components/keyboard'

export default function Home()
{
    const [appIsReady, setAppIsReady] = useState(false),
          [fontsLoaded] = useFonts(
    {
        'Heebo-Light': require("../../../assets/fonts/Heebo/static/Heebo-Light.ttf"),
        'Heebo-Bold': require("../../../assets/fonts/Heebo/static/Heebo-Bold.ttf")
    })

    useEffect(() =>
    {
        async function prepare()
        {
            await SplashScreen.preventAutoHideAsync()

            setAppIsReady(true)
        }

        prepare()
    }, [])

    const onLayoutRootView = useCallback(async () =>
    {
        if(fontsLoaded && appIsReady)
            await SplashScreen.hideAsync()

    }, [fontsLoaded, appIsReady])

    if(!fontsLoaded || !appIsReady)
        return null

    return (
        <View style={styles.aAllApp} onLayout={onLayoutRootView}>
            <View style={styles.aViewInformation}>
                <View style={styles.aInput}>

                </View>
                <View style={styles.aMenuTools}>
                    <View style={styles.aItemsLeft}>
                        <View><MaterialCommunityIcons name="clock-time-three-outline" style={styles.iconLeft} /></View>
                        <View><FontAwesome5 name="ruler-horizontal" style={styles.iconLeft} /></View>
                        <View><MaterialIcons name="emoji-symbols" style={styles.iconLeft} /></View>
                    </View>
                    <View style={styles.aItemsRight}>
                        <View><Feather name="delete" style={styles.iconRight} /></View>
                    </View>
                </View>
            </View>
            <Keyboard />
        </View>
    )
}