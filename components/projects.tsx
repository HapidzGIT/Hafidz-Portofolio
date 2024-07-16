import Image from 'next/image';

export const Project = () => {
  return (
    <div>
      <section id="projects" className="pt-24 pb-20 bg-[#1f252d]">
        <div className="container">
          <div className="w-full px-4 mb-16">
            <div className="text-center font-semibold">
              <h2 className="text-3xl mb-5 md:text-4xl lg:text-5xl">
                Projects i&apos;ve <span className="text-primary">Created</span>
              </h2>
              <p className="font-medium px-4 text-lg md:text-2xl lg:text-2xl">Some of the projects I have made to increase my skills</p>
            </div>
          </div>
          <div className="flex flex-wrap w-full px-4 justify-center gap-8" data-aos="fade-up" data-aos-duration="1000">
            <div className="mb-12 lg:w-1/3 max-w-md border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden">
                <Image src="/classmeet-SI.png" alt="Information System Classmeet" width={600} height={400} />
              </div>
              <h3 className="font-bold mb-3 mt-[1.5rem] text-2xl px-2">Information System Classmeet</h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">
                I made this project as a final assignment from my school to create something useful for the school. Finally I creating this information system.
              </p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <Image src="/React-icon.svg.png" alt="React" width={64} height={64} />
                </div>
                <div className="py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <Image src="/Laravel.svg.png" alt="Laravel" width={56} height={56} />
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <button className="inline px-7 py-3 font-medium text-[1.1rem] rounded-md bg-cyan-600 hover:bg-primary">Panduan</button>
                <a href="https://hafidz-movie-list.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 mx-3 bg-primary font-medium text-lg rounded-md hover:bg-secondary">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow">
              <div className="rounded-md overflow-hidden ">
                <Image src="./Foto-kelas.png" alt="Information System Classmeet" width={600} height={400} />
              </div>
              <h3 className="font-bold mb-3 mt-4 text-2xl px-2">My Class Website</h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">
                This is my class website that I have created with my friends, this website aims to introduce our class to visitors as well as a place for collecting data and student projects.
              </p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <Image src="/React-icon.svg.png" alt="React" width={64} height={64} />
                </div>
                <div className="py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <Image src="./tailwind.svg" alt="Laravel" width={56} height={56} />
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://twinkyxipplgthree.pages.dev/" target="_blank" className="px-7 py-3 bg-primary font-medium text-lg rounded-md">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden ">
                <Image src="./The-movie.png" alt="Information System Classmeet" width={600} height={400} />
              </div>
              <h3 className="font-bold mb-3 mt-6 text-2xl px-2">Movie List </h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">This project was created to display data on the most popular and newest films or movie. Also this project helped me alot about ReactJS</p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <Image src="/React-icon.svg.png" alt="React" width={64} height={64} />
                </div>
                <div className="py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <Image src="./tailwind.svg" alt="Laravel" width={56} height={56} />
                </div>
                <div className="py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <Image src="./tmdb.svg" alt="Laravel" width={56} height={56} />
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://hafidz-movie-list.vercel.app/" target="_blank" className="px-7 py-3 bg-primary font-medium text-lg rounded-md">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden ">
                <Image src="./UIKA-3.png" alt="Information System Classmeet" width={600} height={400} />
              </div>
              <h3 className="font-bold mb-3 mt-5 text-2xl px-2">University Web Design</h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">My First Commercial Design for one of the universities in the city of Bogor and really helped improve my design skills, because I learned from the project.</p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out px-3">
                <Image src="./1667px-Figma-logo.svg.png" alt="Laravel" width={56} height={56} />

                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://dribbble.com/shots/24373399-UIKA-UNIVERSITY" target="_blank" className="px-7 py-3 bg-primary font-medium text-lg rounded-md hover:shadow-primary hover:shadow-lg">
                  Lihat
                </a>
              </div>
            </div>

            <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden ">
                <Image src="./Blog.png" alt="Information System Classmeet" width={600} height={400} />
              </div>
              <h3 className="font-bold mb-3 mt-5 text-2xl px-2">Blog Apps</h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">This simple blog was created with the aim of sharing my experiences and sharing knowledge, hopefully you as readers can also feel the benefit</p>
              <div className="flex gap-x-2 px-2">
                  <div className="py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out rounded-md overflow-hidden">
                    <Image src="./nextjs-icon-2048x2048-x6n5t31i.png" alt="React" width={64} height={64} />
                  </div>
                  <div className="py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                    <Image src="./tailwind.svg" alt="Laravel" width={56} height={56} />
                  </div>
                </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://hafidz-blogs.vercel.app/" target="_blank" className="px-7 py-3 bg-primary font-medium text-lg rounded-md hover:shadow-primary hover:shadow-lg">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden ">
                <Image src="./Pokemon.png" alt="Information System Classmeet" width={600} height={400} />
              </div>
              <h3 className="font-bold mb-3 mt-5 text-2xl px-2">Pokemon List</h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">This is a list of Pokemon along with some of the abilities that each Pokemon has, which I consumed the fire from poke-api</p>
              <div className="flex gap-x-2 px-2">
                <div className="flex gap-x-2 px-2">
                  <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                    <Image src="./React-icon.svg.png" alt="React" width={64} height={64} />
                  </div>
                  <div className="py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                    <Image src="./tailwind.svg" alt="Laravel" width={56} height={56} />
                  </div>
                  <div className="py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                    <Image src="./typescript-svg.png" alt="Laravel" width={56} height={56} />
                  </div>
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://pokemon-api-six-phi.vercel.app/" target="_blank" className="px-7 py-3 bg-primary font-medium text-lg rounded-md hover:shadow-primary hover:shadow-lg">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden ">
                <Image src="./newss.png" alt="Information System Classmeet" width={600} height={400} />
              </div>
              <h3 className="font-bold mb-3 mt-5 text-2xl px-2">List worldwide news </h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">This website is Api&apos;s consumption of a News Api website which provides all the news in the world</p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <Image src="./React-icon.svg.png" alt="React" width={64} height={64} />
                </div>
                <div className="py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <Image src="./tailwind.svg" alt="Laravel" width={56} height={56} />
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://github.com/HapidzGIT/News-API" target="_blank" className="px-7 py-3 bg-primary font-medium text-lg rounded-md hover:shadow-primary hover:shadow-lg">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-primary shadow-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden ">
                <Image src="./Slicing-design.png" alt="Information System Classmeet" width={600} height={400} />
              </div>
              <h3 className="font-bold mb-3 mt-5 text-2xl px-2">Marketing Website</h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">i built this as a practice for me when i learned html and css and i finally made this website.</p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-18 grayscale hover:grayscale-0 transition duration-300 ease-in-out px-3">
                <Image src="./HTML5_logo_and_wordmark.svg.png" alt="Laravel" width={56} height={56} />
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://hapidzgit.github.io/Slicing-Design/" target="_blank" className="px-7 py-3 bg-primary font-medium text-lg rounded-md hover:shadow-primary hover:shadow-lg">
                  Lihat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
