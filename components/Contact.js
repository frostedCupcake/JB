import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white/70 h-[90vh] rounded-md shadow-2xl m-[2rem] p-[2rem] w-[60%]">
      <div className="">
        <h1 className="text-[5rem] mt-5">Contact Me.</h1>
        <div className="text-black tracking-wider flex flex-col justify-center items-start leading-10 gap-5">
          <p className="text-[1.5rem]">
            Feel free to contact me if you are intrested in my work or wnat to
            have some discussions with me.
          </p>

          <div className="form flex flex-col">
            <div className="flex flex-row  gap-5">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">first name*</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">last name*</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex flex-row  gap-5">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">email*</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">subject*</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">message*</span>
              </label>
              <textarea class="textarea textarea-bordered" placeholder="" />
            </div>
          </div>
          <button class="btn btn-outline tracking-widest text-[1.1rem] ">
            Send.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
