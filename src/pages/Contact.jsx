import React from "react";
import '../CSS/Contact.css';

const Contact = () => {
    return (
        
        <>
         <section className="ContactContainer">
            
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me by Email or Linkedin</p>
            <button>
                <a href="mailto:alton26@usf.edu">Email</a>
            </button>
            <button>
                <a href="https://www.linkedin.com/in/alton-simpson-b07278238/" target="_blank">Connect with me on Linkedin</a>
            </button>
            <p>Or Send me a email to my Personal email</p>
            <button>
                <a href="mailto:altonsimpson22@gmail.com>">Personal Email</a>
            </button>
        </section>
        </>
       
    );
};

export default Contact;