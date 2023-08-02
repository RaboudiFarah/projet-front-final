import React from 'react'
import './formulaire.css'
import Form from 'react-bootstrap/Form';
function Formulaire() {

    return (
     
<>
   
      
     <span className="FormTitle">Register your children </span>
      <form class="form">
    
      <div class="flex">
          <label>
              <input class="input" type="text" placeholder=" Student first name" required=""/>
              <span></span>
          </label>
  
          <label>
              <input class="input" type="text" placeholder="Student last name" required=""/>
              <span> </span>
          </label>
      </div>  
              
      <label>
          <input class="input" type="text" placeholder="Parent FullName" required=""/>
          <span></span>
      </label> 
          
      <label>
          <input class="input" placeholder="student age" type="tel" required=""/>
          <span></span>
      </label>
      <label>
          <textarea class="input01" placeholder="Write a message" rows="3" required=""></textarea>
          <span> </span>
      </label>
      
      <Form.Select aria-label="Default select example" className="option">
      <option >Class</option>
      <option value="1">First grade</option>
      <option value="2">second grade </option>
      <option value="3">Thiird grade</option>
    </Form.Select>
   
      <button href="#" class="fancy">
        
        <span class="text">Register</span>
        
        </button>
   
     
  </form>
  </>
 
      );
    }
    


export default Formulaire