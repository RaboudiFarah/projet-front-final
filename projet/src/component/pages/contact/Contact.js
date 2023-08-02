import React from "react"

import "./contact.css"

const Contact = () => {
  
  return (
   
     
    <section className="contact">
    <div className="content">
        <h2>Contact Us</h2>
        
    </div>
    <div className="container">
        <div className="contactInfo">
            <div className="box">
                <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Address</h3>
                   <p>Rue Faycel Abdel Aziz 'route Bir Bouraba) Hammamet, Hammamet, Tunisia</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Phone</h3>
                    <p>72 279 863</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Email</h3>
                    <p>myschoolhammamet@gnet.tn</p>
                </div>
            </div>
        </div>
        <div className="contactForm">
            <form>
                <h2>Send Message</h2>
                <div className="inputBox">
                    <input type="text" required="required"/>
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input type="text" required="required"/>
                    <span>Eamil</span>
                </div>
                <div className="inputBox">
                <input type="text" required="required"/>
                    <span>Type your Message...</span>
                </div>
                <div className="inputBox">
                    <input type="submit" value="Send"/>
                </div>
            </form>
        </div>
</div>

</section>
   
  )
}

export default Contact