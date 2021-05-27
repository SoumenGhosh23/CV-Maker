import React, { useState } from 'react';
import emailjs from 'emailjs-com';
const Feedback = () => {
  const [mesg, setmesg] = useState("");
  const [dis_mesg, dis_setmesg] = useState();
  const input_mesg = (event) => {
    const value = event.target.value;
    setmesg(value)
  }
  const send = (event) => {
    event.preventDefault();
    dis_setmesg(mesg)
    setmesg(" ");
    emailjs.sendForm('gmail', 'template_ogbsq16', event.target, 'user_kUwwdda2Axcvp9pvEduMd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }

  return (
    <>
      <div className="contact_bgColor">
        <div className="contact_input">
          <div className="contact_contact">Feedback Please</div>
          <form onSubmit={send}>

            <input type="text" placeholder="Messages" onChange={input_mesg} autoComplete="off" style={{ height: "50px" }} name="message"></input>
            <br />

            <br />
            <button type="submit" className="send">Send</button>
          </form>


        </div>
      </div>
    </>
  )
}
export default Feedback;