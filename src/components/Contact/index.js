import React, { useState } from "react";

function ContactForm() {
  /*Hook to manage the form data and initialize the values of the state. formState will have three key-value pairs to represent the three user inputs: name, email, and message*/
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  //destructure the formState object to its named properties, name, email, and message.
  const { name, email, message } = formState;
  /* Function sync the internal state of the component formState with the user input from the DOM. The onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field*/
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  /*In the preceding function, we're using the setFormState function to update the formState value for the name attribute of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.. We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.*/

  console.log(formState);

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
            // onchange is the event that triggers the call of function handleChange
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
