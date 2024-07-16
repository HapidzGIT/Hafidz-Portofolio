import React from 'react';
import Image from 'next/image';

export const Skilss = () => {
  return (
    <div>
      <section id="skils" className="pt-36 pb-36">
        <h1 className="text-center text-2xl font-bold lg:text-4xl">
          My <span className="text-primary">Skills</span>
        </h1>
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-1/3" data-aos="fade-up">
              <div className="mt-16 border p-5 rounded-md border-primary hover:scale-110 transition duration-500 ease-in-out hover:shadow-primary">
                <div className="flex gap-x-3">
                  <a href="#" className="py-3 max-w-8 md:max-w-10">
                    <Image src="/React-icon.svg.png" alt="react" width={40} height={40} />
                  </a>
                  <a href="#" className="py-3 max-w-8 md:max-w-10">
                    <Image src="/tailwind.svg" alt="tailwind" width={40} height={40} />
                  </a>
                  <a href="#" className="py-3 max-w-8 md:max-w-10">
                    <Image src="/Vue.js_Logo_2.svg.png" alt="vue" width={40} height={40} />
                  </a>
                  <a href="#" className="py-3 max-w-8 md:max-w-10">
                    <Image src="/iduLChSb1a.jpeg" alt="laravel" width={40} height={40} className="rounded-md" />
                  </a>
                  <a href="#" className="py-3 max-w-8 md:max-w-10 rounded-md overflow-hidden">
                    <Image src="/Unofficial_JavaScript_logo_2.svg.png" alt="javascript" width={40} height={40} />
                  </a>
                  <a href="#" className="py-3 max-w-8 md:max-w-10">
                    <Image src="/typescript-svg.png" alt="typescript" width={40} height={40} />
                  </a>
                </div>
                <h1 className="font-extrabold text-3xl">Front <span className="text-primary">end</span></h1>
                <h2 className="max-w-xl text-md font-medium leading-[1.800]">
                  I usually use several languages ​​for the front-end to create intuitive and eye-catching designs for web, such as CSS, React, Vue, Next, Tailwind and Javascript also Typescript for a big project.
                </h2>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/3" data-aos="fade-up">
              <div className="mt-16 border p-4 rounded-md border-primary hover:scale-110 transition duration-500 ease-in-out hover:shadow-primary">
                <div className="flex gap-x-3">
                  <a href="#" className="py-4 max-w-10">
                    <Image src="/Laravel.svg.png" alt="laravel" width={40} height={40} />
                  </a>
                  <a href="#" className="py-3 max-w-16">
                    <Image src="/2560px-Node.js_logo.svg.png" alt="nodejs" width={40} height={40} />
                  </a>
                </div>
                <h1 className="font-extrabold text-3xl">Back <span className="text-primary">end</span></h1>
                <h2 className="max-w-xl text-md font-medium">
                  For the backend, I usually create a restful API using several languages ​​such as Laravel and Node.js, then I can consume it for my front-end, so that I can create a web application that can handle backend tasks.
                </h2>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/3" data-aos="fade-up">
              <div className="mt-16 border p-4 rounded-md border-primary hover:scale-110 transition duration-500 ease-in-out hover:shadow-primary">
                <div className="flex">
                  <a href="#" className="py-3 max-w-8">
                    <Image src="/1667px-Figma-logo.svg.png" alt="figma" width={40} height={40} />
                  </a>
                </div>
                <h1 className="font-extrabold text-3xl">Web <span className="text-primary">Design</span></h1>
                <h2 className="max-w-xl text-md font-medium leading-[1.830]">
                  For web design, I like using Figma because it is very easy to use and the results are quite satisfying. I usually use it for web design needs and practice my design skills on Figma.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
