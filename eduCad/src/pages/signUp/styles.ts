import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    width: Dimensions.get('window').width * 0.9,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: -50,
    marginBottom: 100,
    },
    logo: {
    width: 120,
    height: 120,
    },
    textLogo: {
    fontSize: 24,
    color: '#2964ac',
    fontWeight: 'bold',
    },
    placeholderContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
    backgroundColor: '#b1dae9',
    borderColor: '#43b3db',
    borderWidth: 1,
    borderRadius: 20,
    padding: 2,
    },
    inputContainer: {
    flexDirection: 'row',
    width: '90%',
    padding: 15,
    },
    boxTitle: {
    alignSelf: 'flex-start',
    color: '#2964ac',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
},
signUpText: {
    marginTop: 20,
    color: '#2964ac',
    fontSize: 16,
    },
    signInButton: { 
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#43b3db',
    borderColor: '#2964ac',
    color: '#2964ac',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 40,
    },
    signInButtonText: {
    color: '#2964ac',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    marginLeft: 5,
    },
    signUpButton: {
    color: '#2964ac',
    fontSize: 16,
    fontWeight: 'bold',
    },
    box: {
    width: '100%',
    },
});