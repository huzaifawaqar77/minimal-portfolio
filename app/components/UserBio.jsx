// Desc: User bio component
import Image from "next/image";

// images
import profilePic from "../../public/pfp.jpg";

// icons
import { FiStopCircle } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiFeather } from "react-icons/fi";
import { FiArchive } from "react-icons/fi";

export default function UserBio() {
  return (
    <section className="h-full w-1/3 user-bio-section">
      <div className="flex justify-between">
        <span className="rounded-full relative">
          <Image
            src={profilePic}
            alt="profile picture"
            width={150}
            height={150}
            className="rounded-full overflow-hidden"
          />
          <span className="absolute bottom-0 right-0 bg-green-700 w-3 h-3 rounded-full"></span>
        </span>
        <div className="flex gap-2">
          <FiHome />
          <FiStopCircle />
        </div>
      </div>
      <h3 className="text-2xl my-2">Huzaifa Waqar</h3>
      <p className="text-slate-300 my-2 flex items-center gap-1">
        <FiMail />
        <small>huzaifawaqar77@gmail.com</small>
      </p>
      <p className="text-slate-300 my-2 flex items-center gap-1">
        <FiPhone />
        <small>+92 3139779027</small>
      </p>
      <div className="skills my-6">
        <ul>
          <li>ReactJs</li>
          <li>NextJs</li>
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>Supabase</li>
          <li>Firebase</li>
        </ul>
      </div>
      <form className="h-10 w-full rounded-md bg-gray-800 text-slate-300 flex items-center justify-between">
        <input
          type="email"
          placeholder="yourname@email.com"
          className=" focus:outline-none p-2 rounded-md bg-gray-800 text-slate-300"
        />
        <button className="px-4 py-1 bg-gray-400 text-slate-950 font-semibold rounded-md">
          Subscribe
        </button>
      </form>
      {/* Bio Section */}
      <h3 className="text-xl font-bold my-4">Bio</h3>
      <p className=" text-slate-300 ">
        I am a MERN Stack developer with expertise in ReactJs, NextJs, MongoDB,
        Supabase, Firebase, Tailwind CSS, NodeJS, ExpressJS
      </p>
      {/* Experience Section */}
      <div className="flex items-center justify-between my-4 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <FiFeather /> <small>3+ Years of Experience</small>
        </div>
        <div className="flex items-center gap-2">
          <FiArchive /> <small>10+ Projects</small>
        </div>
      </div>
      {/* Projects Section */}
      <div>
        <h3 className="text-xl font-bold my-3">Projects</h3>
        <ul className="text-slate-300">
          <li>NextJs Portfolio</li>
          <li>NextJs Full Stack Ticket Management</li>
          <li>ReactJs Full Stack Project Management</li>
          <li>ReactJs Tailswind Nike showcase</li>
          <li>ReactJs Expense Tracker</li>
          <li>MERN Stack Booking App</li>
        </ul>
      </div>
    </section>
  );
}
