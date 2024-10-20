
function ContactPage() {
  return (
    <div className=" flex items-center justify-center flex-col min-h-screen ">
      <div className=" bg-gray-300 p-10 rounded-lg">
        <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
          Get in touch:
        </h1>
        <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
          Fill in the form to start a conversation
        </p>

        <form className=" m-2 flex flex-col justify-center" action="https://api.web3forms.com/submit" method="POST">
          <div className="flex flex-col">
            <input type="hidden" name="access_key" value="682384dd-c7ca-4c54-bfb5-5dca98b81ebe" />
            <label title="name" className="hidden">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              required
              placeholder="Enter Your Name"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 placeholder:font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label title="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="abc@gmail.com"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 placeholder:font-semibold focus:border-orange-500 focus:outline-none"
            />
            <textarea

              name="message"
              id="message"
              rows={4}
              placeholder="Enter you message"
              required
              className="
              mt-2 border border-gray-400 bg-white
              rounded-lg placeholder:p-1 placeholder:font-semibold 
              focus:border-orange-500 focus:outline-none "
            >
            </textarea>
          </div>
          <button
            type="submit"
            className="md:w-32 bg-orange-600 hover:bg-blue-dark text-white font-bold py-3 px-5 rounded-lg mt-4 hover:bg-orange-700 transition-all hover:-translate-y-1  duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage