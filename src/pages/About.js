import React from "react";

function About() {
  return (
    <section class="pt-96 pr-48 w-48 md:py-48 md:w-auto flex flex-col justify-center">
      <div class="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div class="-mt-20 flex justify-end">
          <img
            class="invisible md:visible h-2/3 md:h-fit  lg:h-4/5 object-cover rounded-lg overflow-hidden"
            src="/ff.png"
          />
        </div>

        <div class="invisible lg:visible -mt-48 flex justify-start">
          <img
            class="rounded-lg object-cover overflow-hidden"
            src="/freecomany.png"
          />
        </div>
        <div class=" invisible md:visible flex justify-start  md:h-fit lg:-mr-28 lg:ml-28">
          <img
            class="object-cover rounded-lg overflow-hidden"
            src="/lala.png"
          />
        </div>
        <div class="pt-10 lg:pt-0 w-80 lg:w-auto -translate-y-80 transform lg:ml-28 lg:-mr-28 lg:p-16 shadow-xl rounded-xl overflow-hidden bg-blackbg">
          <div>
            <p class="text-5xl font-bold tracking-tight p-2 bg-blackbg rounded-lg">
              Lali-Ho Reviews - A group project for Coder Academy 2022
            </p>
            <p class="text-xl bg-blackbg p-2 rounded-sm ">
              Ever wonder what happens when two Jr developers get together to
              create an app for their final semester project? Well, this is it!
              A fun and creative app inspired by their love of gaming
              (particularly MMORPGs). Lali-Ho Reviews is a Ruby on rails API
              with SQL and React for the front end, whilst utilizing the free to
              use API from XIVapi to help with the information that they needed.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-6 border-t border-b border-blue-400 my-12 py-8">
            <div>
              <p class="text-3xl font-bold ">Amelia Jones</p>
              <p class="pt-9 text-sm text-blue-500 ">
                <a
                  href="https://github.com/ameliaxjones"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mr-4 hover:underline md:mr-6"
                >
                  Github account
                </a>
                <div class="text-gray-200 pt-2">
                <p>Favourite Race: Viera
                </p>
                <p>Favourite City: Limsa
                </p>
                <p>Favourite Job: WHM/WAR
                </p>
                </div>
              </p>
            </div>
            <div>
              <p class="text-3xl font-bold ">Harley Martin-Farrell</p>
              <p class="text-sm text-blue-500">
                <a
                  href="https://github.com/harley-ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mr-4 hover:underline md:mr-6"
                >
                  Github account
                </a>
                <div class="text-gray-200 pt-2">
                <p>Favourite Race: Roegadyn
                </p>
                <p>Favourite City: Limsa
                </p>
                <p>Favourite Job: DRG
                </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
