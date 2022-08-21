import logo from './logo.svg';
import './App.css';
import Circle from "./components/Circle";
import React, { useEffect, useState } from 'react';
import style from './components/progress.css';
import Tick from './components/tick.png';


function App() {
  const[formStep, setFormStep] = React.useState(0)
  const completeFormStep = ()=>{
    setFormStep(cur => cur + 1);
  }
  const progressMove =()=> {active>=circle?setActive(circle):setActive(active+1)}

  const renderButton = ()=>{
    if (formStep > 2){
      return undefined
    }  else if(formStep > 1) {
      return(
        <div className='buttons'>
        <a className='btn' onClick={()=>{progressMove();completeFormStep()}} >Pay</a>
        <a className="cancel" href=''>Cancel Payment</a>
      </div>
      )
    }else {
      return(
      <div className='buttons'>
      <a className='btn' onClick={()=>{progressMove();completeFormStep()}} >Next</a>
      <a className="cancel" href=''>Cancel Payment</a>
    </div>
    )}
  }
  
 const content=()=>{ 
        if (formStep > 2){
          return undefined
        } else {
        return(
        <div className="content">
        <h2>Complete your Purchase</h2>
        <div className='contentbar'> 
        <p>Personal Info</p>
        <p>Billing Info</p>
        <p>Confirm Payment</p>
        </div> 
      <div className="progressbar">
        
        <div className='progress' style={{width:width+"%"}}></div>
        {arr}
      </div>
      </div>
      )}
 }

  const [circle] = useState(3);
  const [active ,setActive] = useState(0);
  const[width,setWidth]= useState(0);
  useEffect(()=>{
   setWidth(100/(circle-1)*active);
  },[circle,active]);
  const arr=[];
  for (let i = 0; i < circle; i++){
   arr.push(<Circle classname={i<=active?"circle active":"circle"}key={i}>{i}</Circle>);
  }
  return (
    <div className="container">
      {content()}
        <div className='form-section'>
          <form>

            { formStep === 0 && (
            <section>

               <label>Name </label> 
            <input type="text" placeholder='Opara Linus Ahmed' />
            

            <label >Email Address <span>*</span></label>
            <input type="email" placeholder='OparaLinusAhmed@devmail.com' />
            
            
            <label>Address 1</label>
            <input type="text" placeholder='The address of the user goes here' />

            
            <label>Address 2</label>
            <input type="text" placeholder='and here' />
            
            <div className='LGA-S'>
              <div className='LGA-label'>
                <label >Local Government </label> 
                <input type="text" placeholder='Surulere' />
              
              </div>
               <div className='S-label'>
                <label>State</label>
                <select>
                  <option value="1">Lagos</option>
                </select>
                
                </div>
            </div>
            </section>)}
           
            { formStep === 1 && (<section>
             <label>Name on Card <span>*</span>
            <input type="text" placeholder='The address of the user goes here' />
            </label>
            
            <label>Card Type <span>*</span>
                <select>
                  <option value="1">Visa</option>
                  <option value="1">Master</option>
                  <option value="1">Debit</option>

                </select>
                </label>
                <div className='card-details'>
              <div className='c-detail'>
                <label >Card Details <span>*</span>
                <input type="text" placeholder='44960 44960 44960 44960' />
              </label> 
              </div>
              <div className='e-date'>
                <label>Expiry date <span>*</span>
                <input type="text" className='e-date-input'  placeholder='04 / 09' />
              </label> 
              </div>
              <div className='cvv'>
                <label >CVV<span>*</span>
                <input type="text" placeholder='923' />
              </label> 
              </div>
               
            </div>
            </section>)}

            { formStep === 2 && (<section>
              <div className='card'>
                <div className='card-head'>
                  <p>Item Name</p>
                  <p>N Price</p>
                </div>
                <div className='card-body'>
                  <div className='flex'>
                  <p>Data Science and usability</p>
                  <p>50,000.00</p>
                  </div>
                  <div className='flex'>
                  <p>Shipping</p>
                  <p>0.00</p>
                  </div>
                  <hr />
                  <div className='flex-border'>
                      <p>Total</p>
                      <p>50,000.00</p>
                  </div>
                </div>
              </div>
            </section>)}

            { formStep === 3 && (<section>
              <div className='c-card'>
                <div className='cc-body'>
                <img src={Tick} className="tick"/>
                <h1>Purchase Completed</h1>
                <p>Please check your email for details concerning this transaction</p>
                <a href="">Return to home</a>
              </div>
              </div>
            </section>)}
           
           {renderButton()}
          </form>
        </div>
    </div>
  );
}

export default App;
