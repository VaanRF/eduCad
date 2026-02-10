import { Dimensions, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    width: Dimensions.get('window').width * 0.9,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: StatusBar.currentHeight,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    },
    logo: {
    width: 50,
    height: 50,
    },
    title: { 
    fontSize: 18,
    color: '#2964ac',
    fontWeight: 'bold',
    marginLeft: 10,
    },
    userContainer: {
    flexDirection: "row",
    alignItems: "center",
    },
    logoContainer: {
    flexDirection: "column",
    alignItems: "center",
    },
});