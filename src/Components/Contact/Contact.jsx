import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "105b20d0-2c0b-4654-bc00-ab91153301f5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-column">
            <h3>Send Us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam explicabo porro et voluptates obcaecati nulla!</p>
            <ul>
                <li><img src={mail_icon} alt="" />tasniayeol@gmail.com</li>
                <li><img src={phone_icon} alt="" />+88019790000089</li>
                <li><img src={location_icon} alt="" />Dhaka,Bangladesh</li>
            </ul>
        </div>
        <div className="contact-column">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder='Enter your name' required/>
            <label>Phone number</label>
            <input type="tel" name="phone" placeholder='Enter your phone number' required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your messasge' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact