import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";

const playpenSans = localFont({
  src: "./fonts/PlaypenSans-Regular.ttf",
  variable: "--font-Playpen_Sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <main className="bg-green-100">
        <section className="grid grid-cols-2 h-[50vh]">
          <div className="flex flex-col gap-4 justify-center items-center w-full">
            <p className={`text-2xl font-bold ${playpenSans.className}`} >The Best url shortener</p>
            <p className="px-11 text-center">We are the most straightforward URL Shortener in world. Others will ask for your details, but we understand your needs hence we have created this</p>

            <div className='flex gap-3'>
              <Link href="/shorten"> <button type="button" className="cursor-pointer text-white bg-gradient-to-r from-green-400 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try Now</button> </Link>

              <Link href="/github"> <button type="button" className="cursor-pointer text-white bg-gradient-to-r from-green-400 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">GitHub</button> </Link>
            </div>

          </div>
          <div className="relative">
            <Image className="mix-blend-darken" src={"/vector.jpg"} alt="image" fill={true} />
          </div>
        </section>
      </main>
    </>
  );
}
