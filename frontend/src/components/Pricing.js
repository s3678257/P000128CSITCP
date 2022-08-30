
import { CheckIcon } from "@heroicons/react/outline"

const pricing = {
  tiers: [
    {
      title: "FreelancerIntroduction to Superconscious Teens ",
      price: 200,
      frequency: "",
      description: "Lorem ipsum ",
      features: [
        "Sagittis scelerisque nulla cursus",
        "Laoreet sem estphasellus eu proin massa",
        "scelerisque nulla cursus",
        "Mi a platea auctor mi.",
      ],
      cta: "Join Now",
      mostPopular: false,
    },
    {
      title: "Master the tools & skills to become ST&M ",
      price: 600,
      frequency: "",
      description: "Lorem ipsum ",
      features: [
        "Sagittis scelerisque nulla cursus",
        "Laoreet sem estphasellus eu proin massa",
        "scelerisque nulla cursus",
        "Mi a platea auctor mi.",
      ],
      cta: "Join Now",
      mostPopular: true,
    },
    {
      title: "Work one on one to loream ipsum edent ",
      price: 3000,
      frequency: "",
      description: "Lorem ipsum ",
      features: [
        "Sagittis scelerisque nulla cursus",
        "Laoreet sem estphasellus eu proin massa",
        "scelerisque nulla cursus",
        "Mi a platea auctor mi.",
      ],
      cta: "Join Now",
      mostPopular: false,
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8 flex justify-center flex-col items-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
        Let me help you
      </h2>
      <p className="mt-6 max-w-2xl text-xl text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe itaque eveniet sunt libero beatae architecto asperiores aperiam et placeat?
      </p>

      {/* Tiers */}
      <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {tier.title}
              </h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 py-1.5 px-4 bg-gray-900 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Most popular
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  ${tier.price}
                </span>
                <span className="ml-1 text-xl font-semibold">
                  {tier.frequency}
                </span>
              </p>
              <p className="mt-6 text-gray-500">{tier.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon
                      className="flex-shrink-0 w-6 h-6 text-gray-900"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className={classNames(
                tier.mostPopular
                  ? "bg-gray-900 text-white hover:bg-gray-900"
                  : "bg-indigo-50 text-gray-900 hover:bg-indigo-100",
                "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
