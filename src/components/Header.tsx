import "../styles/output.css";
import Daerah1 from "../images/pemandangan/daerah1.png";
import Daerah2 from "../images/pemandangan/daerah2.png";
import Daerah3 from "../images/pemandangan/daerah3.png";
import Daerah4 from "../images/pemandangan/daerah4.png";
import Daerah5 from "../images/pemandangan/daerah5.png";
import Daerah6 from "../images/pemandangan/daerah6.png";
import Daerah7 from "../images/pemandangan/daerah7.png";
import Daerah8 from "../images/pemandangan/daerah8.png";

export default function Header() {
  return (
    <section className=" headerNih">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 bungkus">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-white aight1">
            Jelajahi <a className="paraf">Keindahan</a> Bahasa Daerah
          </h1>
          <p className="mb-8 lg:text-md sm:text-sm font-medium text-gray-300">
            Pusaka Bahasa fokus pada kekayaan linguistik dan budaya Indonesia, PusakaBahasa menyediakan berbagai kursus dan materi untuk mempelajari bahasa-bahasa daerah, sambil menawarkan fitur-fitur yang mendukung keterlibatan aktif dan
            pengalaman belajar yang mendalam.
          </p>
          <div className="buttonSection flex flex-col-2 mb-4">
            <button type="button" className="text-black bg-hommy font-medium rounded-full lg:text-1xl sm:text-sm md:text-md px-6 py-2.5 text-center me-2 mb-2">
              Ayo Mulai !
            </button>
            <button type="button" className="py-2.5 px-6 me-2 mb-2 lg:text-1xl sm:text-sm md:text-md font-medium text-white rounded-full bg-sechomy">
              Lihat Sejarah
            </button>
          </div>
        </div>
        <div className="container mx-auto bento sm:hidden lg:block hidden">
          <div className="bento-grid">
            <div className="bento-grid-item row-span-2 col-span-2">
              <img src={Daerah1} alt="Daerah 1" />
            </div>
            <div className="bento-grid-item">
              <img src={Daerah2} alt="Daerah 2" />
            </div>
            <div className="bento-grid-item">
              <img src={Daerah3} alt="Daerah 3" />
            </div>
            <div className="bento-grid-item">
              <img src={Daerah4} alt="Daerah 4" />
            </div>
            <div className="bento-grid-item">
              <img src={Daerah5} alt="Daerah 5" />
            </div>
            <div className="bento-grid-item">
              <img src={Daerah6} alt="Daerah 6" />
            </div>
            <div className="bento-grid-item">
              <img src={Daerah7} alt="Daerah 7" />
            </div>
            <div className="bento-grid-item col-span-2">
              <img src={Daerah8} alt="Daerah 8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
