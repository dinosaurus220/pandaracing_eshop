import React, { useEffect } from "react";
import { PandaBg } from '../assets';
import '../styles/video.css'

function Error() {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="video-background">
      <video autoPlay muted loop className="video">
        <source src={PandaBg} type="video/mp4" />
        {/* Add additional source elements for different video formats */}
      </video>
      <div className="content flex items-center justify-center">
        <div className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-4xl font-semibold">404</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-5xl">
              Stránka nenalezena
            </h1>
            <p className="mt-6 text-4xl leading-7">
              Omlouváme se, ale nemohli jsme najít stránku, kterou hledáte.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-[#2cb97c] px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Zpět domů
              </a>
              <a href="#" className="text-4sm font-semibold">
                Kontaktovat podporu <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
