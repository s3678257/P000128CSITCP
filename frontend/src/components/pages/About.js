export default function About() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left lg:w-1">
          <img
            src="../../img2.jpg"
            alt=""
            className="h-56 w-full object-cover lg:absolute lg:h-full"
          />
        </div>
      </div>

      <div className=" relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className=" text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-gray-600 font-semibold tracking-wide uppercase">
              Work with me
            </h2>
            <h3 className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              My Process
            </h3>
            <p className="mt-8 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              facilis libero aspernatur! Laudantium ipsa nesciunt doloribus
              porro, nisi quaerat, iste dignissimos vel doloremque deserunt
              veniam cum dolorum vitae aliquam non?{" "}
            </p>
            <div className="mt-5 prose prose-gray text-gray-500 gap-2 flex flex-col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur delectus vitae eius quos sint molestias, labore
                voluptates provident dolores, aliquid, ab impedit eum expedita!
                Distinctio, nostrum adipisci perferendis iusto sint impedit
                corrupti magnam commodi veniam aliquid, modi debitis odio
                molestias omnis deleniti harum eveniet unde?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur delectus esse at. Reprehenderit corporis doloremque
                animi iste libero tempora ad alias voluptatum recusandae impedit
                reiciendis, similique harum voluptatem, modi dicta?
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, nihil.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, nihil.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, nihil.
                </li>
              </ul>
              <h3 className="mt-2 text-md leading-5 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How I can help you
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora minus aliquam accusamus? Reiciendis aperiam fugiat illo
                possimus dolorum deserunt, cumque distinctio corrupti sed ullam
                reprehenderit eligendi aliquid id blanditiis ratione voluptatum
                soluta assumenda qui commodi dolorem nihil totam corporis natus.
                Nam ipsa minima consequuntur corrupti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
