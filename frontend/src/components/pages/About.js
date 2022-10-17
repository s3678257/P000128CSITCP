import img1 from '../../img1.jpg'

export default function About() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className=" text-center text-5xl">ABOUT ME</h1>
        </div>
      </div>
      <div className="lg:absolute lg:inset-0 mt-20">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2  mt-16 ml-10 ">
          <img
            className="h-auto w-full object-cover lg:absolute lg:h-screen rounded-md"
            src={img1}
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 ml-10">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-gray-600 font-semibold tracking-wide uppercase">
            Superconscious Coach
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Jennifer Pronga
            </h3>
            <p className="mt-8 text-lg text-gray-500">
            Overcome limiting beliefs
            Understanding the human mind and why we all have limiting beliefs. You will gain tools
            that will keep your teen focused on creating beliefs that serve them throughout their lives
            </p>
            <div className="mt-5 prose prose-indigo text-gray-500 flex flex-col gap-4">
              <p>
              Create daily habits to set an optimal mindset
              You will receive 12 semi-personalized (short) meditations and/ or other tools that are simple
              and will keep you and your teens focused on the positive.
              </p>
              <p>
              Build Resilience.
              Let us face it, it is painful to watch your child go through an extremely difficult time but it is
              these times that build resilience. We will discuss how failure is a shared human
              experience and that failure is a steppingstone to success.
              </p>
              <p>
              Your teen becomes a leader.
              When your teen turns their focus on what they are capable of then they gain the selfconfidence
              to lead.
              </p>
              
              <p>
              Use the power of your Superconscious Mind
              Connect to your higher self to create a transformational change that will shift your lives
              quicker than anything you have done in the past.
              </p>
              <h3>How we’re different</h3>
              
              <p>
              Tap into the power of neuroplasticity,
              epigenetics, NLP and hermetic principles
              to connect to the superconscious and
              release anything that may be holding you
              or your teen back. Create a plan which you & your teen will
              apply to a daily meditation that will guide
              you to create what you desire. Gain tools that will keep your teen
              focused on their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
