import React from 'react';
import { useFormik } from 'formik';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Select from 'react-select';

const skillsOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Vue.js', label: 'Vue.js' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Python', label: 'Python' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'Java', label: 'Java' },
    { value: 'C++', label: 'C++' },
];

const Developer = () => {
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        skills: Yup.array().of(Yup.string()).min(1, 'At least one skill is required'),
        portfolioUrl: Yup.string().required('Portfoliourl required'),
        githubUrl: Yup.string().required('GithubUrl required'),
        phone: Yup.string().required('Phone number is required'),
    });

    return (
        <div className="flex justify-center items-center h-screen w-screen" style={{ backgroundImage: 'linear-gradient(to bottom, #ffffff, #f7f7f7)', }}>
            <div className="bg-white shadow-xl rounded-lg w-full md:w-1/2 lg:w-1/3">
                <h1 className="text-center text-3xl font-bold">Developer Details</h1>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        skills: [],
                        portfolioUrl: '',
                        githubUrl: '',
                        phone: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ setFieldValue, values }) => (
                        <Form className="flex flex-col">
                            {/* Full Name Field */}
                            <label htmlFor="name" className="block font-semibold text-gray-700 text-xl mb-2">Full Name</label>
                            <Field type="text" id="name" name="name" placeholder="Full name" className="h-10 w-full border border-gray-300 p-4 text-gray-700 rounded-lg font-poppins block mb-4" />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

                            {/* Email Field */}
                            <label htmlFor="email" className="block font-semibold text-gray-700 text-xl mb-2">Email Address</label>
                            <Field type="email" id="email" name="email" placeholder="Email Address" className="h-10 w-full border border-gray-300 p-4 text-gray-700 rounded-lg font-poppins block mb-4" />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                            {/* Skills Field */}
                            <label htmlFor="skills" className="block font-semibold text-gray-700 text-xl mb-2">Skills</label>
                            <Select
                                id="skills"
                                name="skills"
                                options={skillsOptions}
                                isMulti
                                onChange={(selectedOptions) => {
                                    const skills = selectedOptions.map(option => option.value);
                                    setFieldValue('skills', skills);
                                }}
                                value={values.skills.map(skill => skillsOptions.find(option => option.value === skill))}
                                placeholder="Select Skills"
                            />


                            <ErrorMessage name="skills" component="div" className="text-red-500 text-sm" />

                            {/* PortfolioUrl Field */}
                            <label htmlFor="portfolioUrl" className="block font-semibold text-gray-700 text-xl mb-2">PortfolioUrl</label>
                            <Field type="text" id="portfolioUrl" name="portfolioUrl" placeholder="PortfolioUrl" className="h-10 w-full border border-gray-300 p-4 text-gray-700 rounded-lg font-poppins block mb-4" />
                            <ErrorMessage name="portfolioUrl" component="div" className="text-red-500 text-sm" />

                            {/* GithubUrl Field */}
                            <label htmlFor="githubUrl" className="block font-semibold text-gray-700 text-xl mb-2">GithubUrl</label>
                            <Field type="text" id="githubUrl" name="githubUrl" placeholder="GithubUrl" className="h-10 w-full border border-gray-300 p-4 text-gray-700 rounded-lg font-poppins block mb-4" />
                            <ErrorMessage name="githubUrl" component="div" className="text-red-500 text-sm" />
                            {/* Phone Number Field */}
                            <label htmlFor="phone" className="block font-semibold text-gray-600 text-lg mb-1">Phone Number</label>
                            <div className="phone-input-container rounded-sm text-lg text-black">
                                <Field type="number" id="phone" name="phone" placeholder="Enter Phone Number" className="h-10 w-full border border-gray-300 p-4 text-gray-700 rounded-lg font-poppins block mb-4" />
                                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="h-9 w-full md:h-16 bg-[#453FF3] text-white text-2xl font-poppins font-semibold rounded-[20px] mt-6 mb-4">SUBMIT</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

    );
};

export default Developer;
