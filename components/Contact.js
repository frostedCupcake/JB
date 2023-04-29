import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white/70 h-fit md:h-[90vh] rounded-md shadow-2xl mx-auto lg:mx-[2rem] my-[2rem]  py-[2rem] px-[1rem] md:p-[2rem] w-[90%] lg:w-[60%] text-black  mb-[3rem]">
      <div className="">
        <h1 className="min-[300px]:text-[3rem] text-[4rem] md:text-[4.5rem] lg:text-[4.5rem]  xl:text-[5rem] my-2 lg:my-5 text-center md:text-left">
          Contact Me.
        </h1>
        <div className="text-black tracking-wider flex flex-col justify-center items-center md:items-start min-[300px]:leading-8 md:leading-8 xl:leading-10 gap-5">
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
                  type="text"
                  placeholder=""
                  class="input input-bordered w-full max-w-xs bg-white"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-black">last name*</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  class="input input-bordered w-full max-w-xs  bg-white"
                />
              </div>
            </div>
            <div className="flex flex-row  gap-2 md:gap-5">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-black">email*</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  class="input input-bordered w-full max-w-xs bg-white"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-black">subject*</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  class="input input-bordered w-full max-w-xs bg-white"
                />
              </div>
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text text-black">message*</span>
              </label>
              <textarea
                class="textarea textarea-bordered bg-white"
                placeholder=""
              />
            </div>
          </div>
          <button class="btn btn-outline tracking-widest text-[1.1rem] text-black ">
            Send.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
