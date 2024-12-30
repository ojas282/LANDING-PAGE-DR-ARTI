import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  link: string;
  color: string;
  tagline: string;
}

export function SocialButton({ icon, label, link, color, tagline }: SocialButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group w-full md:w-auto flex flex-col items-center gap-2 px-6 py-4 rounded-xl ${color} transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
    >
      <span className="text-white transition-transform group-hover:scale-110">
        {icon}
      </span>
      <span className="text-white font-medium text-center">{label}</span>
      <span className="text-blue-50 text-sm text-center opacity-80">{tagline}</span>
    </a>
  );
}