import "../styles/output.css";

export default function Header() {
  return (
    <section className="bg-white dark:bg-gray-900 headerNih">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white aight1">
            Jelajahi <a className="paraf">Keindahan</a> Bahasa Daerah
          </h1>
          <div className="grid grid-cols-3 space-y-4 sm:flex-row sm:space-y-0 gap-3">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base text-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Bahasa Jawa
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base text-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Bahasa Aceh
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base text-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Bahasa Sunda
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base text-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Bahasa Madura
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base text-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Bahasa Bali
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base text-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Bahasa Melayu
            </a>
            <a
              href="#"
              className="gap-2 inline-flex justify-center items-center py-3 px-5 text-base text-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 plus">
                <path
                  fill="#379777"
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                />
              </svg>
              Jelajahi
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
