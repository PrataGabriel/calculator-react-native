import { Text, View, TouchableHighlight } from 'react-native'
import styles from './styles'

export function ButtonText(props)
{
    let styleView = [styles.button],
        styleText = [styles.buttonText]

    if(props.style)
    {
        if(!Array.isArray(props.style))
            styleText.push(props.style)
        else
            styleText.push(...props.style)
    }

    if(props.styleView)
    {
        if(!Array.isArray(props.styleView))
            styleView.push(props.styleView)
        else
            styleView.push(...props.styleView)
    }
    
    return (
        <TouchableHighlight onPress={props.onPress}>
            <View style={styleView}>
                <Text style={styleText}>{ props.content }</Text>
            </View>
        </TouchableHighlight>
    )
}

export function ButtonExpecialRed(props)
{
    return (
        <ButtonText
            style={[styles.buttonC, props.style]}
            content={props.content}
            onPress={props.onPress}
        />
    )
}

export function ButtonExpecialGreen(props)
{
    return (
        <ButtonText
            style={[styles.buttonsExpecialGreen, props.style]}
            content={props.content}
            onPress={props.onPress}
        />
    )
}

export function ButtonNumber(props)
{
    return (
        <ButtonText
            style={[styles.buttonNumber, props.style]}
            content={props.content}
            onPress={props.onPress}
        />
    )
}

export function ButtonFinish(props)
{
    return (
        <ButtonText
            style={props.style}
            styleView={styles.buttonFinishEqual}
            content={props.content}
            onPress={props.onPress}
        />
    )
}