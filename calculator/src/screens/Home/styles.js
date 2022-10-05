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
        height: 40,
        // backgroundColor: "red",
        marginVertical: 20,
        paddingHorizontal: 25,
        flexDirection: "row"
    },
    aItemsLeft:
    {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        // backgroundColor: "green",
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
        color: "#999"
    },
    iconRight:
    {
        fontSize: 22,
        color: "#394a26"
    }
})

export default styles