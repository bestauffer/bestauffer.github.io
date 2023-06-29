import React from "react";
import {useRef} from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../config";

const Contact = () => {
  const form = useRef();
    const navigate = useNavigate();
    const [formStatus, setFormStatus] = React.useState('Send')

    const onSubmit = (e) => {
      e.preventDefault();

      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom);
      try {
        //    await axios.get(apiPath)
        //    .then(res => {
          emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        navigate("/");
          console.log(result.text);
      }, (error) => {
        navigate("/");
          console.log(error.text);
      });
        // http.get('/email')
        //   .then(response => {
        //      navigate("/");
        //     //setUsername(response.data.message);
        //     //storeData("myMessage", response.data.message);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //     navigate("/");
        //   });

        // const res = await fetch(`${apiPath}`);
        // const response = await res.json();
        // await setUsername(response.message);
        // await storeData("myMessage", response.message);

      } catch {
        //await storeData("myUser", "error");
        //setUsername("error with deno server... \nBut welcome to my profile");
        //if (onError) onError(error);
      }

      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
      e.target.elements.subject.value = '';
     
    }
    return (
        <div className="screen-container">
            <h1 className="content">
                Contact
            </h1>
            <div className="container">
                <form ref={form} style={{ width: "232px", display: "flex", flexDirection:"column", justifyContent:"center"}}onSubmit={onSubmit}>
                    <div style={{ display: "flex", justifyContent:"space-between"}}>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" name="name" required />
                    </div>
                    <div style={{display: "flex", justifyContent:"space-between"}}>
                        <label  htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" required />
                    </div>
                    <div style={{display: "flex", justifyContent:"space-between"}}>
                        <label  htmlFor="subject">
                            Subject
                        </label>
                        <input type="text" name="subject" required />
                    </div>
                    <div style={{display: "flex", justifyContent:"space-between"}}>
                        <label  htmlFor="message">
                            Message
                        </label>
                        <textarea id="message" name="message" required />
                    </div>
                    <button style={{display:"flex", justifyContent:"center", alignSelf:"end", width: "170px"}} type="submit">
                        {formStatus}
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Contact;