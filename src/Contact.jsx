import React, { useState } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const [contact, setcontact] = useState(
    {
      fullname: "",
      number: "",
      email: "",
      message: "",
    }
  )
  const [dis_contact, dis_setcontact] = useState(
    {
      dis_fullname: "",
      dis_number: "",
      dis_email: "",
      dis_message: "",
    }
  )

  const input_contact = (event) => {
    const { name, value } = event.target;
    setcontact((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      }
    })
  }


  const send = (event) => {
    event.preventDefault();
    dis_setcontact(() => {
      return {
        dis_fullname: contact.fullname,

        dis_number: contact.number,
        dis_email: contact.email,
        dis_message: contact.message,


      }
    })

    emailjs.sendForm('gmail', 'template_a4pul1m', event.target, 'user_kUwwdda2Axcvp9pvEduMd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setcontact("")
    event.target.reset();
    alert("WE WILL CONTACT YOU SOON")

  }




  return (
    <>
      <div className="contact_bgColor">
        <div className="contact_input">
          <div className="contact_contact">Contact</div>

          <form onSubmit={send}>
            <input type="text"
              placeholder="Enter your  Full Name "
              autoComplete="off"
              onChange={input_contact}
              name="fullname"
              value={contact.fullname}></input>
            <br />


            <input type="number"
              placeholder="Enter your  Personal phone number" minLength="10"
              autoComplete="off"
              onChange={input_contact}
              name="number"
              value={contact.number}></input>
            <br />



            <input type="email"
              placeholder="example@gmail.com"
              autoComplete="off"
              onChange={input_contact}
              name="email"
              value={contact.email}></input>
            <br />


            <input type="textarea"
              placeholder="Messages"
              autoComplete="off" style={{ height: "50px" }}
              onChange={input_contact}
              name="message"
              value={contact.message}></input>
            <br />


            <button type="submit" className="send">Send</button>
          </form>


        </div>
      </div>
    </>
  )
}
export default Contact;