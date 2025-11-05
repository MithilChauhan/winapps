import { Link } from "@tanstack/react-router";
import { useLocation } from "@tanstack/react-router";

export default function Footer() {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  return (
    <>
      <a
        href="https://wa.me/917015796830"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-60 scale-80 animate-ping z-0" />
          {/* <span className="absolute inset-0 rounded-full bg-green-500 opacity-40 scale-125 animate-pulse z-0" /> */}

          <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform duration-300 z-10">
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
          </div>
        </div>
      </a>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-8 pb-4">
            {/* About */}
            <div className="space-y-4 md:w-2/5 lg:w-1/5">
              <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="bg-white p-1 rounded">
                  <img src="/logo.webp" alt="Logo" className="h-8" />
                </div>
                <span className="font-bold text-xl">Winapps</span>
              </Link>
              <p className="text-gray-400">
                Our moto is to "Materialize Concepts". Ideas are put into reality with a team of not only efficient dedicated persons but also of positive attitude professionals.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/pg/Winapps-PvtLtd-233477130147559/posts/" className="hover:text-[#1877F2] text-gray-400" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/winapps_software/" className="group inline-block" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 transition-all duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <defs> <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stopColor="#F58529" /> <stop offset="35%" stopColor="#DD2A7B" /> <stop offset="65%" stopColor="#8134AF" /> <stop offset="100%" stopColor="#515BD4" /> </linearGradient> </defs> <path className="fill-gray-400 group-hover:fill-[url(#instaGradient)] transition-all duration-300" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" /> </svg>
                </a>

                <a href="https://www.linkedin.com/company/winapps.co.in/posts/?feedView=all" className="hover:text-[#0A66C2] text-gray-400" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.396c0-2.006 1.806-2.006 1.806 0v8.396h4.98v-10.131c0-4.87-3.364-4.87-4.98-2.49v-3.379z" /> </svg>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:w-1/5">
              <ul className="space-y-2">
                {
                  pathname === "/" && (
                    <>
                      <li>
                        <h4 className="font-semibold text-lg mb-2">Sales Inquiries</h4>
                        <a href="mailto:sales@winapps.co.in" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                          sales@winapps.co.in
                        </a>
                      </li>
                      {/* <li>
                        <h4 className="font-semibold text-lg mt-5 mb-2">Sales Inquiries</h4>
                        <a
                          href="skype:winapps.support?chat"
                          className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                          contractor.winapps (Microsoft Teams)
                        </a>
                      </li> */}
                    </>
                  )
                }
                {pathname === '/training' && (
                  <>
                    <li>
                      <h4 className="font-semibold text-lg mb-2">Training Inquiries</h4>
                      <a href="mailto:training@winapps.co.in" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                        training@winapps.co.in
                      </a>
                    </li>

                    
                  </>
                )}
                <li>
                  <h4 className="font-semibold text-lg mt-5 mb-2">General Inquiries</h4>
                  <a href="mailto:info@winapps.co.in" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                    info@winapps.co.in
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="md:w-1/5">
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#technologies" className="text-gray-400 hover:text-white">Technologies</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 flex flex-col md:flex-row justify-between items-center pt-4 mt-4">
            <p className="text-gray-500 text-sm">&copy; Since 2013-2025 Winapps. All rights reserved</p>
          </div>
        </div>
      </footer >
    </>
  );
}
