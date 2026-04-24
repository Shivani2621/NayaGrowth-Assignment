import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const features = [
  {
    title: "Easy to use",
    desc: "Built for users without technical expertise.",
    icon: "🤝",
  },
  {
    title: "Temperature control",
    desc: "Helps maintain stable incubation conditions.",
    icon: "🌡️",
  },
  {
    title: "Humidity control",
    desc: "Supports the right environment for hatching.",
    icon: "💧",
  },
  {
    title: "Automatic egg turning",
    desc: "Reduces manual work during the incubation cycle.",
    icon: "🥚",
  },
  {
    title: "Affordable setup",
    desc: "Positioned around ₹10,000 for small farmers.",
    icon: "₹",
  },
  {
    title: "Farmer-friendly design",
    desc: "Simple layout and clear monitoring support.",
    icon: "🌾",
  },
];

const benefits = [
  {
    title: "More control",
    desc: "Keep hatching cycles closer to farm needs.",
    icon: "🎛️",
  },
  {
    title: "Less dependence",
    desc: "Reduce reliance on external hatcheries.",
    icon: "🔗",
  },
  {
    title: "Cost efficiency",
    desc: "Lower ongoing hatchery-related spending.",
    icon: "💰",
  },
  {
    title: "Simper operations",
    desc: "Make incubation easier to manage daily.",
    icon: "⚙️",
  },
  {
    title: "More confidence",
    desc: "Help farmers feel in control of the process.",
    icon: "✅",
  },
  {
    title: "Income potential",
    desc: "Support long-term self-reliance and growth.",
    icon: "📈",
  },
];

const audience = [
  "Small poultry farmers",
  "Poultry farm owners",
  "Agri-entrepreneurs",
  "Rural youth exploring income opportunities",
  "Early-stage agricultural technology adopters",
];

function HeroVisual() {
  return (
    <div className="relative">
      <div className="rounded-3xl bg-linear-to-br from-green-700 to-emerald-900 p-8 text-white shadow-2xl ring-1 ring-black/10">
        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-green-100">Smart Incubator System</span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs">Grounded agri-tech</span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-green-100">Temperature</p>
              <p className="mt-2 text-2xl font-semibold">Controlled</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-green-100">Humidity</p>
              <p className="mt-2 text-2xl font-semibold">Managed</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-green-100">Egg turning</p>
              <p className="mt-2 text-2xl font-semibold">Automatic</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-green-100">Use</p>
              <p className="mt-2 text-2xl font-semibold">Simple</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-green-100">Affordable setup</span>
              <span className="text-sm font-semibold">~ ₹10,000</span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-white/15">
              <div className="h-2 w-2/3 rounded-full bg-white" />
            </div>
          </div>

          <p className="mt-6 text-sm leading-6 text-green-50">
            Designed for small farms that want practical control over hatching without depending only on commercial hatcheries.
          </p>
        </div>
      </div>
    </div>
  );
}

function IconCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#f7f6f1] text-slate-900 scroll-smooth">
      <Nav />

      <main id="home">
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-900">
              Helping farmers hatch their own future
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Affordable smart incubation for small poultry farmers
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Sere Innovations helps farmers hatch chicks on their own farm with a simple, reliable incubator system built for practical use.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-green-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-800"
              >
                Request a demo
              </a>
              <a
                href="#solution"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-400"
              >
                See how it works
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <p className="text-sm text-slate-500">Price</p>
                <p className="mt-1 text-lg font-semibold">~ ₹10,000</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <p className="text-sm text-slate-500">Control</p>
                <p className="mt-1 text-lg font-semibold">Temp + Humidity</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <p className="text-sm text-slate-500">Use</p>
                <p className="mt-1 text-lg font-semibold">Farmer friendly</p>
              </div>
            </div>
          </div>

          <HeroVisual />
        </section>

        <section id="problem" className="border-t border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-green-700">The problem</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Small poultry farmers often depend on outside hatcheries
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                That dependence adds cost, creates delays, reduces control over the hatching cycle, and makes farm operations less self-reliant.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Higher cost for chicks",
                "Less control over timing",
                "Operational delays at farm level",
                "Dependence on outside hatcheries",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-base font-medium text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="bg-[#f7f6f1]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-green-700">The solution</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                A smart incubator built for practical farm use
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Sere Innovations gives farmers an easy way to hatch eggs on-site with temperature, humidity, and turning support in one simple system.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The goal is not complexity. The goal is to help farmers work independently with a tool they can understand and trust.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Affordable setup",
                "Easy day-to-day use",
                "Local hatching control",
                "Less dependence on hatcheries",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <p className="text-lg font-medium text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">Features</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything is designed to stay simple
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {features.map((item) => (
                <IconCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f6f1]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">Benefits</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              More control, more confidence, less waste
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((item) => (
                <IconCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/5 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-green-700">Trust and credibility</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built from real farmer needs
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The page should feel honest and grounded. It should explain the product in plain language, avoid hype, and show that the system is meant for practical field use.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
              <ul className="space-y-4 text-slate-700">
                <li>• Clear communication, not technical jargon</li>
                <li>• Practical design for rural and semi-urban users</li>
                <li>• Early trust-building without fake claims</li>
                <li>• Focus on usefulness and self-reliance</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="audience" className="bg-[#f7f6f1]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">Who it is for</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Made for people who need practical results
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              {audience.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-black/5 bg-green-700">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-green-700">Talk to our team</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Request a demo or product introduction
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                If you are interested in the incubator system, this is the right next step. Keep it simple, clear, and easy for the user to act on.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:hello@sereinnovations.com"
                  className="inline-flex items-center justify-center rounded-full bg-green-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-800"
                >
                  Enquire now
                </a>
                <a
                  href="tel:+910000000000"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-400"
                >
                  Call us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
