import React from 'react';

const About = () => {
  return (
    <>
      {/* <!-- component --> */}
      <div class="flex md items-center h-screen justify-center" id="about">
        <div class="bg-gray-900 w-full md:w-full h-screen">
          <div class="mx-40">
            <h1 class="text-6xl font-bold mt-16 text-gray-100 text-left">About Me</h1>

            {/* <!-- country region island --> */}
            <div class="flex mt-16 font-light text-gray-400 mx-auto">
              <div class="pr-4">
                <span class="uppercase">Country</span>
                <p class="text-2xl text-gray-400 font-semibold pt-2 text-left">Indonesia</p>
              </div>
              <div class="pr-4">
                <span class="uppercase">Region</span>
                <p class="text-2xl text-gray-400 font-semibold pt-2 text-center">West Java</p>
              </div>
            </div>

            {/* <!-- description --> */}
            <div class="description w-full sm: md:w-2/3 mt-16 text-gray-300 text-xl text-justify">
              A freshgraduate of Communication Science Pasundan University. Experienced in software developer and have completed FSD and Frontend Development Bootcamp. Curently participated in a Fullstack Development Bootcamp at
              Harisenin.com. Highly interested in IT especially frontend web development andproficient such as HTML, CSS, Tailwind CSS, Bootstrap, Javascript, React JS and familiar with Node JS and Express JS with hardworking, creativity,
              and able to work in teams
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
