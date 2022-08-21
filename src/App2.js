import React from 'react';
import axios from 'axios';

 
 class App extends React.Component { 
 // Constructor  

 constructor(props) { 

    super(props); 



    this.state = { 

        items: [], 

        DataisLoaded: false

    }; 

} 



// ComponentDidMount is used to 

// execute the code  

componentDidMount() { 

    axios.get("https://covidnigeria.herokuapp.com/api?i") 

        .then((res) => { 
          return res.data.data.states
         
        }) 

        
        .then((res) => {this.setState({items:res, 

                DataisLoaded: true

            }); 
console.log(res)
        }    ) 

} 

render() { 

    const { DataisLoaded, items } = this.state; 

    if (!DataisLoaded) return <div> 

        <h1> This Might Take Some Time</h1> 
        <p>Please Wait.......</p></div> ; 



    return ( 

    <div className = "App"> 

        <h1> Fetching data from Covid Nigeria API in React </h1>  { 

            items.map((item) => (  

            <li key = { item._id } > <b> State: { item.state }</b>

               <p>Confirmed Cases: { item.confirmedCases}</p>  
               <p> Cases on Admision: { item.casesOnAdmission }</p>
               <p>  Discharged: { item.discharged }</p>
               <p>  Death: { item.death }</p>   

                </li> 

            )) 

        } 

    </div> 

); 
} 
} 

export default App; 