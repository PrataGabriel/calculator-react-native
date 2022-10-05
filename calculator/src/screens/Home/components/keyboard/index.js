import { Text, View } from 'react-native'
import styles from './styles'

function ButtonText(props)
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
        <View style={styleView}>
            <Text style={styleText}>{ props.content }</Text>
        </View>
    )
}

function ButtonExpecialRed(props)
{
    return (
        <ButtonText style={[styles.buttonC, props.style]} content={props.content} />
    )
}

function ButtonExpecialGreen(props)
{
    return (
        <ButtonText style={[styles.buttonsExpecialGreen, props.style]} content={props.content} />
    )
}

function ButtonNumber(props)
{
    return (
        <ButtonText style={[styles.buttonNumber, props.style]} content={props.content} />
    )
}

function ButtonFinish(props)
{
    return (
        <ButtonText style={props.style} styleView={styles.buttonFinishEqual} content={props.content} />
    )
}

export default function Keyboard()
{
    return (
        <View style={styles.aViewNumberButtons}>
            <View style={styles.aColumnsNumberButtons}>
                <View style={styles.aLinesNumberButtons}>
                    <ButtonExpecialRed content="C" />
                    <ButtonExpecialGreen content="( )" style={{fontSize: 20}} />
                    <ButtonExpecialGreen content="%" />
                    <ButtonExpecialGreen content="÷" style={{fontSize: 42}} />
                </View>
                <View style={styles.aLinesNumberButtons}>
                    <ButtonNumber content="75" />
                    <ButtonNumber content="8" />
                    <ButtonNumber content="9" />
                    <ButtonExpecialGreen content="+" style={{fontSize: 44, transform: [{rotate: "45deg"}]}} />
                </View>
                <View style={styles.aLinesNumberButtons}>
                    <ButtonNumber content="4" />
                    <ButtonNumber content="5" />
                    <ButtonNumber content="6" />
                    <ButtonExpecialGreen content="‒" style={{fontSize: 46}} />
                </View>
                <View style={styles.aLinesNumberButtons}>
                    <ButtonNumber content="1" />
                    <ButtonNumber content="2" />
                    <ButtonNumber content="3" />
                    <ButtonExpecialGreen content="+" style={{fontSize: 40}} />
                </View>
                <View style={styles.aLinesNumberButtons}>
                    <ButtonText content="+/‒" />
                    <ButtonNumber content="0" />
                    <ButtonText content="," />
                    <ButtonFinish content="=" style={{fontSize: 50}} />
                </View>
            </View>
        </View>
    )
}