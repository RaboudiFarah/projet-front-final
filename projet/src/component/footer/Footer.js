import React from "react"

import "./footer.css"

const Footer = () => {
  return (
    <>
    
    <footer class="footer-distributed">
    
          <div class="footer-left">
    
            <h3>My SChool</h3>
            <span>Private School</span>
    
            <p class="footer-links">
              <a class="link-1">Home</a>
              
              <a>Program</a>
            
              <a >Contact</a>
            
              <a>Login</a>
              
              <a>Register</a>
              
              
            </p>
    
            <p class="footer-company-name">My School © 2015</p>
          </div>
    
          <div class="footer-center">
    
            <div>
              <i class="fa fa-map-marker"></i>
              <p><span>Rue Faycel Abdel Aziz 'route Bir Bouraba</span>Hammamet, Hammamet, Tunisia</p>
            </div>
    
            <div>
              <i class="fa fa-phone"></i>
              <p>72 279 863</p>
            </div>
    
            <div>
              <i class="fa fa-envelope"></i>
              <p><a href="mailto:support@company.com">myschoolhammamet@gnet.tn</a></p>
            </div>
    
          </div>
    
          <div class="footer-right">
    
            <p class="footer-company-about">
              <span>About the My School</span>
              My school is a private educational establishment located in Hammamet which aims to provide better training and supervision of your children.
</p>
           
    
          </div>
    
        </footer>
    </>
  )
}

export default Footer