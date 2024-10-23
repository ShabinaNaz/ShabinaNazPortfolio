'use client'


import React  from "react";
import Typewriter from 'typewriter-effect';
import { SiVisualstudiocode } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { DiHtml5 } from "react-icons/di";
import { FaGithubSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

  export default function Home (){
  return(
    <div>
      <title>shabina naz Portfolio!</title>
      <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img
      src=""
      alt=""
      />
      <span className="ml-3 text-xl">Shabina Naz</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-green-500">Home</a>
      <a className="mr-5 hover:text-yellow-500">About</a>
      <a className="mr-5 hover:text-blue-500">Contact</a>
      <a className="mr-5 hover:text-red-500">Privacypolicy</a>
    </nav>
    <a href="https://www.linkedin.com/feed/">
    <button className="inline-flex items-center bg-black-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-sky-500 mt-4 md:mt-0">Visi My LinkDin</button>
    </a>
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    
  
  </div>
</header>

<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-1 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/id/1443546208/photo/girl-examining-computer-codes-on-laptop.jpg?s=612x612&w=0&k=20&c=Ty6KZtLiz6Rb3zCT0iOEkkmPvHESSpy_WhmWpccMjK0="/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-green-500"><Typewriter
  options={{
    strings: ['Hello Everyone.I Am Shabina Naz:'],
    autoStart: true,
    loop: true,
  }}
/></h1>
      <p className="mb-8 leading-relaxed">Welcome To My Portfolio Page! I Am A Student Of Generative AI In GIAIC.Currently I Have Done My Graduation.
      </p>
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          <label htmlFor="hero-field" className="leading-7 text-bold text-red-400">NewsLetter</label>
          <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <a href="https://github.com/ShabinaNaz">
        <button className="inline-flex text-yellow-500 bg-green-100 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">GithHub</button>
        </a>



        
      </div>
      
      <div className="flex lg:flex-row md:flex-col text-gray-300">
        
      </div>
    </div>
  </div>
</section>

<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3Ci3EimrjEazKOxoLWx-JyJhtn2wCqTWmw&s" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">Project 1</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">Count Down Timer</h1>
            <p className="leading-relaxed mb-3">Description: A simple calculator app that perfomance. perfect for learning the basic of javaScript function and user interface</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Read More
                
              </a>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgE5aEtwf3I1rJMslSr0PMiPaINLGIWEH3Tw&s" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">Project 2</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">Facebook Clone page</h1>
            <p className="leading-relaxed mb-3">Description: A simplulation on a Facebook page app perfect for learning that basic of JavaScript function and user interface.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Rearn More
                
              </a>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462539078_1331867281312317_3385730002990619718_n.jpg?stp=dst-jpg_p228x119&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=y5BYAkVXQoIQ7kNvgGcdyRg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=AIOjYJbxarOolW8W68kRWvV&oh=03_Q7cD1QGQBJlnDTFD0xPotjboWhazCoB8wrIda1lkpysOtcURsA&oe=67387A7E" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">Projec 3</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">IT Card Project</h1>
            <p className="leading-relaxed mb-3">My 3rd Project Generate Id Card IT initiative program.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Rearn More
              
              </a>
              
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-green-500 mb-4">Project Features&Command</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Explore the essential features of each TypeScript Project and easily run them
      using the npx commands provided below..</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-sky-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start:facebook</span>
        </div>
      </div>
      
      
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start:Id crad</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start:cont Down Timer</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">Todo lIst</span>
        </div>
      </div>
    </div>
    
    <a href="https://www.linkedin.com/feed/">
    <button className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Vist My LinkDin

    </button>
    </a>
  </div>
</section>

<section className="text-sky-500 body-font bg-gray-900">
<div className="container px-5 py-24 mx-auto flex flex-wrap flex-justify-center items-center space-x-6 text-2xl">
<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-sky-500"><Typewriter
  options={{
    strings: ['Programing language'],
    autoStart: true,
    loop: true,
  }}
/></h1>


<div className="flex flex-col items-center bg-white border-red-400 p-4 transition-transform duration-300 ease-in-out transform  hover:scale-110">
<SiVisualstudiocode  className=" text-sky-500 text-6xl"/>
<span className="mt-2 text-lg text-green ">Visual Studi Code</span>
</div>

<div className="flex flex-col items-center bg-white border-red-400 p-4 transition-transform duration-300 ease-in-out transform  hover:scale-110">
<IoLogoJavascript className=" text-orange-500 text-6xl"/>
<span className="mt-2 text-lg text-green ">Java Script</span>
</div>


<div className="flex flex-col items-center bg-white border-red-400 p-4 transition-transform duration-300 ease-in-out transform  hover:scale-110">
<FaPython className=" text-green-500 text-6xl"/>
<span className="mt-2 text-lg text-green ">Pythone</span>
</div>


<div className="flex flex-col items-center bg-white border-red-400 p-4 transition-transform duration-300 ease-in-out transform  hover:scale-110">
<DiHtml5 className=" text-sky-500 text-6xl"/>
<span className="mt-2 text-lg text-green ">HTML</span>
</div>


<div className="flex flex-col items-center bg-white border-black-400 p-4 transition-transform duration-300 ease-in-out transform  hover:scale-110">
<FaGithubSquare  className=" text-red-500 text-6xl"/>
<span className="mt-2 text-lg text-green ">GIt Hub</span>
</div>
<div className="flex flex-col items-center bg-white border-pink-500 p-4 transition-transform duration-300 ease-in-out transform  hover:scale-110">
<SiTypescript className=" text-red-500 text-6xl"/>
<span className="mt-2 text-lg text-green ">Type Script</span>
</div>








  </div>
  <section className="text-gray-400 bg-gray-900 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-500">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please fill this form if you have any quaries or complains or if you have any message for us</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
          <a className="text-blue-400">Read our privacy policy for any issues..</a>
          
          <span className="inline-flex">
            <a className="text-yellow-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-yellow-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-yellow-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-yellow-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>



<footer className="text-gray-400 bg-gray-900 body-font">
  <div className="border-t border-gray-800">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">News Letter</label>
          <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe Now</button>
        <p className="text-green-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">
          <br className="lg:block hidden"/>
        </p>
      </div>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-orange-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-blue-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-yelloe-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-red-400">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm text-center sm:text-left">© 2024 Shabina Naz—
        <a href="https://www.linkedin.com/feed/" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@Portfolio Website</a>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">Enamel pin tousled raclette tacos irony</span>
    </div>
  </div>
</footer>
</section>

    </div>
  )
}