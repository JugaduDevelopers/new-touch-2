import ResurfacingCard from "@/components/ResurfacingCard";
import Banner from "../components/Banner";
import Consultation from "@/components/consultation";
import React from "react";
import Gallery from "@/components/Gallery";
import Statistics from "@/components/Statistics";
import Blog from "@/components/Blog";
import Different from "@/components/Different";
import TestimonialContainer from "@/components/TestimonialContainer";
import Contact from "@/components/Contact";
import GetAQuote from "@/components/GetAQuote";
import First from "../../public/images/trial.jpg";
import Image from "next/image";
import Firstt from "../../public/images/B_A_G_1.png";
import Second from "../../public/images/B_A_G_2.png";
import Third from "../../public/images/B_A_G_3.png";
import Fourth from "../../public/images/B_A_G_4.png";
import Fifth from "../../public/images/B_A_G_5.png";
import Sixth from "../../public/images/B_A_G_6.png";
import last from "../../public/images/resultsimage.png";
import google from "../../public/images/google.png";
import justdial from "../../public/images/justdial.png";
import facebook from "../../public/images/facebook.png";
import HeadHair from "../../public/images/head_Hair.png";
import logo from "../../public/images/footer-logo.png";

type Props = {};

const a = [
  {
    id: 1,
    url: Firstt,
    name: "Acne Reduction Treatment",
  },
  {
    id: 2,
    url: Second,
    name: "Skin Glow Treatment",
  },
  {
    id: 3,
    url: Third,
    name: "Anti-Ageing Treatment",
  },
  {
    id: 4,
    url: Fourth,
    name: "Lip Filler Treatment",
  },
  {
    id: 5,
    url: Fifth,
    name: "Laser Hair Removal Treatment",
  },
  {
    id: 6,
    url: Sixth,
    name: "Tattoo Removal Treatment",
  },
];

const Home = (props: Props) => {
  return (
    <>
      <header className="bg-redX">
        <div className="container mx-auto max-md:px-5 py-3 md:px-28 ">
          <a href="https://newtouch.in/" target="_blank">
            <Image
              src={logo}
              height={100}
              width={100}
              alt="Logo"
              // className="max-md:hidden ml-10"
            />
          </a>
        </div>
      </header>
      <section className=" bg-[#D24648] px-5 pt-6 xl:pt-0 pb-5 lg:h-[500px] xl:h-[650px]">
        <div className="relative container mx-auto  bg-[#D24648]">
          <h1 className=" hidden xl:block  absolute top-0 left-[12%]  text-gradient text-[100px] min-[1100px]:text-[130px] min-[1200px]:text-[160px] min-[1295px]:text-[180px] leading-[120%] font-900 text-center">
            TREATMENT
          </h1>
          <div className="xl:absolute xl:top-36 xl:left-[15%] flex flex-col sm:flex-row items-center  justify-between">
            <div>
              
              <h1 className=" text-[50px] md xl:text-[65px] font-900 leading-[120%]">
                <span className="text-white"> Hair Transplant</span> <br /> in
                Ahmedabad
              </h1>
              <h5 className="text-[25px] text-white font-900 leading-[120%]">
                We do more Laser Hair Reduction than anyone else.
              </h5>
            </div>
            <div>
              <Image src={HeadHair} alt="girl" />
            </div>
          </div>
        </div>
      </section>
      <GetAQuote />
      <div className="max-sm:pt-3 pb-5">
        <div className="overflow-hidden">
          <hr className="h-px mb-4 bg-black border-0" />
          <h1 className="scrolling-text text-6xl text-[#FFD7D7]">
            30% Off Your Journey to Flawless Skin: Laser Resurfacing, Unveil
            Your Radiance!
          </h1>
          <hr className="h-px  bg-black border-0" />
        </div>
        <div className="min-[400px]:flex min-[400px]:justify-center min-[400px]:items-center sm:block ">
          <div className="hidden ">
            <Image
              src={First}
              alt="First"
              className="w-[200px] bg-peach border-2 rounded-t-full rounded-b-full p-1 border-[#212121]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col py-5 lg:pt-28 pb-5 container mx-auto lg:px-80 px-10">
        <h2 className=" text-2xl xl:text-3xl">
          Get Hair Naturally with World’s Finest Advanced Hair Transplant (AHT)
          Technique
        </h2>
        <p className="text-sm xl:text-lg  pt-3">
          <span className="text-redX">At New Touch Hair Transplant Clinic</span>
          , our objective is to bring you the latest and the most effective
          techniques in hair transplant ensuring the highest level of care and
          attention.
        </p>
        <p>
          As one of the best hair transplant center in Ahmedabad, Gujarat, we
          provide you with all the information about{" "}
          <span className="text-redX">advanced hair transplant (AHT)</span>{" "}
          which helps you understand the right hair fall treatment for you.
          This, in turn, allows you to make an informed choice based on your
          needs and goals.
        </p>
      </div>
      <section className="bg-redX my-10 p-20 lg:block hidden">
        <div className="flex flex-col items-center p-5">
          <p className="text-white">Desired procedure to begin</p>
          <h3 className="text-center text-white">Before After Gallery</h3>
        </div>
        <div className="bg-whiteX">
          <div className="flex flex-col items-center p-5">
            <h5 className="text-center text-black">Client Result</h5>
            <p className="text-black text-sm">100% Natural & Safe</p>
          </div>
          <Image src={last} alt={"lat"} className="aspect-video" />
        </div>
      </section>
      <div className="flex flex-col py-5 lg:pt-28 pb-5 container mx-auto lg:px-80 px-10">
        <p className="text-redX uppercase lg:text-lg xl:text-xl">
          HOW IT’S WORK{" "}
        </p>
        <h2 className=" text-2xl xl:text-3xl py-4">
          Why choose Hair Transplant at New Touch?
        </h2>
        <ul className="list-disc pl-10">
          <li>
            The Advanced Hair Transplantation technique guarantees 100% natural
            results each time{" "}
          </li>
          <li>
            At New Touch Hair Transplant Clinic, hair transplants are performed
            only by Experienced Master Surgeons
          </li>
          <li>
            {" "}
            At New Touch Hair Transplant Clinic, we guarantee 95% graft survival
            for dense hair and natural results Advance Hair Transplant (AHT)
            technique is a minimal-invasive procedure delivering the best
            outcomes without any cuts, scars, stitches, or pain{" "}
          </li>
          <li>
            {" "}
            Safety is our first priority. We utilise single use, disposable,
            high-precision instruments
          </li>
        </ul>
        <h2 className=" text-2xl xl:text-3xl py-4">
          Why choose Hair Transplant at New Touch?
        </h2>
        <ul className="list-disc pl-10">
          <li>
            Unique Diagnostic System for Hair Loss - Combination of tests like
            dermatological examination, psychological aspects, precise
            mathematical count of donor and recipient for diagnosis
          </li>
          <li>
            Extraction Phase - Extraction of hair follicles from the donor area
          </li>
          <li>
            Placement Phase - Transplantation of hair follicles into the
            affected area
          </li>
        </ul>
        <p className="mt-5  text-base">
          {" "}
          If you are considering a hair transplant to treat your hair loss, know
          more about the process along with the cost at New Touch Hair
          Transplant canter.
          <p className="text-base">
            {" "}
            Book a consultation online or call us on{" "}
            <span className="text-redX"> +91 97243 47400 </span> to avail
            special discount on consultation fees.
          </p>
        </p>
      </div>
      <TestimonialContainer />

      {/* Statistics */}
      <div className="flex flex-col items-center justify-center py-10">
        <h3 className="px-5">Why Hair Transplant at New Touch Hair Care?</h3>
        <div className="flex  items-center sm:justify-around justify-center px-5 container mx-auto pt-5 gap-5 flex-wrap">
          <div className="flex flex-col sm:items-start items-center ">
            <h3 className="text-redX">24+</h3>
            <p>In-House Doctors</p>
          </div>
          <span className="px-[1px] py-10 bg-line md:block hidden"></span>
          <div className="flex flex-col sm:items-start items-center ">
            <h3 className="text-redX">250+</h3>
            <p>Happy Clients</p>
          </div>
          <span className="px-[1px] py-10 bg-line md:block hidden"></span>
          <div className="flex flex-col sm:items-start items-center ">
            <h3 className="text-redX">5+</h3>
            <p>Medical Branches</p>
          </div>
          <span className="px-[1px] py-10 bg-line xl:block hidden"></span>
          <div className="flex flex-col sm:items-start items-center ">
            <h3 className="text-redX">135+</h3>
            <p>Success Therapies</p>
          </div>
        </div>
      </div>
      <div className="flex-col item-center justify-center mb-10">
        <h3 className="text-center mb-5">People really like us!</h3>
        <div className="flex-wrap   flex gap-10 mx-auto justify-center  items-center px-3">
          <div className="border-2 rounded-2xl p-5 h-40 w-80 border-redX">
            <Image src={google} alt={"google"} />
          </div>
          <div className="border-2 rounded-2xl p-5 h-40 w-80 border-redX">
            <Image src={facebook} alt={"facebook"} />
          </div>
          <div className="border-2 rounded-2xl p-5 w-80 h-40 border-redX">
            <Image src={justdial} alt={"justdial"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
