import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom);
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
      navigate("/");
    }
    return (
        <div class="screen-container">
            <h1 class="content">
                Contact
            </h1>
            <div className="container">
                <form style={{ width: "232px", display: "flex", flexDirection:"column", justifyContent:"center"}}onSubmit={onSubmit}>
                    <div style={{ display: "flex", justifyContent:"space-between"}}>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" id="name" required />
                    </div>
                    <div style={{display: "flex", justifyContent:"space-between"}}>
                        <label  htmlFor="email">
                            Email
                        </label>
                        <input type="email" id="email" required />
                    </div>
                    <div style={{display: "flex", justifyContent:"space-between"}}>
                        <label  htmlFor="message">
                            Message
                        </label>
                        <textarea id="message" required />
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