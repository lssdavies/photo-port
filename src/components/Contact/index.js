import React, { useState } from "react";
//importing the helper of function to validate email 
import { validateEmail } from '../../assets/utils/helpers'

function ContactForm() {
  /*Hook to manage the form data and initialize the values of the state. formState will have three key-value pairs to represent the three user inputs: name, email, and message*/
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  //Hook to validate the form data and initialize error message to a blank string
  const [errorMessage, setErrorMessage] = useState("");

  //destructuring the formState object to its named properties, name, email, and message.
  const { name, email, message } = formState;

  


  /* Function to sync the internal state of the component formState with the user input from the DOM. The onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field*/
  function handleChange(e) {
      if (e.target.name === "email") {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        // isValid conditional statement
        if (!isValid) {
          setErrorMessage("Your email is invalid.");
        } else {
          setErrorMessage("");
        }
      } else {
        //the else contitional statement checks the value of target.name (this will include name and message) is blank by checking if there is a length value 
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }  
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    console.log("errorMessage", errorMessage);
  }
  /*In the preceding function, we're using the setFormState function to update the formState value for the name attribute of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.. We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.*/

//   console.log(formState);

  //Function to handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          {/* Since for is a reserved keyword in JS replace the label element attribute for with htmlFor. Similar to class and ClassName */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            /* onBlur is the event that triggers the call of function handleChange, this mean it will run after the user in no longer focused on the input*/
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {/* /using short circuit so that if errorMessage evaluates to true the message will render if not it doesnt render */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
