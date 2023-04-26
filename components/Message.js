import React from 'react';
import { useState } from 'react';
import Head from 'next/head';

import { sendContactForm } from '../lib/api';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Message = () => {
  const initValues = {
    fname: '',
    lname: '',
    email: '',
    subject: '',
    message: '',
  };

  const initState = { isLoading: false, error: '', values: initValues };
  const [data, setData] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading, error } = data;

  // handlers

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setData((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setData(initState);
      toast('Message sent successfully!');
    } catch (error) {
      setData((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="bg-white/70 h-fit md:h-[90vh] rounded-md shadow-2xl mx-auto lg:mx-[2rem] my-[2rem]  py-[2rem] px-[1rem] md:p-[2rem] w-[90%] lg:w-[60%] text-black  mb-[3rem]">
      <div className="">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <h1 className="min-[300px]:text-[3rem] text-[4rem] md:text-[4.5rem] lg:text-[4.5rem]  xl:text-[5rem] my-2 lg:my-5 text-center md:text-left">
          Contact Me.
        </h1>
        <div className="text-black tracking-wider flex flex-col justify-center items-center md:items-start min-[300px]:leading-8 md:leading-10 xl:leading-10 gap-5">
          <p className="min-[300px]:text-[1.1rem] text-[1.2rem] md:text-[1.4rem] lg:text-[1.4rem] xl:text-[1.5rem]">
            Feel free to contact me if you are intrested in my work or want to
            have some discussions with me.
          </p>

          <div className="form flex flex-col">
            <div className="flex flex-row  gap-2 md:gap-5">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-black">first name*</span>
                </label>
                <input
                  value={values.fname}
                  onChange={handleChange}
                  onBlur={onBlur}
                  type="text"
                  name="fname"
                  placeholder=""
                  class="input input-bordered w-full max-w-xs bg-white"
                />
                {touched.fname && !values.fname && (
                  <span className="label-text-alt mt-1">Required</span>
                )}
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-black">last name*</span>
                </label>
                <input
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={onBlur}
                  type="text"
                  name="lname"
                  placeholder=""
                  class="input input-bordered w-full max-w-xs  bg-white"
                />
                {touched.lname && !values.lname && (
                  <span className="label-text-alt mt-1">Required</span>
                )}
              </div>
            </div>
            <div className="flex flex-row  gap-2 md:gap-5">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-black">email*</span>
                </label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={onBlur}
                  type="email"
                  name="email"
                  placeholder=""
                  class="input input-bordered w-full max-w-xs bg-white"
                />
                {touched.email && !values.email && (
                  <span className="label-text-alt mt-1">Required</span>
                )}
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-black">subject*</span>
                </label>

                <input
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={onBlur}
                  type="text"
                  name="subject"
                  placeholder=""
                  class="input input-bordered w-full max-w-xs bg-white"
                />
                {touched.subject && !values.subject && (
                  <span className="label-text-alt mt-1">Required</span>
                )}
              </div>
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text text-black">message*</span>
              </label>
              <textarea
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
                name="message"
                type="text"
                class="textarea textarea-bordered bg-white"
                placeholder=""
              />
              {touched.message && !values.message && (
                <span className="label-text-alt mt-1">Required</span>
              )}
            </div>
          </div>
          <button
            disabled={
              !values.fname ||
              !values.lname ||
              !values.subject ||
              !values.message ||
              !values.email
            }
            onClick={() => onSubmit()}
            class={`btn btn-outline ${
              isLoading ? 'loading' : ''
            } tracking-widest text-[1.1rem] text-black disabled:text-black/50 disabled:bg-black/10`}
          >
            Send.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
