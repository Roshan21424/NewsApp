import react,{Component} from 'react'

export default class Application extends Component{
    render(){
        return(

            <section className="bg-[#0a0a0a] py-12 ">
        <div className="container mx-auto px-6 bg-[#1b1b1b] rounded-[25px]">
          <h2 className="text-3xl font-bold text-center text-white mb-6 pt-10">
            Contact Us
          </h2>
          <p className="text-center text-white mb-3">
            Have any questions or need assistance? We'd love to hear from you!
          </p>
          <div className="max-w-4xl mx-auto ">
            <form className=" p-8 shadow-md rounded">
              <div className="mb-6">
                <label htmlFor="name" className="block font-medium mb-2">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name"className="w-full bg-[#1b1b1b] border-gray-300 border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block font-medium mb-2">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full bg-[#1b1b1b] border-gray-300 border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block font-medium mb-2">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Write your message here..." className="w-full bg-[#1b1b1b]  border-gray-300 border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit"className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
)
}
}