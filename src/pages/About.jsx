import React from "react";

function About() {
    return (
        
        <section class="py-48 bg-blackbg flex flex-col justify-center">
        <div class="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div class="-mt-20 flex justify-end">
            <img class="h-2/3 object-cover rounded-lg overflow-hidden" src="/ff.png" />
          </div>
          
          <div class="-mt-60 flex justify-start">
            <img class="rounded-lg object-cover overflow-hidden" src="/freecomany.png" />
          </div>
          <div class="flex justify-start -mr-28 ml-28">
            <img class="object-cover rounded-lg overflow-hidden" src="/lala.png" />
          </div>
          <div class="-translate-y-96 transform ml-28 -mr-28 p-16 shadow-xl rounded-xl overflow-hidden bg-white">
            <div >
              <p class="text-5xl font-bold tracking-tight p-2 bg-blackbg">
                Lali-Ho Reviews - A group project for Coder Academy 2022
              </p>
              <p class="text-xl bg-blackbg p-2">
              Ever wonder what happens when two jr developers get together to
              create an app for their final semester project? Well, this is it!
              A fun and creative app inspired by their love of gaming
              (particularly MMORPGs). Lali-Ho Reviews is a Ruby on rails API
              with SQL and React for the front end, whilst utilizing the free to
              use API from XIVapi to help with the information that they needed.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-6 border-t border-b border-gray-200 my-12 py-8">
              <div>
                <p class="text-3xl font-bold text-black">
                  Amelia Jones
                </p>
                <p class="text-sm text-black">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque consectetur error labore consequatur dolorum architecto minima velit nesciunt tempora non at ex quo suscipit officia quibusdam, voluptatibus aliquam nemo commodi?
                </p>
              </div>
              <div>
                <p class="text-3xl font-bold text-black">
                  Harley Martin-Farrell
                </p>
                <p class="text-sm text-black">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur eaque, quisquam saepe suscipit quasi nam voluptatem, voluptate, impedit pariatur illum at sed eos quae commodi sapiente? Earum tenetur incidunt quasi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>  

    )
}

export default About;