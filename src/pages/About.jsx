import React from "react";

function About() {
  return (
    <section class="py-48 bg-white flex flex-col justify-center">
      <div class="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div class="-mt-20 flex justify-end">
          <img
            class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
            src="https://images.unsplash.com/photo-1616486788371-62d930495c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          />
        </div>

        <div class="-mt-64 flex justify-start">
          <img
            class="rounded-lg object-cover overflow-hidden"
            src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />
        </div>
        <div class="flex justify-start -mr-28 ml-28">
          <img
            class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
            src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80"
          />
        </div>
        <div class="-translate-y-96 transform ml-28 -mr-28 p-16 shadow-xl rounded-xl overflow-hidden bg-white">
          <div class="space-y-4">
            <p class="text-5xl font-bold text-black tracking-tight">
              Lali-Ho Reviews - A group project for Coder Academy 2022
            </p>
            <p class="text-xl text-black">
              Ever wonder what happens when two jr developers get together to
              create an app for their final semester project? Well, this is it!
              A fun and creative app inspired by their love of gaming
              (particularly MMORPGs). Lali-Ho Reviews is a Ruby on rails API
              with SQL and React for the front end, whilst utilising the free to
              use API from XIVapi to help with the information that they needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
