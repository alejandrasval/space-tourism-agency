import React, { useState, useRef } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Reservations = () => {
  const [formSend, setFormSend] = useState(false);
  const formRef = useRef();

  const { user } = useSelector((store) => store.user);

  return (
    <>
      <div className="bg-background1 bg-cover w-full h-screen overflow-hidden text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-sm bg-white/10 rounded-md p-4 max-w-md w-full space-y-8">
          <div>
            <img
              className="bg-white w-50 h-50 rounded-full items-center justify-center mx-auto h-12 w-auto"
              src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1640671573/Space%20Tourism/logo_rsnfax.svg"
              alt="logo"
            />
            <h2 className="font-barlow-condensed mt-6 text-center text-3xl font-extrabold">
              Make a reservation
            </h2>
          </div>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                destination: "",
                date: "",
                message: "",
              }}
              validate={(values) => {
                let error = {};

                //Name validation
                if (!values.name) {
                  error.name = "Please, enter a name.";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                  error.name = "The name can only contain letters and spaces.";
                }

                //Email validation
                if (!values.email) {
                  error.email = "Please, enter an email.";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    values.email
                  )
                ) {
                  error.email =
                    "The email can only contain letters, numbers, dot (.), underscore (_) or dash/hyphen (-).";
                }

                //Phone validation
                if (!values.phone) {
                  error.phone = "Please, enter a phone.";
                } else if (!/^[0-9\s]{1,10}$/.test(values.phone)) {
                  error.phone = "Enter a valid phone number.";
                }
                return error;
              }}
              onSubmit={(values, { resetForm }) => {
                emailjs
                  .sendForm(
                    "service_tusj02j",
                    "template_3i1qjqh",
                    formRef.current,
                    "user_JfkNX3UNYbtsvNT9Ex3LI"
                  )
                  .then(
                    () => {
                      setFormSend(true);
                      setTimeout(() => {
                        setFormSend(false);
                      }, 3000);
                      resetForm();
                    },
                    (error) => {
                      console.log(error.text);
                    }
                  );
              }}
            >
              {({ errors }) => (
                <Form ref={formRef} className="font-barlow text-black">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <Field
                      id="name"
                      name="name"
                      type="name"
                      required
                      className="rounded-md relative block w-full px-3 py-2 my-4 border border-gray-300 placeholder-black"
                      placeholder="Name"
                    />
                    <ErrorMessage
                      name="name"
                      component={() => (
                        <div className="text-sm text-white">{errors.name}</div>
                      )}
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <Field
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      className="rounded-md relative block w-full px-3 py-2 my-4 border border-gray-300 placeholder-black"
                      placeholder="Email address"
                    />
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className="text-sm text-white">{errors.email}</div>
                      )}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <Field
                      id="phone"
                      name="phone"
                      type="phone"
                      required
                      className="rounded-md relative block w-full px-3 py-2 my-4 border border-gray-300 placeholder-black"
                      placeholder="Phone"
                    />
                    <ErrorMessage
                      name="phone"
                      component={() => (
                        <div className="text-sm text-white">{errors.phone}</div>
                      )}
                    />
                  </div>
                  <div>
                    <label htmlFor="destination" className="sr-only">
                      Destination
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      type="destination"
                      required
                      className="w-full rounded-md px-3 py-2 my-4 block"
                    >
                      <option value="moon">Moon</option>
                      <option value="mars">Mars</option>
                      <option value="europa">Europa</option>
                      <option value="titan">Titan</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      className="font-barlow rounded-md relative block w-full px-3 py-2 my-4 border border-gray-300 placeholder-black"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="border-2 border-solid border-white group relative w-full flex justify-center py-2 px-4 my-4 text-sm font-bold rounded-md text-white"
                    >
                      Book now
                    </button>
                    {user ? (
                      formSend && (
                        <p className="text-sm text-white">Successfully sent!</p>
                      )
                    ) : (
                      <p className="text-sm text-white">
                        You have to be logged to make a reservation.
                        <Link className="hover:underline" to="/login">
                          {" "}
                          Log in here.
                        </Link>
                      </p>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservations;
