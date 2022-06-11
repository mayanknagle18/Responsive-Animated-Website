import React, { useState } from "react";

const Contact = () => {

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: ""
  });

  const InputEvent = (event) => {
    const {name, value} = event.target; /*object destructuring */

    setData((preVal) => {  /* inline func.*/
        return {
          ...preVal,
          [name] : value,
        }
    }); 
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`
    My name is ${data.fullname}.
    My phone number is ${data.phone}
    and Email Id is ${data.email}
    Here is what I want to say ${data.message}`);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input className="form-control" 
                type="text" 
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Enter Your Full Name" 
                aria-label="default input example" 
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">
                  Phone Number
                </label>
                <input className="form-control" 
                type="text" 
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="Enter Your Phone Number" 
                aria-label="default input example" 
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput3"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit Form
                </button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
