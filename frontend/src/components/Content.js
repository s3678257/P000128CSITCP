import img2 from '../img2.jpg'

import { CameraIcon } from "@heroicons/react/solid"

export default function Content() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-gray-900 font-semibold tracking-wide uppercase">
              Meet me
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Jennifer Pronga
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
             
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={img2}
                    alt="professional picture of Jennifer"
                    width={1184} 
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
              A MINDSET FOR TEENS
              that will create healthy habits,
              compassion, and sound relationships!
              A complete system for you and your teen to expand, explore and enjoy together.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
              lets talk about who this is really for....
              </p>
              <p className="mt-1">
              Do you agree with these?
              </p>
              <p className="mt-1">
              You are frustrated by the eye-rolling and taking back and you fear 
              that that once close relationship you had is gone forever.
              </p>
              
              <p className="mt-1">
              You wish you had better tools to support your teen through the
              difficulties that come with adolescent relationships.
              </p>
              
              <p className="mt-1">
              You are struggling with how to guide your teen through the
              gender fluidity converstation.
              </p>
              <p className="mt-1">
              You seem to just be keeping your head above water with work,
              household chores, quality family time, and who has time for self-care?
              </p>
              <p className="mt-1">
              You fear that the unhappiness, and anxiety that your teen is
              experiencing now will turn into something much worse.
              </p>
              <h4 className="mt-2">
              What do these checks tell us?
              </h4>

              <p className="mt-1">
              You know that your teens mindset
              is affecting them.</p>
              <p>
              You feel like you have already tried
              everything.</p>

              <p className="mt-1">
              You worry that if your teen does not
              start to have more self-compassion &
              confidence then they will create
              unhealthy patterns and beliefs.</p>

              <p className="mt-1">
              You need a system to guide yourself
              and your teen to connect on a deep
              level and enjoy these remaining
              years at home.</p>

              <p className='mt-3'>You need to subscribe to our courses now! ! !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
