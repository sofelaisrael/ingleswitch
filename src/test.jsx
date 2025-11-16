import HeroGallery from "./HeroGallery";
import ReviewSection from "./ReviewSection";
import ModelStats from "./ModelStats";
import ContactCTA from "./ContactCTA";

function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <HeroGallery />
      <ModelStats />
      <ReviewSection />
      <ContactCTA />
    </div>
  );
}

export default Home;



import { Mail, Phone, Instagram } from "lucide-react";
import { Button } from "./ui/button";

interface ContactCTAProps {
  email?: string;
  phone?: string;
  instagram?: string;
}

export default function ContactCTA({
  email = "booking@model.com",
  phone = "+1 (555) 123-4567",
  instagram = "@modelportfolio"
}: ContactCTAProps) {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-5xl md:text-6xl mb-6">
          Let's Work Together
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Available for editorial, runway, and commercial bookings worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 font-semibold"
            onClick={() => window.location.href = `mailto:${email}`}
          >
            <Mail className="mr-2 h-5 w-5" />
            Book Now
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 font-semibold"
            onClick={() => window.location.href = `tel:${phone}`}
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Me
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400 border-t border-gray-800 pt-12">
          <a 
            href={`mailto:${email}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>{email}</span>
          </a>
          <span className="hidden sm:block">|</span>
          <a 
            href={`tel:${phone}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>{phone}</span>
          </a>
          <span className="hidden sm:block">|</span>
          <a 
            href={`https://instagram.com/${instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span>{instagram}</span>
          </a>
        </div>
      </div>
    </section>
  );
}



import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface HeroGalleryProps {
  images?: string[];
}

export default function HeroGallery({ 
  images = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1920&q=90",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1920&q=90",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1920&q=90",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1920&q=90",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1920&q=90"
  ]
}: HeroGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden group">
      {/* Image Slider */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Model shot ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}



import { Card, CardContent } from "./ui/card";
import { Ruler, Briefcase, Award } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface ModelStatsProps {
  stats?: Stat[];
}

export default function ModelStats({
  stats = [
    {
      icon: <Ruler className="w-6 h-6" />,
      label: "Measurements",
      value: "5'9\" | 34-24-35"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      label: "Experience",
      value: "8+ Years Professional"
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Specialties",
      value: "Editorial | Runway | Commercial"
    }
  ]
}: ModelStatsProps) {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white group hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 font-semibold">
                  {stat.label}
                </h3>
                <p className="text-xl font-serif text-black">
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}




import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface Review {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
}

interface ReviewSectionProps {
  reviews?: Review[];
}

export default function ReviewSection({
  reviews = [
    {
      id: 1,
      name: "Sarah Chen",
      company: "Vogue Magazine",
      text: "Absolutely stunning work. Professional, punctual, and brings incredible energy to every shoot.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      company: "Elite Fashion House",
      text: "A natural in front of the camera. Versatile and always delivers beyond expectations.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Thompson",
      company: "Luxe Beauty",
      text: "Outstanding professionalism and range. An absolute pleasure to work with on our campaign.",
      rating: 5
    },
    {
      id: 4,
      name: "David Park",
      company: "Metropolitan Studios",
      text: "Exceptional talent with an eye for detail. Consistently produces magazine-quality results.",
      rating: 5
    }
  ]
}: ReviewSectionProps) {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl text-center mb-4 text-black">
          Client Reviews
        </h2>
        <div className="w-24 h-1 bg-black mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <Card 
              key={review.id} 
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-black text-black"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-black text-lg">
                    {review.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {review.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}




      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max- mx-auto flex items-center justify-between px-20 max-md:px-10 max-sm:px-5 py-2">
          <img src={logo} className="w-20" alt="" />

          {/* Menu Items */}
          <ul className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
            <div
              onClick={() => scrollIntoView("about")}
              className="hover:text-[#0a8a43] cursor-pointer transition"
            >
              About Us
            </div>
            <div
              onClick={() => scrollIntoView("services")}
              className="hover:text-[#0a8a43] cursor-pointer transition"
            >
              Our Services
            </div>
            <div
              onClick={() => scrollIntoView("contact")}
              className="hover:text-[#0a8a43] cursor-pointer transition"
            >
              Contact Us
            </div>
          </ul>

          {/* Mobile menu icon */}
          <div className="md:hidden flex items-center">
            <div className="space-y-1 cursor-pointer">
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-white py-32 px-20 max-md:px-10 max-sm:px-5 bg-[url('./assets/acc.jpg')] bg-no-repeat bg-cover bg-center relative scroll-mt-20">
        <div className="mx-auto">
          {/* Title */}
          <h1 className="text-[80px] max-md:text-[48px] font-bold leading-[80px] max-md:leading-[48px]">
            Accurate<span className="text-[#0a8a43]"> Accounting</span>
            <br />
            for a <span className="text-[#0a8a43]">Stronger </span> Financial
            Future
          </h1>

          <p className="text-gray-600 text-[18px] max-md:text-[14px] max-w-2xl mt-6">
            We empower your business with precise accounting, expert tax
            guidance, and data-driven financial strategies that simplify
            decision-making, enhance cash flow, and drive sustainable growth.
            With our team by your side, your financial future becomes more
            organized, predictable, and optimized for success.
          </p>

          {/* CTA */}
          <button className="mt-8 px-8 py-3 bg-[#0a8a43] text-white font-semibold rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </section>

      <section
        id="about"
        className="bg-[#0a8a43] py-24 px-5 sm:px-10 md:px-20 relative z-10 scroll-mt-20"
      >
        <div className="w-40 h-60 absolute bg-black left-0 top-0 -z-10 max-md:hidden"></div>
        <div className="flex max-md:flex-col-reverse items-start gap-16 text-white">
          {/* Left side — Text content */}
          <div className="flex justify-center md:justify-end h-80 min-w-[250px] max-md:w-full max-md:h-100">
            <img
              src={about}
              alt="Accounting professionals at work"
              className="rounded shadow-lg object-cover w-full max-w-md"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold leading-tight mb-6">About Us</h2>

            <p className="leading-10 text-lg text-[40px]">
              We provide accurate, reliable, and transparent financial solutions
              that help businesses operate with confidence.
            </p>

            <p className="leading-relaxed text-sm mt-6">
              Whether you’re a startup or an established enterprise, we deliver
              tailored bookkeeping, tax advisory, and financial management
              services to help you make smarter decisions, optimize performance,
              and achieve long-term stability.
            </p>
          </div>

          {/* Right side — Optional Image */}
        </div>
      </section>

      <section
        id="services"
        className="bg-black py-24 text-white px-20 max-md:px-10 max-sm:px-5 relative scroll-mt-20"
      >
        <div className="title text-[#0a8a43] absolute top-10">Our Services</div>
        <div className="mx-auto">
          <h2 className="text-[48px] max-md:text-[32px] leading-[50px] max-md:leading-[30px] font-bold mb-12 w-2/3 max-md:w-full">
            Comprehensive Strategy Services for Every Stage of Growth
            {/* <br /> */}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Service Card */}
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition">
              <div className="text-[#0a8a43] text-xl font-semibold mb-4 flex justify-between items-center">
                <span>01</span>
                <div className="size-10 rounded-full bg-[#0a8a43] text-white border flex justify-center items-center">
                  <BsArrowRight className="-rotate-45" />
                </div>
              </div>
              <h2 className="text-[32px]">Strategy</h2>
              <p className="text-gray-300 text-sm">
                We design customized business acceleration strategies tailored
                to your company’s goals.
              </p>
            </div>

            {/* Service Card */}
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition">
              <div className="text-[#0a8a43] text-xl font-semibold mb-4 flex justify-between items-center">
                <span>02</span>
                <div className="size-10 rounded-full bg-[#0a8a43] text-white border flex justify-center items-center">
                  <BsArrowRight className="-rotate-45" />
                </div>
              </div>
              <h2 className="text-[32px]">Analysis & Insights</h2>
              <p className="text-gray-300 text-sm">
                We help uncover hidden opportunities through data-driven
                insights and market analysis.
              </p>
            </div>

            {/* Service Card */}
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition">
              <div className="text-[#0a8a43] text-xl font-semibold mb-4 flex justify-between items-center">
                <span>03</span>
                <div className="size-10 rounded-full bg-[#0a8a43] text-white border flex justify-center items-center">
                  <BsArrowRight className="-rotate-45" />
                </div>
              </div>
              <h2 className="text-[32px]">Digital Presence</h2>
              <p className="text-gray-300 text-sm">
                Modern solutions to enhance your brand visibility and customer
                engagement online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-5 sm:px-10 md:px-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-16 items-start">
          {/* LEFT SIDE - Stats Card */}
          <div className="bg-black text-white rounded-2xl  shadow-xl flex flex-col justify-end h-full col-span-2 max-md:col-span-5 overflow-hidden">
            <div className="px-10 pt-6 max-md:px-5">
              <h3 className="text-[40px] font-semibold mb-8 leading-[40px]">
                The Future of Accounting
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Transparent, data-driven, and future-ready solutions for
                  modern businesses.
                </p>

                <div className="w-16 h-10 rounded-full bg-[#0a8a43] text-white flex justify-center items-center">
                  <BsArrowRight className="-rotate-45" />
                </div>
              </div>
            </div>

            <div className="mt-16 bg-[#171717] p-10 max-md:p-5 w-2/3">
              <h1 className="text-6xl font-bold mb-2">98%</h1>
              <p className="text-gray-400 text-sm">Client Satisfaction Rate</p>
            </div>

            <div className="w-2/3 flex flex-col gap-1 space-x-3 bg-[#171717] p-10 max-md:p-5">
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="client"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/41.jpg"
                  alt="client"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/22.jpg"
                  alt="client"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Trusted by professionals worldwide
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Services Overview */}
          <div className="col-span-3 max-md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-md:mb-2 leading-tight">
              Strategic Services for <br /> Every Growth Stage
            </h2>

            <p className="text-gray-600 text-lg mb-10 max-md:mb-5">
              At Henry Young & Co, we combine financial insight with business strategy
              to deliver exceptional, measurable results.
            </p>

            {/* SERVICES LIST */}
            <div className="space-y-6 max-md:space-y-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Innovative Solutions
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  We use smart automation and modern accounting tools to deliver
                  accurate reports, reduce manual errors, and give you real-time
                  insights.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Our certified accountants and analysts provide deep expertise
                  across finance, tax, and compliance to guide your business
                  decisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Client-Centric Approach
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  We work hand-in-hand with clients, ensuring personalized
                  support and scalable strategies that adapt to your business
                  growth.
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            {/* <div className="mt-1">
              <a
                href="#"
                className="bg-[#0a8a43] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
              >
                Learn More
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stay Updated with <span className="text-[#0a8a43]">Henry Young & Co.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Subscribe to our newsletter to get insights on business growth, tax
            tips, and financial strategies from our experts — straight to your
            inbox.
          </p>

          {/* Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:flex-1 py-3 px-5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-[#0a8a43] hover:bg-black text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-green-600 text-lg font-medium mt-6 h-[50px]">
              Thanks for subscribing! You’ll hear from us soon.
            </p>
          )}
        </div>
      </section>

      <section
        id="contact"
        className="bg-white py-16 px-20 max-md:px-10 max-sm:px-5 relative z-10 flex justify-end items-end scroll-mt-20"
      >
        <div className="w-100 h-60 bg-black absolute top-0 left-0 -z-1"></div>
        <div className="grid md:grid-cols-2 gap-12 bg-[#f3f3f3] p-16 max-md:px-8 max-sm:px-4 z-10 relative rounded-xl ml-auto">
          {/* Left side content */}

          <div className="title text-[#0a8a43] absolute px-16 max-md:px-8 max-sm:px-4 top-5 font-bold left-0">
            Our Services
          </div>
          <div>
            <h2 className="text-[32px] w-1/2 max-md:w-full leading-[30px] font-semibold">
              <span className="text-[#0a8a43]">Get in Touch</span> with us
              <span className="text-[#0a8a43]"> Today!</span>
            </h2>
            <p className="text-gray-600 mt-4">
              Have questions or ready to start a project? Reach out to our team
              for personalized support.
            </p>

            <ul className="mt-8 space-y-4 text-gray-800">
              <li>
                <strong>Visit Us:</strong> 123 Business Ave, New York, NY 10001
              </li>
              <li>
                <strong>Call Us:</strong> +1 (800) 555-1023
              </li>
              <li>
                <strong>Email:</strong> contact@yourcompany.com
              </li>
            </ul>
          </div>

          {/* Right side form */}
          <form className="bg-[#f3f3f3]">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded border border-gray-300 mb-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded border border-gray-300 mb-4"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded border border-gray-300 mb-6 h-32"
            ></textarea>
            <button className="w-full py-3 bg-[#0a8a43] text-white font-semibold rounded hover:bg-black">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black text-gray-300 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Henry Young & Co<span className="text-[#0a8a43]">.</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Professional accounting, bookkeeping, and tax advisory services
              designed to give your business financial clarity and a strong
              foundation for growth.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-blue-500 cursor-pointer">About Us</li>
              <li className="hover:text-blue-500 cursor-pointer">Careers</li>
              <li className="hover:text-blue-500 cursor-pointer">Our Team</li>
              <li className="hover:text-blue-500 cursor-pointer">Blog</li>
              <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-blue-500 cursor-pointer">
                Bookkeeping & Records
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Tax Filing & Compliance
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Payroll Management
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Audit Support
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Business Advisory
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li>123 Business Drive, Victoria Island, Lagos, NG</li>
              <li>+234 700 123 4567</li>
              <li>info@Henry Young & Co..com</li>
            </ul>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-blue-500">
                <FiFacebook />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FiLinkedin />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FiInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Henry Young & Co. Accounting Services. All
          rights reserved.
        </div>
      </footer>

      <div
        onClick={() => scrollIntoView("home")}
        className={`size-12 text-[20px] rounded-full bg-[#0a8a43] text-white flex justify-center items-center fixed z-100 bottom-20 right-10 border cursor-pointer ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <BsArrowRight className="-rotate-90" />
      </div>













import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      content: "123 Business St, Suite 100\nNew York, NY 10001",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@accountingconsultants.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              Get in touch with our team of experts. We're here to help with all your accounting needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={errors.subject ? "border-red-500" : ""}
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-600 text-sm whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visit Our Office</h2>
          <div className="aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prefer to Talk Directly?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Give us a call and speak with one of our accounting professionals today
          </p>
          <a href="tel:5551234567">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8">
              Call (555) 123-4567
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}