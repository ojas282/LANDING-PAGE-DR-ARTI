import { Star } from 'lucide-react';

export function ReviewCard() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 translate-y-32 -translate-x-32"></div>

      <a
        href="https://www.google.com/maps/place/Dr+Arti+Hospital/@26.8335752,80.8804689,17z/data=!4m8!3m7!1s0x399bfe63ffa46249:0x2f8371296a0c3334!8m2!3d26.8335752!4d80.8830438!9m1!1b1!16s%2Fg%2F11d_vvlbhc?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl"
      >
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-300 fill-yellow-300" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Share Your Experience
          </h2>
          <p className="text-xl text-blue-50 mb-6 max-w-2xl">
            Your feedback matters! Help us improve and guide others in their healthcare journey.
            Every review makes a difference in our commitment to excellence.
          </p>
          <div className="inline-flex items-center gap-2 text-white font-medium bg-white/20 px-6 py-3 rounded-xl group-hover:bg-white/30 transition-colors">
            Write a Review
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
        </div>
      </a>
    </div>
  );
}