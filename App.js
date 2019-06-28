import React from 'react';
import { Alert, 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity,   
  TouchableWithoutFeedback,
  Keyboard } from 'react-native';

const currencyPerRupee = {
  DOLLAR : 0.014 ,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  YEN: 1.54,
  BITCOIN: 0.000041
}
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0 "
    };
  }
  buttonPressed = (currency) => {
    if(this.state.inputValue === "") {
      Alert.alert("Enter some value");
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];

    this.setState({resultValue : result.toFixed(2)+" "})
  }
  
  render(){
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <View style = {styles.screenview}>
        <View style= {styles.resultContainer}>
        <Text style = {styles.resultValue}>

          {this.state.resultValue}
        </Text>
        </View>
        <View style = {styles.inputContainer}>
          <TextInput
          style= {styles.input}
          selectionColor= "#fff"
          keyboardType="numeric"
          placeholder="Enter Value"
          value={this.state.inputValue}
          onChangeText= { inputValue => this.setState({
            inputValue
          })}
          />
        </View>
        <View style = {styles.converterButtonContainer} >
          <TouchableOpacity 
          onPress= { ()=> this.buttonPressed("DOLLAR")}
          style = {styles.converterButton}>
            <Text style = {styles.converterButtonText}>
              $
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress= { ()=> this.buttonPressed("EURO")}
          style = {styles.converterButton}>
            <Text style = {styles.converterButtonText}>
              EURO 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress= { ()=> this.buttonPressed("BITCOIN")}
          style = {styles.converterButton}>
            <Text style = {styles.converterButtonText}>
              Bit
            </Text>
          </TouchableOpacity>
          


        </View>
        
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
   
  },
  screenview: {
    flex: 1
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "red",
    backgroundColor: "blue",
    alignItems: "center",
    borderWidth: 2
  },
  resultValue: {
    color:"#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  inputContainer: { 
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "blue"
  },
  input : {
    color: "#fff",
    fontSize: 30
  },
  converterButtonContainer : {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor:"black",
    borderWidth: 2
  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth:2,
    width: "33.3%"
  },
  converterButtonText: {
    color:"black",
    fontSize: 20,
    
  }
});
