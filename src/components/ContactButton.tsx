import { LucideIcon } from 'lucide-react';

interface ContactButtonProps {
  icon: React.ReactNode;
  label: string;
  link: string;
  color: string;
  tagline: string;
}

export function ContactButton({ icon, label, link, color, tagline }: ContactButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group w-full flex items-center gap-4 px-6 py-4 rounded-xl ${color} transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl`}
    >
      <span className="text-white transition-transform group-hover:scale-110">
        {icon}
      </span>
      <div className="flex-1">
        <span className="block text-white font-medium">{label}</span>
        <span className="block text-blue-50 text-sm opacity-80">{tagline}</span>
      </div>
      <svg
        className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  );
}