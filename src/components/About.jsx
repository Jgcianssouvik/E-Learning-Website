import React from 'react'

function About() {
  return (


    <figure class="flex justify-center items-center  bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 w-screen h-screen">
      <img class="w-24 h-24 md:w-48 md:h-auto  rounded-full mx-auto" src="https://media.licdn.com/dms/image/C4D03AQG4AB7eZIyX8Q/profile-displayphoto-shrink_800_800/0/1656066396858?e=2147483647&v=beta&t=ypMtcyC-gmELIWyIqcpDc3tWO_X0HFZiXfbJ0xmk5Ls" alt="" width="384" height="512" />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium mt-52">
            “Discover a world of learning at your fingertips with Notionery! As you log in, a treasure trove of educational opportunities awaits you. Unleash your thirst for knowledge as you gain access to the whole course information right here on our home page.”
          </p>
        </blockquote>

        <p class="text-lg font-medium">Why choose Notionery?</p>
        <div class="text-lg font-xs">1. Extensive Course Library: Dive into a vast collection of courses, carefully curated to cater to diverse interests and skill levels. From academic subjects to professional development, we've got it all covered.</div>
        <div class="text-lg font-xs">2. Seamless Learning Experience: Our user-friendly interface ensures a smooth and intuitive learning journey. Navigate through modules, track your progress, and engage with interactive content effortlessly.</div>
        <div class="text-lg font-xs">3. Expert Instructors: Learn from the best! Our courses are crafted by industry experts and experienced educators, guaranteeing top-notch content that is both practical and engaging.</div>
        <div class="text-lg font-xs">4. Certifications and Recognition: Earn certifications upon course completion to boost your credentials and advance your career. Notionery's certificates are recognized and respected by employers worldwide.</div>





        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">
            Souvik Nandi (JGEC-IT'24)
          </div>
          <div class="text-slate-700 dark:text-slate-500">
            FrontEnd Dev Intern  @Celebal Technology
          </div>
        </figcaption>
      </div>
    </figure>

  )
}

export default About