import React from 'react';

function Newsletter() {
  return (
    <div className="w-full bg-[#04aa6d] mb-20">
      <div className="w-[90%] max-w-[35rem] md:max-w-[45rem] mlg:max-w-[50rem] lg:max-w-[58rem] xl:max-w-[68rem] md:flex mx-auto py-16 text-white">
        <div className="w-full md:w-2/3 mb-4 md:mb-0 pe-0 md:pe-6">
          <h2 className="text-3xl font-semibold mb-3">
            Newsletter - Stay tune and get the latest update
          </h2>
          <p>Far far away, behind the word mountains</p>
        </div>

        <div className="w-full md:w-1/3 flex flex-col justify-center ps-0 md:ps-6">
          <form className="border-b border-white flex items-center justify-between py-3">
            <input
              id="email"
              name="email"
              autoComplete="none"
              type="email"
              placeholder="Enter email address"
              className="bg-[#04aa6d] w-full placeholder:text-white focus:outline-none"
            />
            <button type="submit">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
