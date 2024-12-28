import Image from 'next/image';

export default function ContactForm() {
  return (
    <div className="pt-[30px]">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Contact</h1>
            <p className="mt-2 text-gray-500">Home / Contact</p>
          </div>

          {/* Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info Section */}
            <div className="bg-gray-50 border-l-4 border-blue-600 p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <Image
                    src="/vector.png"
                    alt="Address Icon"
                    width={30}
                    height={30}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      236 5th SE Avenue, New York, NY10000, United States
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Image
                    src="/Vector (1).png"
                    alt="Phone Icon"
                    width={30}
                    height={30}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">Mobile: (+84) 546-9789</p>
                    <p className="text-gray-600">Hotline: (+84) 456-6789</p>
                  </div>
                </div>

                {/* Working Time */}
                <div className="flex items-start space-x-4">
                  <Image
                    src="/Vector (2).png"
                    alt="Clock Icon"
                    width={30}
                    height={30}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Working Time
                    </h3>
                    <p className="text-gray-600">Monday–Friday: 9:00–22:00</p>
                    <p className="text-gray-600">Saturday–Sunday: 9:00–21:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white border-t-4 border-yellow-500 p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Khalid Hussain"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="abc@gmail.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="This is optional"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Hi, I'd like to ask about..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
