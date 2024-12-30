import React from 'react';
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Heart,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';
import { SocialButton } from './components/SocialButton';
import { ContactButton } from './components/ContactButton';
import { ActionCard } from './components/ActionCard';
import { ContactInfo } from './components/ContactInfo';
import { ReviewCard } from './components/ReviewCard';

function App() {
  const socials = [
    {
      icon: <Instagram className="w-8 h-8" />,
      link: "https://www.instagram.com/drartihospital/",
      label: "Instagram",
      color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
      tagline: "Follow for daily health tips & updates"
    },
    {
      icon: <Facebook className="w-8 h-8" />,
      link: "https://www.facebook.com/share/1Bn4Hmp6XS/?mibextid=wwXIfr",
      label: "Facebook",
      color: "bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400",
      tagline: "Join our healthcare community"
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      link: "https://www.linkedin.com/in/arti-upadhyay-324076344/",
      label: "LinkedIn",
      color: "bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500",
      tagline: "Professional updates & articles"
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      link: "https://x.com/drartigynaec?s=21",
      label: "X (Twitter)",
      color: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700",
      tagline: "Latest healthcare news & insights"
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      link: "https://www.youtube.com/channel/UCE7g_lRQfy2nEBW9qCBxFfg",
      label: "YouTube",
      color: "bg-gradient-to-br from-red-600 via-red-500 to-red-400",
      tagline: "Watch health & wellness videos"
    }
  ];

  const contacts = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      link: "https://wa.me/+918795382902",
      label: "WhatsApp",
      color: "bg-gradient-to-br from-green-600 via-green-500 to-green-400",
      tagline: "Quick chat for appointments & queries"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      link: "mailto:drartihospital2023@gmail.com",
      label: "Email",
      color: "bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400",
      tagline: "For detailed inquiries & reports"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      link: "tel:+918795382902",
      label: "Phone",
      color: "bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-400",
      tagline: "Direct line for emergencies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transform rotate-6 rounded-2xl opacity-20"></div>
              <img
                src="/ARTI.jpg"
                alt="Dr. Arti"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Dr. Arti
              <span className="text-blue-600">.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              MBBS, MS
            </p>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Hey there! I’m Dr. Arti—gynecologist extraordinaire with 12+ years of experience and a specialist in high-risk pregnancies. Think of me as your wellness wingwoman, here to make sure you feel supported, safe, and totally empowered every step of the way. Let’s rock this journey together! 🌟
            </p>
          </div>
        </div>
      </div>

      {/* Contact Buttons Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {contacts.map((contact, index) => (
            <ContactButton key={index} {...contact} />
          ))}
        </div>
      </div>

      {/* Social Links Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {socials.map((social, index) => (
            <SocialButton key={index} {...social} />
          ))}
        </div>
      </div>

      {/* Review Section - Prominent */}
      <div className="container mx-auto px-4 py-16">
        <ReviewCard />
      </div>

      {/* Contact & Links Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ActionCard
              icon={<Heart className="w-8 h-8" />}
              title="Dr. Arti Hospital Website"
              description="Learn more about our facilities, services, and healthcare team."
              link="http://www.drartihospital.com"
            />
            <ContactInfo />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="font-medium">© {new Date().getFullYear()} Dr. Arti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;