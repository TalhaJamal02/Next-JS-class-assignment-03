import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl bg-gray-200">
      <aside className="relative overflow-hidden text-black rounded-lg mx-2 sm:mx-16 py-10 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 sm:py-24 pb-20 pt-10 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Hi, My name is <span className="font-bold text-orange-600">Talha Jamal</span>
              <span className="block sm:text-lg font-thin">Welcome To My Website</span>
            </h2>
            <Link
              href=""
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-gradient-to-tr from-orange-700 to-orange-400 rounded-lg hover:bg-transparent duration-500 backdrop:blur-xl"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full sm:h-auto sm:pt-1 sm:my-20">
          <img
            className="object-cover w-full h-full sm:h-auto rounded-lg"
            src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="image1"
          />
        </div>
      </aside>

      <h1 className="text-center text-xl text-black sm:text-3xl py-8 sm:py-10 font-medium">
        Every adventure begins with a single step into the unknown.
      </h1>
    </div>

  );
}

