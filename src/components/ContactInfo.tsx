import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactItem {
  icon: React.ReactNode;
  text: string;
  link?: string;
}

export function ContactInfo() {
  const contactItems: ContactItem[] = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "drartihospital2023@gmail.com",
      link: "mailto:drartihospital2023@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+91-87953 82902, 0522-3545662",
      link: "tel:+91-87953 82902"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: (
        <a
          href="https://maps.app.goo.gl/KE8L7b5fsF26FaXy7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          C-193/5 Dr. Arti Hospital, Rajajipuram, Lucknow, 226017
        </a>
      )
    }
  ];

  return (
    <div className="p-8 rounded-2xl bg-white shadow-xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
      <div className="space-y-4">
        {contactItems.map((item, index) => (
          item.link ? (
            <a
              key={index}
              href={item.link}
              className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <span className="text-blue-600 group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="font-medium">{item.text}</span>
            </a>
          ) : (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-600"
            >
              <span className="text-blue-600">{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </div>
          )
        ))}
      </div>
    </div>
  );
}