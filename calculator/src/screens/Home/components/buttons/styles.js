import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('screen').width,
      widthButton = (screenWidth - (15 * 2) - 60) / 4

const styles = StyleSheet.create(
{
    button:
    {
        backgroundColor: "#1f1f1f",
        width: widthButton,
        height: widthButton,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText:
    {
        fontSize: 28,
        color: "#fff",
        fontFamily: "Heebo-Light"
    },
    buttonC:
    {
        color: "#ff736d"
    },
    buttonsExpecialGreen:
    {
        color: "#9dd260"
    },
    buttonNumber:
    {
        fontFamily: "Heebo-Regular"
    },
    buttonFinishEqual:
    {
        backgroundColor: "#427e04"
    }
})

export default styles