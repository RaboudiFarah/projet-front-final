import React from 'react'
import './professor.css'
function Professor() {
  return (
    <>
    <h2 className='professorSpace'>Professor Space </h2>
    <div class="warpper">
      <input class="radio" id="one" name="group" type="radio" checked/>
      <input class="radio" id="two" name="group" type="radio"/>
      <input class="radio" id="three" name="group" type="radio"/>
      
      <div class="tabs">
      <label class="tab" id="one-tab" for="one">Schedule</label>
      <label class="tab" id="two-tab" for="two">Student List </label>
      <label class="tab" id="three-tab" for="three">Reclamation </label>
    
        </div>
      <div class="panels">
      <div class="panel" id="one-panel">
        <div class="panel-title">Your Schedule </div>
        <img src="https://b2a4dcfb6059671a7f8b-627898b7b34cfc0916aca119ffb89556.ssl.cf1.rackcdn.com/article/image/large_6795e119-03b5-40b5-811d-2ee6c699a377.png" alt=""/>
      </div>
      <div class="panel" id="two-panel">
        <div class="panel-title">Your Student List </div>
        <p>...</p>
      </div>
      <div class="panel" id="three-panel">
        <div class="panel-title">What's your Reclamation?</div>
        <form class="colorful-form">
  <div class="form-group">
    <label class="form-label" for="name">Name:</label>
    <input required="" placeholder="Enter your name" class="form-input" type="text"/>
  </div>
  <div class="form-group">
    <label class="form-label" for="email">Email:</label>
    <input required="" placeholder="Enter your email" class="form-input" name="email" id="email" type="email"/>
  </div>
  <div class="form-group">
    <label class="form-label" for="message">Reclamation:</label>
    <textarea required="" placeholder="Enter your message" class="form-input" name="message" id="message"></textarea>
  </div>
  <button class="form-button" type="submit">Send</button>
</form>

      </div>
      </div>
      
    </div>
    </>
    

  
  )
}

export default Professor
