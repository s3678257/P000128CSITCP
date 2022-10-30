import { CheckIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"
const pricing = {
  tiers: [
    {
      title: "Freelancer Introduction to Superconscious Teens ",
      price: 200,
      frequency: "4 weeks",
      description: "",
      features: [
        "30 min. live session every Monday to review goals for the week.",
        "Total of 24 recorded sessions. 12 one hour for moms & 12 thirty min. for teens",
        "Access to a private Facebook group for moms and teens",
      ],
      cta: "Join Now",
      mostPopular: false,
    },
    {
      title: "6 ",
      price: 600,
      frequency: "12 weeks",
      description: " ",
      features: [
        "30 min. live session every Monday to review goals for the week.",
        "Total of 24 recorded sessions. 12 one hour for moms & 12 thirty min. for teens",
        "Worksheets to guide you and your teen through the creation process.",
        "Recorded semi- personalized visualizations, meditations and transformation tools.",
        "Access to a private Facebook group for moms and teens",
      ],
      cta: "Join Now",
      mostPopular: true,
    },
    {
      title: "Full Package Edition ",
      price: 3000,
      frequency: "12 weeks",
      description: "",
      features: [
        "30 min. live session every Monday to review goals for the week.",
        "Total of 24 recorded sessions. 12 one hour for moms & 12 thirty min. for teens",
        "Worksheets to guide you and your teen through the creation process.",
        "Recorded FULLY personalized visualizations, meditations and transformation tools.",
        "Free VIP ticket to our international conference at the end of the year",
        "Access to a private Facebook group for moms and teens",
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
        We offer different kinds of course options
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

            <Link
              to="/courses"
              className={classNames(
                tier.mostPopular
                  ? "bg-gray-900 text-white hover:bg-gray-900"
                  : "bg-indigo-50 text-gray-900 hover:bg-indigo-100",
                "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
              )}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
