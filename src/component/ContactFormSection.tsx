import SecondaryHeading from "./SecondaryHeading";

export default function ContactFormSection() {
  return (
    <div className="py-12 bg-white ">
      <div className="laptop:max-w-[1067px]  mx-auto h-[567px]">
        <SecondaryHeading
          secondaryHeading="Contact Us"
          text="If you have any further inquires, please let us know by filling the form below"
        />
        <form
          action=""
          className="max-w-[550px] h-[330px]  px-5 mx-auto flex  flex-col gap-4 "
        >
          <div className="flex gap-4 w-full  ">
            <div className="flex-1">
              <label
                className="block mb-1  font-medium font-inter text-[#24272E]"
                htmlFor="message"
              >
                First name
              </label>
              <input
                type="text"
                id="message"
                name="message"
                className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
              />
            </div>
            <div className="flex-1">
              <label
                className="block mb-1  font-medium font-inter text-[#24272E]"
                htmlFor="lastname"
              >
                last name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastName"
                className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
              />
            </div>
          </div>
          <div className="">
            <label
              className="block mb-1  font-medium font-inter text-[#24272E]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
            />
          </div>
          <div>
            <label
              className="block mb-1  font-medium font-inter text-[#24272E]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              cols={50}
              name="message"
              className="w-full border border-gray-300 p-8 rounded px-3 py-2 outline-none"
            />
          </div>
        </form>
      </div>
      <div className="w-full text-center">
        <button className="border-2 border-[#1D6FA3]  px-4 py-[10px] rounded hover:bg-slate-100    ">
          Submit
        </button>
      </div>
    </div>
  );
}
