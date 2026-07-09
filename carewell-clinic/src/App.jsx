import { motion } from "framer-motion";
import { useState } from "react";
import {
  Stethoscope,
  Users,
  Baby,
  Smile,
  FlaskConical,
  Syringe,
  Award,
  Wrench,
  HeartHandshake,
  Ambulance,
  Smile as SmileIcon,
  UserCheck,
  CalendarCheck,
  MapPin,
  Building2,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Menu,
  X,
  ChevronDown,
  Star,
  ArrowRight,
  ShieldCheck,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const PHONE = "+44 20 7946 1234";
const PHONE_TEL = "+442079461234";
const WHATSAPP = "447700900123";
const EMAIL = "hello@carewellclinic.co.uk";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#doctors", label: "Doctors" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Doctors />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

/* ---------- NAVBAR ---------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-primary shadow-soft">
            <HeartHandshake className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-extrabold text-navy">CareWell</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Medical Clinic
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-navy after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-sky after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-elegant hover:-translate-y-0.5 md:inline-flex"
          >
            Book Appointment
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-background lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Book Appointment
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-navy/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col justify-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-sky/30 bg-background/80 px-4 py-1.5 text-xs font-semibold text-navy shadow-soft backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4 text-sky" />
            GMC-Registered Doctors · London
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold leading-[1.05] text-navy sm:text-5xl lg:text-6xl"
          >
            Trusted Healthcare for{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-sky bg-clip-text text-transparent">
                You & Your Family
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            At CareWell Medical Clinic, we combine experienced clinicians, modern equipment and
            genuine warmth to deliver healthcare that puts you first — from routine checkups to
            family care.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-background px-6 py-3.5 text-sm font-semibold text-navy shadow-soft transition-all hover:bg-secondary"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-3 gap-4 border-t border-border/60 pt-8"
          >
            {[
              { k: "10+", v: "Years Experience" },
              { k: "5000+", v: "Patients Cared For" },
              { k: "24/7", v: "Support Available" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-extrabold text-navy sm:text-3xl">
                  {s.k}
                </div>
                <div className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-4 -z-10 rounded-[2rem] bg-gradient-sky opacity-30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
            <img
              src={heroDoctor}
              alt="Doctor at CareWell Medical Clinic"
              width={1200}
              height={1400}
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-background/95 p-4 shadow-elegant backdrop-blur sm:-left-6 sm:p-5"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-success/15">
              <HeartHandshake className="h-5 w-5 text-success" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy">Trusted Care</div>
              <div className="text-xs text-muted-foreground">98% patient satisfaction</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -top-4 -right-2 flex items-center gap-3 rounded-2xl border border-border bg-background/95 p-4 shadow-elegant backdrop-blur sm:-right-6"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky/15">
              <Star className="h-5 w-5 fill-sky text-sky" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy">4.9 / 5.0</div>
              <div className="text-xs text-muted-foreground">1,200+ reviews</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- SECTION HEADER ---------- */
function SectionHeader({ tag, title, desc }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className="mx-auto max-w-2xl text-center"
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full bg-sky-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy"
      >
        {tag}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {desc && (
        <motion.p variants={fadeUp} className="mt-4 text-base text-muted-foreground sm:text-lg">
          {desc}
        </motion.p>
      )}
    </motion.div>
  );
}

/* ---------- SERVICES ---------- */
const services = [
  { icon: Stethoscope, title: "General Checkup", desc: "Comprehensive health assessments to catch issues early and keep you at your best." },
  { icon: Users, title: "Family Medicine", desc: "Continuous care for every member of your household, from infants to grandparents." },
  { icon: Baby, title: "Pediatrics", desc: "Gentle, expert care for children — growth monitoring, illness, and wellness visits." },
  { icon: Smile, title: "Dental Care", desc: "Preventive and cosmetic dentistry in a calm, modern setting the whole family loves." },
  { icon: FlaskConical, title: "Laboratory Tests", desc: "On-site diagnostics with fast, accurate results and clear clinical guidance." },
  { icon: Syringe, title: "Vaccination", desc: "Routine and travel vaccinations for all ages, following the latest NHS guidelines." },
];

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Our Services"
          title="Complete care under one roof"
          desc="A full spectrum of medical services designed around your family's wellbeing."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:shadow-elegant"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky/10 transition-transform group-hover:scale-125" />
              <div className="relative">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-sky text-primary-foreground shadow-soft">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky transition-all group-hover:gap-3"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
const reasons = [
  { icon: Award, title: "Experienced Doctors", desc: "GMC-registered specialists with a decade+ of clinical experience." },
  { icon: Wrench, title: "Modern Equipment", desc: "The latest diagnostic and treatment technology, kept immaculately clean." },
  { icon: HeartHandshake, title: "Affordable Care", desc: "Transparent pricing and flexible plans — quality care shouldn't break the bank." },
  { icon: Ambulance, title: "Emergency Support", desc: "Same-day appointments and out-of-hours support when it matters most." },
  { icon: SmileIcon, title: "Friendly Staff", desc: "A welcoming team that listens, explains and treats you like family." },
  { icon: UserCheck, title: "Patient-Centered", desc: "Personalised care plans built around your goals, lifestyle and history." },
];

function WhyUs() {
  return (
    <section id="about" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Why Choose Us"
          title="A clinic built around your family"
          desc="Six reasons thousands of Londoners trust CareWell with their health."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-soft text-navy">
                <r.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-base font-bold text-navy">{r.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
const steps = [
  { icon: Stethoscope, title: "Choose Service", desc: "Pick from our full range of medical and dental services." },
  { icon: CalendarCheck, title: "Select Date", desc: "Book a time that fits your schedule — including evenings." },
  { icon: MapPin, title: "Visit Clinic", desc: "Come to our welcoming London clinic, or opt for a video call." },
  { icon: HeartHandshake, title: "Get Treatment", desc: "Receive expert, tailored care with clear next steps." },
];

function Process() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="How It Works"
          title="Book in four simple steps"
          desc="From first click to full treatment — we've made it effortless."
        />
        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-sky/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative text-center"
            >
              <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
                <s.icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full border-2 border-background bg-sky text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- DOCTORS ---------- */
const doctors = [
  { img: doctor1, name: "Dr. Amelia Carter", spec: "General Practitioner", exp: "12 years experience" },
  { img: doctor2, name: "Dr. James Whitfield", spec: "Family Medicine", exp: "15 years experience" },
  { img: doctor3, name: "Dr. Priya Sharma", spec: "Pediatrician", exp: "10 years experience" },
];

function Doctors() {
  return (
    <section id="doctors" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Meet the Team"
          title="Doctors who truly listen"
          desc="Meet a few of the specialists behind CareWell's award-winning care."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-2 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-sky-soft">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={800}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-navy">{d.name}</h3>
                <p className="mt-1 text-sm font-medium text-sky">{d.spec}</p>
                <p className="mt-3 text-sm text-muted-foreground">{d.exp}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const reviews = [
  {
    name: "Sarah Thompson",
    role: "Mother of two",
    text: "The pediatric team is wonderful with my kids. Warm, patient and never rushed — we finally feel truly cared for.",
  },
  {
    name: "David Okonkwo",
    role: "Long-term patient",
    text: "Booking is effortless, the doctors listen properly and the clinic itself is spotless. Genuinely a different standard.",
  },
  {
    name: "Elena Rossi",
    role: "New patient",
    text: "From the receptionist to the consultation, everyone made me feel at ease. I left with clarity and a real plan.",
  },
];

function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Testimonials"
          title="Loved by families across London"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <div className="flex gap-1 text-sky">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-sky" />
                ))}
              </div>
              <p className="mt-5 text-base leading-relaxed text-foreground/85">"{r.text}"</p>
              <footer className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-sky font-display font-bold text-primary-foreground">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  { q: "Do I need to register to book an appointment?", a: "No — you can book online as a new or returning patient. We'll collect your details securely during your first visit." },
  { q: "What are your opening hours?", a: "We're open Monday to Friday 8am–8pm and Saturday 9am–5pm. Our 24/7 phone line handles urgent enquiries at any time." },
  { q: "Do you offer same-day appointments?", a: "Yes. We hold same-day slots each morning for urgent needs — call us early to secure a time." },
  { q: "Are consultations covered by insurance?", a: "We work with all major UK private health insurers. Bring your policy details and we'll handle the paperwork." },
  { q: "Do you treat children?", a: "Absolutely. Our pediatric team cares for children from newborns to 16, with gentle, family-focused visits." },
  { q: "Where exactly is the clinic located?", a: "Central London, easily accessible by tube and bus. Full address and directions are on our contact section below." },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="FAQ"
          title="Questions, answered"
          desc="Everything you need to know before your visit."
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-navy">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-sky transition-transform ${active ? "rotate-180" : ""}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Contact"
          title="Book your appointment"
          desc="Reach us any way you like — we'll respond within one working hour."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE_TEL}` },
              { icon: MessageCircle, label: "WhatsApp", value: "+44 7700 900123", href: `https://wa.me/${WHATSAPP}` },
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Clock, label: "Business Hours", value: "Mon–Fri 8am–8pm · Sat 9am–5pm" },
              { icon: Building2, label: "Address", value: "London, United Kingdom" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href ?? undefined}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-soft text-navy">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-0.5 truncate text-sm font-medium text-navy">{c.value}</div>
                </div>
              </a>
            ))}

            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="CareWell Clinic location"
                src="https://www.google.com/maps?q=London&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="space-y-4 rounded-3xl border border-border bg-card p-8 shadow-elegant lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Jane Doe" required />
              <Field label="Phone" name="phone" placeholder="+44 ..." required />
            </div>
            <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Service
                </label>
                <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-sky focus:ring-2 focus:ring-sky/20">
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <Field label="Preferred Date" name="date" type="date" required />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us briefly what you'd like help with..."
                className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-sky focus:ring-2 focus:ring-sky/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 sm:w-auto"
            >
              {sent ? "Request received ✓" : "Request Appointment"}
              {!sent && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-sky focus:ring-2 focus:ring-sky/20"
      />
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary-foreground/10">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div className="font-display text-lg font-extrabold">CareWell</div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            Trusted healthcare for you & your family — modern medicine delivered with warmth in the
            heart of London.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-sky"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-primary-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            {services.map((s) => (
              <li key={s.title}>
                <a href="#services" className="transition-colors hover:text-primary-foreground">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" /> {PHONE}
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" /> +44 7700 900123
            </li>
            <li className="flex items-start gap-2 break-all">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" /> {EMAIL}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> London, United Kingdom
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} CareWell Medical Clinic. All rights reserved.</p>
          <p>Registered in England & Wales.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- FLOATING BUTTONS ---------- */
function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-elegant transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-40" />
        <MessageCircle className="relative h-6 w-6" />
      </motion.a>
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.15, type: "spring" }}
        href={`tel:${PHONE_TEL}`}
        aria-label="Call clinic"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  );
}

export default App;
