interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  isPrimary?: boolean;
}

export function ActionCard({ icon, title, description, link, isPrimary }: ActionCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
        isPrimary 
          ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-blue-200'
          : 'bg-white text-gray-800 shadow-gray-100'
      } shadow-xl hover:shadow-2xl`}
    >
      <div className="flex items-center gap-4 mb-4">
        <span className={`text-2xl ${isPrimary ? 'text-white' : 'text-blue-600'}`}>
          {icon}
        </span>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className={`${isPrimary ? 'text-blue-50' : 'text-gray-600'} mb-4`}>
        {description}
      </p>
      <div className={`inline-flex items-center gap-2 font-medium ${
        isPrimary ? 'text-white' : 'text-blue-600'
      }`}>
        Learn more
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
      </div>
    </a>
  );
}