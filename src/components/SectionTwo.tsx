import "../styles/output.css";
import OneOnOne from "../images/1on1.png";
import FreeStudy from "../images/freestudy.png";
import GroupClass from "../images/groupclass.png";

export default function SectionTwo() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
          Apa yang <a className="paraf2">Pusaka Bahasa</a> Tawarkan ?
        </h1>
        <div className="benefit mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className="grid place-items-center">
            <img src={FreeStudy} alt="" className="benefit-img w-60 h-60" />
            <h1 className="mt-5 font-semibold lg:text-2xl">Pembelajaran Gratis</h1>
            <p className="mt-2 px-2">Bertemu dan berbagi cerita dengan jutaan pelajar bahasa dari 38 provinsi di Indonesia.</p>
          </div>
          <div className="grid place-items-center">
            <img src={OneOnOne} alt="" className="benefit-img w-60 h-60" />
            <h1 className="mt-5 font-semibold lg:text-2xl">Belajar Private</h1>
            <p className="mt-2 px-2">Temukan pengajar dari berbagai daerah yang mengajarkan bahasa, dialek, dan budaya lokal mereka.</p>
          </div>
          <div className="grid place-items-center">
            <img src={GroupClass} alt="" className="benefit-img w-60 h-60" />
            <h1 className="mt-5 font-semibold lg:text-2xl">Grup Diskusi</h1>
            <p className="mt-2 px-2">Belajar bersama yang interaktif dan dipandu oleh pengajar berpengalaman dari berbagai daerah.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
