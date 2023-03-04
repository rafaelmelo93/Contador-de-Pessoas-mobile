import React, { Component } from 'react';
import { View, Text, Button, Pressable} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      cont: 0
      
    };


    this.entrar = this.entrar.bind(this);
    this.menos = this.menos.bind(this);
  }
  
  entrar(){
    var number = this.state.cont + 1
    this.setState({
      cont: number
    });    
  }

  menos(){
    if(this.state.cont > 0){
    var number = this.state.cont - 1
    this.setState({
      cont: number
    });
    }
    else{return;}
  }

  render(){
    return(
      

    
      <View style={{ marginTop: 20 }}>

        {/*<Button title="-" onPress={this.menos} />
        <Button title="+" onPress={this.entrar} />*/}
        
      <Text style={{fontSize: 30, textAlign: 'center'}}>Contador de Pessoas</Text>

        <Text style={{fontSize: 80, color: 'red', textAlign: 'center', backgroundColor: '#9BDDFA', borderWidth: 3, padding: 80}}>
          {this.state.cont}
        </Text>

        <Pressable style={{backgroundColor: '#4B96DB', margin:1,  borderWidth: 1, textAlign: 'center', }} onPress={this.entrar}><Text style={{fontSize: 30}}>+</Text></Pressable>
        <Pressable style={{backgroundColor: '#FA312B', margin:1,  borderWidth: 1, textAlign: 'center'}} onPress={this.menos}><Text style={{fontSize: 30}}>-</Text></Pressable>

         

        
      </View>
    )
  }
}




export default App;