"use client";

export default function HistorySection() {
  return (
    <section className="flex flex-col lg:flex-row max-w-6xl mx-auto h-[200vh]">
      {/* Text column */}
      <div className="lg:w-1/2 space-y-32 px-4 py-20">
        <div className="min-h-[70vh]">
          <h2 className="text-xl font-semibold">Section 1</h2>
          <p className="text-lg mt-2">
            To understand this planetary respiration, scientists needed a place
            far from cities and forests—somewhere unaffected by daily human
            emissions. That place was Mauna Loa, a volcano in Hawaiʻi rising
            over 11,000 feet above sea level. Its isolated peak offered a
            pristine window into the atmosphere.
          </p>
        </div>
        <div className="min-h-[70vh]">
          <h2 className="text-xl font-semibold">Section 2</h2>
          <p className="text-lg mt-2">
            In 1958, a scientist named Charles David Keeling began collecting
            continuous CO₂ measurements there. His meticulous work would become
            one of the most iconic records in climate science..
          </p>
        </div>
        <div className="min-h-[70vh]">
          <h2 className="text-xl font-semibold">Section 3</h2>
          <p className="text-lg mt-2">Another paragraph with info...</p>
        </div>
      </div>

      {/* Sticky image column */}
      <div className="lg:w-1/2 px-4 py-20 relative">
        <div className="sticky top-20">
          <figure>
            <img
              src="/images/mauna_loa.jpg"
              alt="Sticky visual"
              className="w-full shadow-xl"
            />
            <figcaption className="text-xs md:text-sm text-center mt-2 font-thin">
              The volcano Mauna Loa from above. Source: NASA Earth Observatory
              {/* {" "}
                <a href="https://earthobservatory.nasa.gov/images/43182/mauna-loa-observatory" target="_blank">
                  NASA Earth Observatory
                </a> */}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
