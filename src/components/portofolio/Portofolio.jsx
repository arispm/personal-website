import React from 'react';
import Pokemon from '../../assets/pokemon.jpg';
import Calculator from '../../assets/calculator.jpg';
import Port from '../../assets/portofmokha.jpg';

const Portofolio = () => {
  const links = [
    {
      id: 1,
      href: 'https://finalproject8-frontend.vercel.app/',
      sc: 'https://github.com/arispm/finalproject8-frontend',
      judul: 'Clone of Port of Mokha',
      tech: 'Tech: ReactJS, Tailwind CSS',
      img: Port,
    },
    {
      id: 2,
      href: 'https://arispm.github.io/Poke-API/',
      sc: 'https://github.com/arispm/Poke-API',
      judul: 'PokeAPI',
      tech: 'Tech: ReactJS',
      img: Pokemon,
    },
    {
      id: 3,
      href: 'https://arispm.github.io/calculator.github.io/',
      sc: 'https://github.com/arispm/calculator.github.io',
      judul: 'Calculator',
      tech: 'Tech: HTML,CSS & JS',
      img: Calculator,
    },
  ];

  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">My Portfolio</h1>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2 ">
            {links.map(({ id, judul, tech, img, href, sc }) => (
              <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" key={id} style={{ backgroundImage: `url(${img})` }}>
                <div class="w-full flex justify-between items-center px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                  <div>
                    <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">{judul}</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-600 uppercase dark:text-blue-400 ">{tech}</p>
                  </div>
                  <div>
                    <a
                      type="button"
                      class="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-center"
                      href={href}
                      target="_blank"
                    >
                      Visit Link
                    </a>
                    <a
                      type="button"
                      class="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-200 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-center"
                      href={sc}
                      target="_blank"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;
