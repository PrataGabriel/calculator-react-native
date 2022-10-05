import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('screen').width,
      widthButton = (screenWidth - (15 * 2) - 60) / 4

const styles = StyleSheet.create(
{
    aViewNumberButtons:
    {
        height: "58%",
        borderTopWidth: 1,
        borderStyle: "solid",
        borderColor: "#242424",
        paddingTop: 25,
        paddingBottom: 15
    },
    aColumnsNumberButtons:
    {
        justifyContent: "space-between",
        height: "100%"
    },
    aLinesNumberButtons:
    {
        flexDirection: "row",
        justifyContent: "space-between"
    },
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
        fontSize: 26,
        color: "#fff",
        fontFamily: "Heebo-Light"
    },
    buttonNumber:
    {
        fontFamily: "Heebo-Bold"
    },
    buttonC:
    {
        color: "#ff736d"
    },
    buttonsExpecialGreen:
    {
        color: "#9dd260"
    },
    buttonFinishEqual:
    {
        backgroundColor: "#427e04"
    }
})

export default styles