import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { HeroCooler } from "@/components/hero-cooler";

const services = [
  {
    title: "Contactless payment",
    copy: "Tap, swipe, or pay by phone. A secure, cashless way to grab fresh snacks, drinks, and meals any hour of the day.",
  },
  {
    title: "Product recognition",
    copy: "Smart systems keep inventory accurate so shelves stay stocked with what people actually reach for.",
  },
  {
    title: "Enhanced security",
    copy: "Access control and monitoring protect the cooler, the product, and your space — quietly, in the background.",
  },
  {
    title: "Flexible selection",
    copy: "Salads, wraps, snacks, and drinks tailored to your office, gym, warehouse, or apartment community.",
  },
];

const steps = [
  {
    n: "01",
    title: "Contact us",
    copy: "Call or send a note. We’ll schedule a free site evaluation at your location.",
  },
  {
    n: "02",
    title: "We set it up",
    copy: "We assess the space and recommend the right smart cooler or micro market — at no cost to you.",
  },
  {
    n: "03",
    title: "We keep it going",
    copy: "Stocking, monitoring, and maintenance stay on us. You get a polished amenity. That’s it.",
  },
];

const places = ["Offices", "Gyms", "Warehouses", "Apartment communities", "24/7 access", "Fresh meals", "No cost to host"];

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Header />

      <main id="main">
        <section className="relative overflow-hidden bg-night text-paper">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="glow-orb left-[10%] top-[20%] h-64 w-64 bg-blue/50" />
            <div className="glow-orb delay right-[15%] top-[40%] h-72 w-72 bg-mint/30" />
          </div>

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div>
              <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-mint">
                Richmond · Fredericksburg
              </p>
              <h1 className="reveal reveal-delay-1 mt-5 max-w-xl text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Micro market
                <span className="mt-2 block font-display italic text-mint">at your fingertips</span>
              </h1>
              <p className="reveal reveal-delay-2 mt-6 max-w-md text-base leading-7 text-white/70 sm:text-lg">
                Let’s bring a smart cooler to your business. Fully managed fresh food, snacks, and drinks — 24/7 — with
                zero cost or upkeep for the property.
              </p>
              <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-mint px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
                >
                  Schedule a free site visit
                </a>
                <a
                  href="tel:8045060288"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-paper transition hover:border-mint hover:text-mint"
                >
                  804-506-0288
                </a>
              </div>
            </div>
            <HeroCooler />
          </div>

          <div className="relative border-t border-white/10">
            <div className="overflow-hidden py-4">
              <div className="marquee-track flex w-max gap-10 pr-10 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                {[...places, ...places].map((item, i) => (
                  <span key={`${item}-${i}`} className="flex items-center gap-10">
                    {item}
                    <span className="h-1 w-1 rounded-full bg-mint" />
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden">
              <svg className="river-track block h-12 w-[200%] text-paper" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M0,24 C180,48 360,0 540,24 C720,48 900,0 1080,24 C1260,48 1440,0 1620,24 L1620,48 L0,48 Z"
                />
              </svg>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl scroll-mt-24 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue">About us</p>
            <h2 className="mt-3 font-display text-4xl italic leading-tight sm:text-5xl">
              Fresh food in the places people already are.
            </h2>
            <p className="mt-6 text-base leading-7 text-muted">
              River City MicroMarkets provides fully managed smart coolers and micro markets for offices, gyms,
              warehouses, and apartment communities. Employees, residents, and guests get convenient 24/7 access to
              fresh food, snacks, and beverages — without any cost or maintenance for the property.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              We handle installation, stocking, monitoring, and service so you can focus on running your business.
            </p>
            <div className="mt-8 rounded-3xl bg-mist p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">Our goal &amp; mission</p>
              <p className="mt-3 leading-7 text-ink">
                Proudly serving Richmond and Fredericksburg, we make workplaces and communities more convenient through
                fully managed smart coolers and micro markets.
              </p>
            </div>
          </div>
          <div className="relative aspect-[16/10] w-full self-start overflow-hidden rounded-[2rem] lg:sticky lg:top-24">
            <Image
              src="/photos/about-lounge.jpg"
              alt="People using a wood-paneled Smart Store micro market in a bright lounge"
              fill
              quality={90}
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </section>

        <section id="solutions" className="scroll-mt-24 bg-mist/70 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue">Our services</p>
              <h2 className="mt-3 text-4xl tracking-tight sm:text-5xl">
                Smart coolers and micro markets,{" "}
                <span className="font-display italic text-blue">handled for you.</span>
              </h2>
              <p className="mt-5 max-w-xl text-muted leading-7">
                A secure, cashless way for employees and guests to reach fresh snacks, drinks, and meals around the
                clock. We recommend the right fit after a free look at your space.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
                <div className="relative h-64">
                  <Image
                    src="/photos/fridge.webp"
                    alt="Glass-front smart cooler stocked with fresh meals and drinks"
                    fill
                    className="object-contain bg-night"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold">Smart coolers</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Sleek glass-front fridges with product recognition, tap-to-pay, and a mix of fresh meals, snacks,
                    and drinks chosen for your location.
                  </p>
                </div>
              </article>
              <article className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
                <div className="relative h-64">
                  <Image
                    src="/photos/gym.webp"
                    alt="Smart cooler installed in a modern gym"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold">Micro markets</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Open-shelf markets and larger smart-store setups when a single cooler isn’t enough — still fully
                    stocked and serviced by us.
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article key={service.title} className="rounded-[1.6rem] bg-mint/70 p-6">
                  <h3 className="font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/75">{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 h-56 overflow-hidden rounded-[1.8rem] sm:h-72">
              <Image
                src="/photos/office.webp"
                alt="Professional grabbing a drink from a smart cooler in an office lounge"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="relative h-44 overflow-hidden rounded-[1.8rem]">
              <Image
                src="/photos/checkout.webp"
                alt="Checkout screen on a smart cooler showing four easy steps"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <div className="relative h-44 overflow-hidden rounded-[1.8rem]">
              <Image
                src="/photos/fitness.webp"
                alt="Double-door smart fridge stocked with drinks, snacks, and wellness items"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue">Why choose us</p>
            <h2 className="mt-3 text-4xl tracking-tight sm:text-5xl">
              An amenity people use.{" "}
              <span className="font-display italic text-blue">A responsibility you don’t.</span>
            </h2>
            <p className="mt-5 leading-7 text-muted">
              Give staff or residents 24/7 access to fresh food and drinks without the cost of takeout or leaving the
              property. Smart coolers offer a wider selection, fresh meal options, and inventory tailored to your
              location.
            </p>
            <p className="mt-4 leading-7 text-muted">
              Best of all, there’s no cost to host. We handle stocking, monitoring, and maintenance — a hassle-free
              amenity your workplace or community will actually appreciate.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["24/7", "Always open"],
                ["$0", "Cost to host"],
                ["Full", "Service included"],
              ].map(([stat, label]) => (
                <div key={label} className="rounded-2xl bg-mist px-3 py-4 text-center">
                  <dt className="text-2xl font-semibold text-blue">{stat}</dt>
                  <dd className="mt-1 text-xs text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="how" className="scroll-mt-24 bg-night py-20 text-paper lg:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">How it works</p>
            <h2 className="mt-3 max-w-xl text-4xl tracking-tight sm:text-5xl">
              Schedule a free <span className="font-display italic text-mint">site evaluation</span>
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <article key={step.n} className="rounded-[1.8rem] border border-white/10 p-7">
                  <p className="font-display text-3xl italic text-mint">{step.n}</p>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue">Where we serve</p>
          <h2 className="mt-3 text-4xl tracking-tight">Two river cities. One simple amenity.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ["Richmond, Virginia", "Workplaces, gyms, warehouses, and apartment communities across the capital region."],
              ["Fredericksburg, Virginia", "The same fully managed smart coolers and micro markets, closer to home along the Rappahannock."],
            ].map(([city, copy]) => (
              <article key={city} className="rounded-[2rem] bg-mist p-8">
                <h3 className="text-2xl font-semibold">{city}</h3>
                <p className="mt-3 leading-7 text-muted">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-mint py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-deep">Contact us</p>
              <h2 className="mt-3 text-4xl tracking-tight text-ink sm:text-5xl">
                Let’s bring a smart cooler to your business.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-ink/75">
                Get in touch by phone or the form. We’ll assess your location and recommend the best smart cooler or
                micro market solution — at no cost.
              </p>
              <a href="tel:8045060288" className="mt-8 block font-display text-4xl italic text-ink sm:text-5xl">
                804-506-0288
              </a>
              <p className="mt-3 text-sm text-ink/70">Richmond · Fredericksburg</p>
              <a
                href="https://rivercitymicromarkets.com"
                className="mt-1 inline-block text-sm text-ink/70 underline-offset-4 hover:underline"
              >
                rivercitymicromarkets.com
              </a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-night px-5 py-10 text-sm text-white/55 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>River City MicroMarkets</p>
          <p>Smart coolers &amp; micro markets · Richmond &amp; Fredericksburg</p>
          <div className="flex flex-col gap-1 sm:items-end">
            <a href="https://rivercitymicromarkets.com" className="hover:text-mint">
              rivercitymicromarkets.com
            </a>
            <a href="tel:8045060288" className="hover:text-mint">
              804-506-0288
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
