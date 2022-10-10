import { useEffect } from 'react'
import { View } from 'react-native'
import styles from './styles'

import
{
    ButtonText,
    ButtonExpecialRed,
    ButtonExpecialGreen,
    ButtonNumber,
    ButtonFinish
} from '../buttons'

export default function KeyboardComponent({ stateValue: {value, setValue}, changePosition, actRemoveValue })
{
    const addValue = (val) =>
    {
        let dataValue = []

        if(value)
            dataValue.push(...value)

        val = val.toString()

        if(!changePosition)
            changePosition = {start: 0, end: 0}

        changePosition.end = changePosition.end - changePosition.start

        dataValue.splice(changePosition.start, changePosition.end, val)

        setValue(dataValue.join(''))
    }

    const removeValue = () =>
    {
        if(value)
        {
            const dataValue = [...value]
    
            if(dataValue != null && dataValue.length > 0)
            {
                if(changePosition.start > 0 || changePosition.end > 0)
                {
                    if(changePosition.start == changePosition.end)
                        changePosition.start -= 1
    
                    changePosition.end = changePosition.end - changePosition.start
                    
                    if(changePosition.end <= 0)
                        changePosition.end = 1
    
                    dataValue.splice(changePosition.start, changePosition.end)
                    
                    setValue(dataValue.join(''))
                }
            }
        }
    }

    const clearValue = () =>
    {
        setValue('')
    }

    const finish = () =>
    {
        console.log(eval(value))
    }

    useEffect(removeValue, [actRemoveValue])

    return (
        <View style={styles.aViewNumberButtons}>
            <View style={styles.aColumnsNumberButtons}>
                <View style={styles.aLinesNumberButtons}>
                    <ButtonExpecialRed content="C" onPress={clearValue} />
                    <ButtonExpecialGreen content="( )" onPress={() => addValue("()")} style={{fontSize: 20}} />
                    <ButtonExpecialGreen content="%" onPress={() => addValue("%")} />
                    <ButtonExpecialGreen content="÷" onPress={() => addValue("/")} style={{fontSize: 42}} />
                </View>
                <View style={styles.aLinesNumberButtons}>
                    <ButtonNumber content="7" onPress={() => addValue(7)} />
                    <ButtonNumber content="8" onPress={() => addValue(8)} />
                    <ButtonNumber content="9" onPress={() => addValue(9)} />
                    <ButtonExpecialGreen content="+" onPress={() => addValue("*")} style={{fontSize: 44, transform: [{rotate: "45deg"}]}} />
                </View>
                <View style={styles.aLinesNumberButtons}>
                    <ButtonNumber content="4" onPress={() => addValue(4)} />
                    <ButtonNumber content="5" onPress={() => addValue(5)} />
                    <ButtonNumber content="6" onPress={() => addValue(6)} />
                    <ButtonExpecialGreen content="‒" onPress={() => addValue("-")} style={{fontSize: 46}} />
                </View>
                <View style={styles.aLinesNumberButtons}>
                    <ButtonNumber content="1" onPress={() => addValue(1)} />
                    <ButtonNumber content="2" onPress={() => addValue(2)} />
                    <ButtonNumber content="3" onPress={() => addValue(3)} />
                    <ButtonExpecialGreen content="+" onPress={() => addValue("+")} style={{fontSize: 40}} />
                </View>
                <View style={styles.aLinesNumberButtons}>
                    <ButtonText content="+/‒" onPress={() => addValue("(-")} />
                    <ButtonNumber content="0" onPress={() => addValue(0)} />
                    <ButtonText content="," onPress={() => addValue(",")} />
                    <ButtonFinish content="=" onPress={finish} style={{fontSize: 50}} />
                </View>
            </View>
        </View>
    )
}