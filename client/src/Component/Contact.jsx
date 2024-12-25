import React from "react";
import facebook from "../assets/icons/facebook card.png";
import instagram from "../assets/icons/instagram.png";
import threads from "../assets/icons/threads.png";
import contact from "../assets/icons/contact.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "./PhoneInput.css";
import "react-phone-input-2/lib/style.css";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

const Firebasestore = async (values) => {
  try {
    const doc = collection(db, "contact_details");
    await addDoc(doc, {
      name: values.name,
      email: values.email,
      phoneno: values.phone,
      message: values.message,
      timestamp: new Date(),
    });
    console.log("Sucessfully inserted");
  } catch (e) {
    console.log("Eroor from Add details" + e);
  }
};

const Contact = () => {
  return (
    <>
         <div className='w-screen h-screen bg-background rounded-xl flex justify-evenly items-center md:justify-center md:items-center'>
                <div className='h-screen w-screen justify-evenly items-start pl-4 pt-2 md:pl-0 md:pt-0 flex flex-col   md:h-3/5 md:w-4/6 md:justify-between md:p-0  text-black md:flex-row'>
                    <div className='flex  flex-col justify-start items-start'>
                        <div className='flex flex-row gap-4'>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="Facebook" className="lg:size-14 md:size-8 sm:size-8" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">

                                <img src={instagram} alt="Instagram" className="lg:size-14 md:size-8 sm:size-8" />

                            </a>
                            <a href="https://threads.net" target="_blank" rel="noopener noreferrer">

                                <img src={threads} alt="Threads" className="lg:size-14 md:size-8 sm:size-8" />

                            </a>
                            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">

                                <img src={contact} alt="WhatsApp" className="lg:size-14 md:size-8 sm:size-8" />

                            </a>
                        </div>
                        <div className=" font-inter font-bold lg:text-[49px] leading-[48.41px]  text-lg text-white md:mt-5">
                            Let’s Get In Touch.
                        </div>

                        <div className="flex  font-inter lg:text-xl font-normal leading-[24.2px]  text-left sm:text-sm md:text-sm  text-white">

                            Or just reach out manually to<span className='text-textgmail'>
                                <a href="mailto:mortenconnect@gmail.com" className='no-underline'>
                                &thinsp;here
                                </a>
                            </span>

                        </div> 
                        



                    </div>

                    <div className='flex justify-evenly '>
                        <Formik
                            initialValues={{ name: '', email: '', phone: '', message: '' }}
                            validationSchema={validationSchema}
                            onSubmit={ Firebasestore}
                        >
                            {({ setFieldValue, values }) => (
                                
                                <Form className="flex flex-col m-2 ">
                                    {/* Full Name Field */}
                                    <label
                                        htmlFor="name"
                                        className="block font-semibold text-white text-xl md:text-2xl font-poppins"
                                    >
                                        Full Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Full name"
                                        className="h-10 w-full  md:h-1/6 md:w-[40rem] border border-[#FFFFFF1A] p-6 mb-2 text-white rounded-[25px] font-poppins block md:text-1xl font-semibold bg-transparent"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

                                    {/* Email Field */}
                                    <label
                                        htmlFor="email "
                                        className="block text-xl font-semibold text-white md:text-2xl font-poppins md:mt-1"
                                    >
                                        Email Address
                                    </label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="h-10 w-full md:h-1/6 border border-[#FFFFFF1A]  p-6 mb-2 text-white rounded-[25px] font-poppins font-semibold block md:text-1xl bg-transparent"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                                    {/* Phone Number Field */}
                                    <label
                                        htmlFor="phone"
                                        className="block text-[25px] font-semibold text-white text-xl font-poppins md:mt-1"
                                    >
                                        Phone Number
                                    </label>
                                    <div className="phone-input-container">
                                        <PhoneInput
                                            country="us"
                                            value={values.phone}
                                            onChange={(phone) => setFieldValue("phone", phone)}
                                            inputProps={{
                                                name: "phone",
                                                id: "phone",
                                                placeholder: "Enter your phone number",
                                            }}
                                            inputClass="form-control"
                                        />
                                    </div>
                                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />

                                    {/* Message Field */}
                                    <label
                                        htmlFor="message"
                                        className="block text-[25px] font-semibold text-white text-xl md:text-2xl font-poppins md:mt-1"
                                    >
                                        Message
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="message"
                                        name="message"
                                        placeholder="Share your Queries...."
                                        className="h-25 w-full md:h-40 border border-[#FFFFFF1A]  p-6 text-white rounded-[25px] font-poppins font-semibold block md:text-1xl bg-transparent"
                                    />
                                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="h-12 w-full md:h-24  bg-[#453FF3] text-white text-2xl font-poppins font-semibold rounded-[20px] mt-6 mb-4"
                                    >
                                        CONNECT
                                    </button>
                                </Form>

                            )}
                        </Formik>

                    </div>
                </div>

            </div>
    </>
  );
};

export default Contact;
