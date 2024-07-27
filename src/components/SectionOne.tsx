import "../styles/output.css";

export default function SectionOne() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Siap untuk <a className="paraf2">petualangan</a> bahasa ?
        </h1>
        <p className="mb-8 mt-8 lg:text-md sm:text-sm font-medium text-gray-500 sm:px-16 lg:px-48 ">
          Setiap langkah membawa kamu lebih dekat pada pemahaman mendalam tentang warisan budaya kita. Pilih bahasa yang ingin kamu pelajari dan mulailah petualangan bahasa kamu sekarang !
        </p>
        <div className="container mx-auto p-4">
          <div className="slider">
            <div className="gap-3 slider-track" id="sliderTrack1">
              <div className="item1 semuaBahasa px-10 py-4">
                <p>Jawa</p>
              </div>
              <div className="item2 semuaBahasa px-10 py-4">
                <p>Aceh</p>
              </div>
              <div className="item3 semuaBahasa px-10 py-4">
                <p>Sunda</p>
              </div>
              <div className="item4 semuaBahasa px-10 py-4">
                <p>Madura</p>
              </div>
              <div className="item5 semuaBahasa px-10 py-4">
                <p>Bali</p>
              </div>
              <div className="item6 semuaBahasa px-10 py-4">
                <p>Melayu</p>
              </div>
              <div className="item7 semuaBahasa px-10 py-4">
                <p>Sentani</p>
              </div>
              <div className="item1 semuaBahasa px-10 py-4">
                <p>Awban</p>
              </div>
            </div>
          </div>
          <div className="slider mt-4">
            <div className="gap-3 slider-track-reverse" id="sliderTrack2">
              <div className="itemRight semuaBahasa px-10 py-4">
                <p>Jawa</p>
              </div>
              <div className="itemRight semuaBahasa px-10 py-4">
                <p>Aceh</p>
              </div>
              <div className="itemRight semuaBahasa px-10 py-4">
                <p>Sunda</p>
              </div>
              <div className="itemRight semuaBahasa px-10 py-4">
                <p>Madura</p>
              </div>
              <div className="itemRight semuaBahasa px-10 py-4">
                <p>Bali</p>
              </div>
              <div className="itemRight semuaBahasa px-10 py-4">
                <p>Melayu</p>
              </div>
              <div className="itemRight semuaBahasa px-10 py-4">
                <p>Sentani</p>
              </div>
              <div className="itemRight semuaBahasa px-10 py-4">
                <p>Awban</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
