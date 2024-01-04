// import { useState } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Contact",
  description: "Contact Description",
};

const ContactForm: React.FC = () => {
  // const [state, setState] = useState({
  //   name: "",
  //   surName: "",
  //   phone: "",
  //   email: "",
  //   address: "",
  //   message: "",
  // });

  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <form className="w-80">
        <div>
          <div className="mb-2 ">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="First Name"
              required
            />
          </div>

          <div className="mb-2">
            <input
              type="text"
              id="surname"
              name="surname"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="mb-2">
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Phone"
            required
          />
        </div>

        <div className="mb-2">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            id="address"
            name="address"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Full Address"
            required
          />
        </div>

        <div className="mb-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Message your order"
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            value="send"
            className="bg-blue-500 text-white p-1 rounded hover:bg-blue-700 w-24 transition duration-200"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
