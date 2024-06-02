import { Email, Github, Linkedin } from "../components/Icons";
import { Project } from "../components/Project";

const projects = [
  {
    title: "First Team Physiotherapy",
    description:
      "A website for a physiotherapy based in Hartlepool. Built with React and Strapi CMS.",
    href: "https://www.firstteamphysiotherapy.co.uk/",
    image: "/physio.png",
  },

  {
    title: "Neeya Community",
    description:
      "A community interest company based in West London. Built with React and Directus CMS.",
    href: "https://neeya.co.uk/",
    image: "/neeya.png",
  },

  {
    title: "South London United",
    description:
      "My local football team website built with React and Directus CMS.",
    href: "https://www.southlondonunited.co.uk/",
    image: "/football.png",
  },

  {
    title: "FootyBee",
    description: "A Euro 2024 predictor built with React and Typescript.",
    href: "https://footy.tombrace.co.uk/",
    image: "/footybee.png",
  },
];

export const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-8 p-8 flex-col md:flex-row">
        <div className="min-w-72">
          <img
            src="/me.JPG"
            alt="Web developer"
            className="h-72 w-72 rounded-full border-indigo-400 border-8"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-center">Tom Brace</h1>

          <p className="text-xl text-center">
            Hi! I'm Tom, a fullstack developer based in London and welcome to my
            slice of the web! Here you can find out more about me, my projects
            and how to get in touch.
          </p>

          <div className="mt-4 flex gap-4 justify-center items-center">
            <a
              href="https://github.com/xBracey"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-12 w-12 aspect-auto" />
            </a>

            <a
              href="https://www.linkedin.com/in/thomas-brace-793690131/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-12 w-12" />
            </a>

            <a
              href="mailto:thomasbrace22@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Email className="h-14 w-14" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <h2
          className="text-3xl font-bold text-center py-6 border-indigo-400 border-b-2"
          id="about"
        >
          About
        </h2>

        <p className="text-center my-6 text-lg">
          I'm an experienced fullstack developer with expertise in using React,
          AWS, and Typescript. I was born in Hartlepool but now reside in
          London. Originally a passionate Hartlepool United fan, I still try to
          catch matches when I can.
          <br />
          <br />
          With 7 years of experience in web development, I've had the
          opportunity to work on a wide variety of projects, from business
          websites to complex web applications. On the frontend, I enjoy
          building responsive, interactive UIs using React and Typescript. For
          the backend and infrastructure, I leverage AWS services like EC2,
          Lambda, RDS, and more to create robust and scalable solutions.
          <br />
          <br />
          When I'm not coding, you can usually find me on the footy pitch or
          immersed in my latest coding side project. I enjoy creating mini-games
          using React, Typescript, and PixiJS which you can find in my game
          library. Game development lets me flex my creative muscles outside of
          purely technical work.
        </p>
      </div>

      <div>
        <h2
          className="text-3xl font-bold text-center py-6 border-indigo-400 border-b-2"
          id="projects"
        >
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 my-6">
          {projects.map((project) => (
            <Project key={project.href} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
