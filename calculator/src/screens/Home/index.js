import { useCallback, useEffect, useState, useRef } from 'react'
import { View, Text, TextInput, Keyboard, AppState, Pressable } from 'react-native'
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from 'expo-font'
import { MaterialCommunityIcons, FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons'
import styles from './styles'

import KeyboardComponent from './components/keyboard'

export default function Home()
{
    const appState                            = useRef(AppState.currentState),
          textInputRef                        = useRef(),
          [appIsReady, setAppIsReady]         = useState(false),
          [value, setValue]                   = useState(null),
          [actRemoveValue, setActRemoveValue] = useState(),
          [changePosition, setChangePosition] = useState(),
          [fontsLoaded]                       = useFonts(
    {
        'Heebo-Light': require("../../../assets/fonts/Heebo/static/Heebo-Light.ttf"),
        'Heebo-Regular': require("../../../assets/fonts/Heebo/static/Heebo-Regular.ttf")
    })

    useEffect(() => console.log(parseInt(value)), [value])

    useEffect(() =>
    {
        async function prepare()
        {
            await SplashScreen.preventAutoHideAsync()

            setAppIsReady(true)
        }

        prepare()

        const subscription = AppState.addEventListener("change", nextAppState =>
        {
            if(appState.current.match(/inactive|background/) && nextAppState === "active")
            {
                Keyboard.dismiss()
                
                setTimeout(() =>
                {
                    textInputRef.current.showSoftInputOnFocus = false
                    textInputRef.current.focus()
                }, 1000)
            }
    
            appState.current = nextAppState
        })
    
        return () => {
          subscription.remove()
        }
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
                    <TextInput
                        style={styles.textInput}
                        value={value}
                        autoFocus={true}
                        showSoftInputOnFocus={false}
                        ref={textInputRef}
                        onSelectionChange={(e) => setChangePosition(e.nativeEvent.selection)}
                    />
                </View>
                <View style={styles.aValueFinish}>
                    <Text style={styles.valueFinishText}>
                        {(isNaN(value) && !isNaN(value.charAt(value.length - 1))) ? eval(value) : ''}
                    </Text>
                </View>
                <View style={styles.aMenuTools}>
                    <View style={styles.aItemsLeft}>
                        <View><MaterialCommunityIcons name="clock-time-three-outline" style={styles.iconLeft} /></View>
                        <View><FontAwesome5 name="ruler-horizontal" style={styles.iconLeft} /></View>
                        <View><MaterialIcons name="emoji-symbols" style={styles.iconLeft} /></View>
                    </View>
                    <View style={styles.aItemsRight}>
                        <Pressable onPress={setActRemoveValue} style={value ? styles.iconPressable : []}>
                            <View><Feather name="delete" style={[styles.iconRight, {color: value ? "#9dd260" : "#394a26"}]} /></View>
                        </Pressable>
                    </View>
                </View>
            </View>
            <KeyboardComponent stateValue={{value, setValue}} changePosition={changePosition} actRemoveValue={actRemoveValue} />
        </View>
    )
}