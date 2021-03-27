import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import styles from './style.css';
const fetch = require("node-fetch");

class App extends Component {
  constructor(props) {
    super(props);
    this.con = this.con.bind(this);
    this.con1 = this.con1.bind(this);
  }
get(json) {
   var first1 = document.getElementById("first1").value;
}
con1() {

}
con = async () => {
  var first1 = document.getElementById("first1").value;
  var select1 = document.getElementById("select1").value;
  var select2 = document.getElementById("select2").value;
  var request = new XMLHttpRequest()
  var custom = document.getElementById("first1").value;
  var USDEUR = "https://api.exchangeratesapi.io/latest?base=USD";
  var EURUSD = "https://api.exchangeratesapi.io/latest?base=EUR";
  var cUSDEUR = document.getElementById("cUSDEUR").value;
  var cEURUSD = document.getElementById("cEURUSD").value;
  var rate = document.getElementById("rate").value;
  var rate1 = document.getElementById("rate1").value;
  var ar = document.getElementById("select3").value;
  var custom1 = false;
  if(ar === "rate"){
    custom1 = true;

  }
  var custom = false;
  if(ar == "api"){
    custom = true;

  }
  
   
    //First check what type of data you are getting here and then try to set your state as below.
    //this.setState({student:data.results[0], loading:false});


  if (select1 === "EUR"  && select2 === "USD" && custom !== true && custom1 !== true){
    const response1 = await fetch(EURUSD);
    //need to get usd
    const value1 = await response1.json(); //extract JSON from the http response
    var usd = JSON.stringify(value1["rates"]["USD"]);
    var res1 = first1 * usd;
    
    alert("Results:" + res1)

    
  }
  if (select1 === "USD"  && select2 === "EUR" && custom !== true && custom1 !== true){
    //need to get eur
    const response2 = await fetch(USDEUR);
    const value2 = await response2.json(['rates']); //extract JSON from the http response
    var eur2 = JSON.stringify(value2["rates"]["EUR"]);
    var res2 = first1 * eur2;
    
    alert("Results:" + res2)

    
  }
  //Custom ones
  if (select1 === "EUR"  && select2 === "USD" && custom === true && custom1 !== true){
    const response3 = await fetch(cEURUSD);
    //need to get usd
    const value3 = await response3.json(['rates']); //extract JSON from the http response
    var eur3 = JSON.stringify(value3["rates"]["USD"]);
    var res3 = first1 * eur3;
    
    alert("Results:" + res3)

    
  }
  if (select1 === "USD"  && select2 === "EUR" && custom === true && custom1 !== true){
    //need to get eur
    const response4 = await fetch(cUSDEUR);
    const value4 = await response4.json(); //extract JSON from the http response
    var eur4 = JSON.stringify(value4["rates"]["EUR"]);
    var res4 = first1 * eur4;

    
    alert("Results:" + res4)

    
  }
  //custom rate one
  if (select1 === "EUR"  && select2 === "USD" && custom !== true && custom1 === true){

    var res5 = first1 * rate;
    
    alert("Results:" + res5)

    
  }
  if (select1 === "USD"  && select2 === "EUR" && custom !== true && custom1 == true){
    //need to get eur

    var res5 = first1 * rate1;

    
    alert(res5)

    
  }




  
  }
  XX()
  {
      var first1 = document.getElementById("first1").value;
      var select1 = document.getElementById("select1").value;
      
  } 


  render() {
    return (
      <body>

      <div class="test">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
        

        <main className="container">
        <div class="i1"> 
        <select name="select1" onchange="XX()" id="select1">
        <option disabled selected>Choose 1st. currency</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        </select>
        </div>
        <div class="i2">
        <select name="select2" onchange="XX()" id="select2">
        <option disabled selected>Choose 2nd. currency</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        </select>    
          
        </div>
        
        <div class="i3">
          
        <input placeholder="Api for EUR/USD" class="input-group-text" id="inputGroup-sizing-sm" type="text" id="cEURUSD" name="first1" onchange="XX()"></input>
        <p></p>
        <input placeholder="Api for USD/EUR"class="input-group-text"  id="inputGroup-sizing-sm" type="text" id="cUSDEUR" name="first1" onchange="XX()"></input>
        <p></p>
        <input placeholder="Rate for EUR/USD" class="input-group-text" id="inputGroup-sizing-sm" type="text" id="rate" name="first1" onchange="XX()"></input>
        <p></p>
        <input placeholder="Rate for USD/EUR"class="input-group-text"  id="inputGroup-sizing-sm" type="text" id="rate1" name="first1" onchange="XX()"></input>
        <p></p>
        <select name="select3" onchange="XX()" id="select3">
        <option disabled selected>Choose Api or Rate</option>
        <option value="api">Use custom Apis.</option>
        <option value="rate">Use custom Rates.</option>
        </select>    
<p></p>
        <button  onClick={this.con} class="btn btn-outline-primary">
           Check
        </button>  
        <p></p>
        <a href="/">Reset!</a>
        

       

        </div>     
        <div id="demo" class="centered">
        
        <input class="form-control" id="ex1" type="number" id="first1" name="first1" onchange="XX()"></input>
 
        </div>     
        <div class="ispod">
        <button  onClick={this.con} class="btn btn-outline-primary">
           convert
        </button>  
          
        </div>
        <div class="e1">
          <h1>Currency converter</h1>
          </div>
          <div class="e2">

          <h2>This is real time currency converter where you can use your custom apis!</h2>
          </div>  
          <div class="e3">

          <p>This was built using React Js, Copyright Roman Melnik</p>
          </div>  
        </main>

         
      </div>
     </body> 
    );
  }
}

export default App;
