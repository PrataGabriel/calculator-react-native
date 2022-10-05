import { StyleSheet } from 'react-native'

const styles = StyleSheet.create(
{
    aAllApp:
    {
        backgroundColor: "#010101",
        width: "100%",
        height: "100%",
        paddingHorizontal: 25
    },
    aViewInformation:
    {
        height: "42%"
    },
    aInput:
    {
        flex: 1
    },
    aMenuTools:
    {
        width: "100%",
        marginVertical: 20,
        paddingHorizontal: 15,
        flexDirection: "row"
    },
    aItemsLeft:
    {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    aItemsRight:
    {
        width: "50%",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    iconLeft:
    {
        fontSize: 24,
        color: "#999",
        padding: 12
    },
    iconRight:
    {
        fontSize: 22,
        color: "#394a26",
        padding: 12
    },
    iconPressable: ({pressed}) =>
    [{
        backgroundColor: pressed ? '#1f1f1f' : 'transparent',
        borderRadius: 50
    }],
    textInput:
    {
        fontSize: 32,
        textAlign: "right",
        color: "#fff",
        paddingVertical: 60,
        paddingHorizontal: 18
    }
})

export default styles