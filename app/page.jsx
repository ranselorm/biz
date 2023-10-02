import Link from "next/link";
import Consult from "@/components/Consult";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main class="max-w-[1440px] w-full">
      <div className="relative h-[100vh] ">
        <img src="/web2.jpg" alt="banner" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black opacity-[80%]"></div>
        <div class="absolute inset-0 flex items-center justify-center flex-col">
          <button className="text-[12px] bg-white px-4 py-2 rounded-full flex items-center gap-x-3 text-black">
            <div className="w-[12px] h-[12px] bg-[#6CB4EE] rounded-full" />
            DIGITAL AGENCY
            <div className="w-[12px] h-[12px] bg-[#6CB4EE] rounded-full" />
          </button>
          <h2 className="lg:text-[60px] text-[40px] text-white leading-[70px] text-center my-8">
            <span className="text-[#6CB4EE] mr-4">Digital</span>Agency You
            <br className="hidden lg:flex" />
            Can Rely Upon
          </h2>
          <p class="text-white text-xl max-w-2xl text-center">
            At [Your Company Name], we are more than just a software company; we
            are a passionate team of innovators and problem-solvers.
          </p>
          <div className="flex items-center gap-x-8 mt-[50px] pb-[50px]">
            <Link
              href="#"
              className="text-[14px] bg-[#6CB4EE] px-8 py-3 rounded-full flex items-center gap-x-3 text-black font-semibold"
            >
              OUR WORKS
            </Link>
            <Link
              href="#"
              className="text-[14px] bg-white px-4 py-2 rounded-full flex items-center gap-x-3 text-black font-semibold"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
      <Services />
      <Consult />
    </main>
  );
}
