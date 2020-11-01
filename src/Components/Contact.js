import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    function handleChange(evt) {
       const value = evt.target.value;
       
         console.log(value);
      }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="/contact" method="post" id="contactForm" name="contact"> 
               <input type="hidden" name="form-name" value="contact" />					        
                  <div>
						   <label>Name <span className="required">*</span></label>
						   <input type="text" size="35" id="contactName" name="name" />
                  </div>
                  <div>
						   <label>Email <span className="required">*</span></label>
						   <input type="email" size="35" id="contactEmail" name="email"/>
                  </div>
                  <div>
						   <label>Subject</label>
						   <input type="text" size="35" id="contactSubject" name="subject" />
                  </div>
                  <div>
                     <label>Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="message"></textarea>
                  </div>
                  <div><div data-netlify-recaptcha="true"></div></div>
                  <div className="btn-submit">
                     <button type="submit" className="submit">Submit</button>
                  </div>					
				   </form>

           {/* <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div> */}
           </div>

      </div>
   </section>
    );
  }
}

export default Contact;
