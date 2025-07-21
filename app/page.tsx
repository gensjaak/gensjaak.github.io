/* eslint-disable @next/next/no-img-element */
import {
  CircleArrowUpRightIcon,
  Sent02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AiBrain03Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { TProject } from "../constants/types";

export default function Home() {
  const projects: TProject[] = [
    {
      duration: "From 2022 to Present. 3 years experience",
      position: "Senior Full Stack Developer",
      description:
        "Led significant migrations to React SPA, Nx monorepo, and ViteJS, while implementing features like dark mode, AI chat support, and 2FA, focusing on accessibility and error tracking.",
      technologies: [
        {
          icon: "php",
          name: "PHP",
        },
        {
          icon: "react",
          name: "ReactJS",
        },
        {
          icon: "typescript",
          name: "TypeScript",
        },
        {
          icon: "vitejs",
          name: "ViteJS",
        },
        {
          icon: "docker",
          name: "Docker",
        },
      ],
      image: {
        src: "/images/projects/mailjet.webp",
        alt: "Mailjet App",
      },
      identity: {
        title: "Mailjet, by SINCH",
        description:
          "an email service provider that helps businesses send marketing and transactional emails. It offers tools for designing emails, managing contacts, and tracking performance, with both a user-friendly interface and developer-friendly APIs.",
        link: {
          href: "https://mailjet.com",
          text: "Visit Mailjet",
        },
      },
    },
    {
      duration: "From 2020 to 2021. 2 years experience",
      position: "Frontend ReactJS Developer",
      description:
        "Developed ReactJS components for an iPad-based cash register software, designed an accounting module, contributed to an open-source ReScript library, and managed customer relationships.",
      technologies: [
        { icon: "react", name: "ReScript" },
        { icon: "ocaml", name: "OCaml" },
        { icon: "googlecloud", name: "Google Cloud" },
      ],
      image: {
        src: "/images/projects/wino.webp",
        alt: "Wino",
      },
      identity: {
        title: "Wino",
        description:
          "an iPad-based, all-in-one point-of-sale software for wine merchants, grocery, and cheese shops. It centralizes sales, stock, accounting, and offers e-commerce integration, customer loyalty, and hardware support.",
        link: { href: "https://wino.fr", text: "Try it out" },
      },
    },
    {
      duration: "From 2019 to 2020. 1 year experience",
      position: "Frontend VueJS/NuxtJS Developer",
      description:
        "Developed the front-end with VueJS/NuxtJS, designing with Adobe XD, and implemented a process for validating and signing accounting documents.",
      technologies: [
        { icon: "vuejs", name: "VueJS" },
        { icon: "nuxtjs", name: "NuxtJS" },
        { icon: "xd", name: "Adobe XD" },
      ],
      image: {
        src: "/images/projects/talenz.webp",
        alt: "Talenz Groupe Fidorg",
      },
      identity: {
        title: "Talenz Groupe Fidorg",
        description:
          "A national network of 7 proximity-based cabinets in France, offering traditional consulting services like accounting and auditing, plus innovative business management solutions. They prioritize client success, agility, sustainability, and community involvement.",
        link: { href: "https://www.talenz.fr/", text: "Visit Talenz" },
      },
    },
    {
      duration: "During 2017",
      position: "Frontend JavaScript Developer",
      description:
        "Developed a JavaScript tool to answer company questions, working on a project for the manufacturer of construction machinery, machine tools, and aeronautical equipment.",
      technologies: [
        { icon: "javascript", name: "JavaScript" },
        { icon: "html5", name: "HTML5" },
        { icon: "css3", name: "CSS3" },
      ],
      image: {
        src: "/images/projects/liebherr.webp",
        alt: "Liebherr",
      },
      identity: {
        title: "Liebherr",
        description:
          "a global, family-run company operating for over 75 years. It offers a wide range of sophisticated products and services across various segments like construction machinery, mining, maritime cranes, aerospace, and refrigeration, with over 150 companies worldwide.",
        link: { href: "https://www.liebherr.com", text: "Visit Liebherr" },
      },
    },
    {
      duration: "During 2017",
      position: "WordPress Developer",
      description:
        "Developed and maintained the showcase site using WordPress for the French skincare and hygiene products brand.",
      technologies: [
        { icon: "wordpress", name: "WordPress" },
        { icon: "php", name: "PHP" },
        { icon: "html5", name: "HTML5" },
        { icon: "css3", name: "CSS3" },
      ],
      image: {
        src: "/images/projects/ushuaia-beaute.webp",
        alt: "Ushuaia Beauté",
      },
      identity: {
        title: "Ushuaia Beauté",
        description:
          "Ushuaia Beauté offers a range of beauty products including deodorants, shower gels, and organic items. The brand emphasizes its long-standing commitment to nature, providing beauty secrets and ingredient information.",
        link: {
          href: "https://www.ushuaia-beaute.fr/",
          text: "Visit Ushuaia Beauté",
        },
      },
    },
    {
      duration: "During 2017",
      position: "Frontend VueJS Developer",
      description:
        "Developed and maintained the website and order funnel using VueJS for the Japanese food restaurants.",
      technologies: [
        { icon: "vuejs", name: "VueJS" },
        { icon: "laravel", name: "Laravel" },
        { icon: "html5", name: "HTML5" },
        { icon: "css3", name: "CSS3" },
      ],
      image: {
        src: "/images/projects/yokosushi.webp",
        alt: "Yokosushi",
      },
      identity: {
        title: "Yokosushi",
        description:
          "offers Japanese dining in Toulouse with two locations. They provide delivery or pick-up services, featuring a diverse menu. Additionally, the brand offers franchising opportunities for those interested in joining their network.",
        link: { href: "https://www.yokosushi.fr/", text: "Order some sushi" },
      },
    },
    {
      duration: "During 2024",
      position: "WordPress Developer",
      description:
        'I developed and maintained the website for the recipients of the "Game of Life" book distribution during the 2024 Paris Olympics.',
      technologies: [
        { icon: "wordpress", name: "WordPress" },
        { icon: "php", name: "PHP" },
        { icon: "html5", name: "HTML5" },
        { icon: "css3", name: "CSS3" },
      ],
      image: {
        src: "/images/projects/goal.webp",
        alt: "Game Of Life",
      },
      identity: {
        title: "Game Of Life",
        description:
          'The "Game of Life" website shares a Christian message of God\'s love and victory through Jesus Christ. It offers a book, "Le jeu de la vie," guiding users to overcome challenges by embracing faith, and outlines outreach plans for the Paris Olympics.',
        link: { href: "https://game-of-life.org/", text: "Get your copy" },
      },
    },
    {
      duration: "Since 2023",
      position: "WordPress Developer",
      description:
        "I developed and maintained the website for the French association of young christians.",
      technologies: [
        { icon: "wordpress", name: "WordPress" },
        { icon: "php", name: "PHP" },
        { icon: "html5", name: "HTML5" },
        { icon: "css3", name: "CSS3" },
      ],
      image: {
        src: "/images/projects/jev.webp",
        alt: "Jeunesse et vie",
      },
      identity: {
        title: "Jeunesse et vie",
        description:
          "a Christian youth movement passionate about Jesus Christ. They introduce young people to Jesus through Bible studies, concerts, and conferences, fostering spiritual growth and community through teachings, retreats, and social activities across France and internationally.",
        link: {
          href: "https://jeunesse-et-vie.fr/",
          text: "Visit Jeunesse et Vie",
        },
      },
    },
    {
      duration: "During 2024",
      position: "WordPress Developer",
      description:
        "I developed and maintained the website for Professor of Organic Chemistry and Christian author Zacharias Tanee Fomum.",
      technologies: [
        { icon: "wordpress", name: "WordPress" },
        { icon: "php", name: "PHP" },
        { icon: "html5", name: "HTML5" },
        { icon: "css3", name: "CSS3" },
      ],
      image: {
        src: "/images/projects/ztf.webp",
        alt: "Zacharias Tanee Fomum",
      },
      identity: {
        title: "Zacharias Tanee Fomum",
        description:
          "dedicated to Zacharias Tanee Fomum, a distinguished author, scientist, and spiritual leader. It features his prolific Christian writings, academic achievements in Organic Chemistry, and role as an apostle of a global missionary movement.",
        link: {
          href: "https://ztfomum.org/",
          text: "Visit ZTFomum",
        },
      },
    },
    {
      duration: "During 2024",
      position: "WordPress Developer",
      description:
        "I developed and maintained the website for the Christian Missionary Fellowship International - Church of Paris.",
      technologies: [
        { icon: "wordpress", name: "WordPress" },
        { icon: "php", name: "PHP" },
        { icon: "html5", name: "HTML5" },
        { icon: "css3", name: "CSS3" },
      ],
      image: {
        src: "/images/projects/cmci-paris.webp",
        alt: "CMCI Paris",
      },
      identity: {
        title: "CMCI Paris",
        description:
          'a community of Jesus Christ\'s disciples aiming to raise 1 billion disciples globally. They offer resources like "Le jeu de la vie" and host events, striving to make Christ known worldwide through their missionary movement.',
        link: {
          href: "https://cmciparis.fr/",
          text: "Visit CMCI Paris",
        },
      },
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="avatar-wrapper">
          <img src="/images/avatar.png" alt="Avatar" className="avatar" />
        </div>
        <h6 className="greetings">Hi, I&apos;m Jean-Jacques 👋</h6>
        <h1 className="headline">
          <span>Building digital</span>
          <span>products, brands and</span>
          <span>experiences.</span>
        </h1>
        <p className="description">
          As a senior front-end developer with over seven years&apos;
          experience, specialising in React, VueJS and TypeScript, I enjoy
          creating high-performance, intuitive interfaces, while working with
          the product and design teams.
        </p>
        <Link href="/contact" className="cta">
          Connect with me
          <span className="ml-2">📬</span>
        </Link>
      </section>

      <section className="clients">
        <ul className="clients-list">
          <li className="client-item">
            <img
              src="/images/clients/attineos.svg"
              alt="Attineos"
              className="client-logo w-[150px]"
            />
          </li>
          <li className="client-item">
            <img
              src="/images/clients/mailjet.svg"
              alt="Mailjet"
              className="client-logo w-[120px]"
            />
          </li>
          <li className="client-item">
            <img
              src="/images/clients/wino.svg"
              alt="Wino"
              className="client-logo w-[100px]"
            />
          </li>
          <li className="client-item">
            <img
              src="/images/clients/talenz.svg"
              alt="Talenz"
              className="client-logo w-[100px]"
            />
          </li>
          <li className="client-item">
            <img
              src="/images/clients/liebherr.svg"
              alt="Liebherr"
              className="client-logo w-[120px]"
            />
          </li>
          <li className="client-item">
            <img
              src="/images/clients/ushuaia.png"
              alt="Ushuaia Beauté"
              className="client-logo w-[85px]"
            />
          </li>
          <li className="client-item">
            <span className="client-logo">YokoSushi</span>
          </li>
          <li className="client-item">
            <img
              src="/images/clients/goal.png"
              alt="Game of Life"
              className="client-logo w-[90px]"
            />
          </li>
          <li className="client-item">
            <img
              src="/images/clients/jev.png"
              alt="Jeunesse et vie"
              className="client-logo w-[80px]"
            />
          </li>
          <li className="client-item">
            <img
              src="/images/clients/ztf.png"
              alt="Zacharias Tanee Fomum"
              className="client-logo w-[90px]"
            />
          </li>
          <li className="client-item">
            <img
              src="/images/clients/cmci-paris.png"
              alt="CMCI Paris"
              className="client-logo w-[100px]"
            />
          </li>
        </ul>
      </section>

      <section className="projects">
        <ul className="projects-list">
          {projects.map((project, index) => (
            <li key={index} className="project-item">
              <article className="project-card">
                <div className="project-card-info">
                  <div className="project-card-info-personal">
                    <span className="project-card-info-duration">
                      {project.duration}
                    </span>
                    <h2 className="project-card-info-position">
                      {project.position}
                    </h2>
                    <p className="project-card-info-description">
                      {project.description}
                    </p>
                  </div>

                  <div className="project-card-info-skills">
                    <ul className="project-card-info-technologies">
                      {project.technologies.map((tech, i) => (
                        <li key={i} className="project-card-info-technology">
                          <i
                            className={`devicon-${tech.icon}-plain project-card-info-technology-icon`}
                          ></i>
                          <span className="project-card-info-technology-name">
                            {tech.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="project-card-identity">
                  <div className="project-card-image-wrapper">
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      className="project-card-image"
                    />
                  </div>
                  <div className="project-card-identity-info">
                    <h6 className="project-card-identity-title">
                      {project.identity.title}
                    </h6>
                    <p className="project-card-identity-description">
                      {project.identity.description}
                    </p>
                    <a
                      href={project.identity.link.href}
                      className="project-card-identity-link"
                    >
                      <span className="project-card-identity-link-text">
                        {project.identity.link.text}
                      </span>
                      <HugeiconsIcon
                        icon={CircleArrowUpRightIcon}
                        size={22}
                        strokeWidth={2}
                      />
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="skills">
        <div className="grid grid-cols-2 grid-rows-2 gap-8 skills-grid">
          <div className="skill-item bg-red-400 col-span-2 row-span-4">
            <div className="skill-item-icons">
              <i className="devicon-react-original"></i>
              <i className="devicon-redux-original"></i>
              <i className="devicon-ocaml-plain"></i>
            </div>
            <span className="skill-item-text">ReactJS, ReScript, OCaml</span>
          </div>
          <div className="skill-item bg-pink-300 col-start-1 row-start-5">
            <div className="skill-item-icons">
              <i className="devicon-express-original"></i>
              <i className="devicon-graphql-plain"></i>
            </div>
            <span className="skill-item-text">REST API, GraphQL</span>
          </div>
          <div className="skill-item bg-green-400 col-span-2 col-start-2 row-start-5">
            <div className="skill-item-icons">
              <i className="devicon-docker-plain"></i>
              <i className="devicon-githubactions-plain"></i>
              <i className="devicon-jest-plain"></i>
            </div>
            <span className="skill-item-text">
              Docker, Github Actions, Jest
            </span>
          </div>
          <div className="skill-item bg-violet-300 row-span-2 col-start-3 row-start-1">
            <div className="skill-item-icons">
              <i className="devicon-php-plain"></i>
              <i className="devicon-zend-plain"></i>
              <i className="devicon-wordpress-plain"></i>
            </div>
            <span className="skill-item-text">
              PHP, Zend Framework, WordPress
            </span>
          </div>
          <div className="skill-item bg-teal-500 col-span-2 col-start-3 row-start-3">
            <div className="skill-item-icons">
              <i className="devicon-vuejs-plain"></i>
              <i className="devicon-nuxtjs-plain"></i>
            </div>
            <span className="skill-item-text">VueJS, NuxtJS</span>
          </div>
          <div className="skill-item bg-amber-400 col-start-3 row-start-4">
            <div className="skill-item-icons">
              <i className="devicon-sentry-plain"></i>
            </div>
            <span className="skill-item-text">Sentry, Zod, ReactQuery, Nx</span>
          </div>
          <div className="skill-item bg-orange-400 row-span-2 col-start-4 row-start-4">
            <div className="skill-item-icons">
              <i className="devicon-nodejs-plain"></i>
              <i className="devicon-nextjs-plain"></i>
              <i className="devicon-prisma-original"></i>
            </div>
            <span className="skill-item-text">NodeJS, NextJS, Prisma</span>
          </div>
          <div className="skill-item bg-fuchsia-300 col-span-2 col-start-4 row-start-1">
            <div className="skill-item-icons">
              <i className="devicon-figma-plain"></i>
              <i className="devicon-storybook-plain"></i>
              <i className="devicon-tailwindcss-plain"></i>
            </div>
            <span className="skill-item-text">
              UX/UI Design, Storybook, TailwindCSS
            </span>
          </div>
          <div className="skill-item bg-orange-300 col-start-4 row-start-2">
            <div className="skill-item-icons">
              <HugeiconsIcon icon={AiBrain03Icon} size={38} strokeWidth={1.5} />
            </div>
            <span className="skill-item-text">OpenAI, Ollama, RAG</span>
          </div>
          <div className="skill-item bg-blue-300 row-span-4 col-start-5 row-start-2">
            <div className="skill-item-icons">
              <i className="devicon-typescript-plain"></i>
              <i className="devicon-javascript-plain"></i>
            </div>
            <span className="skill-item-text">Typescript, Javascript</span>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container mx-auto">
          <div className="contact-content">
            <div className="contact-content-left">
              <span className="contact-content-left-icon">
                <img
                  src="/images/contact.png"
                  alt="Contact"
                  className="contact-content-left-image"
                />
              </span>
              <h2 className="contact-content-left-title">
                <span>Have a project or</span>
                <span>a question?</span>
              </h2>
              <p className="contact-content-left-description">
                <span>Let&apos;s get in touch, talk about it and</span>
                <span>let&apos;s make something happen!</span>
              </p>
              <ul className="contact-socials">
                <li className="contact-social-item">
                  <a
                    href="mailto:hi@jeanjacques.dev"
                    className="contact-social-link"
                  >
                    <img
                      src="/images/socials/at.svg"
                      alt="Email"
                      className="contact-social-icon"
                      width={22}
                      height={22}
                    />
                  </a>
                </li>
                <li className="contact-social-item">
                  <a
                    href="https://www.linkedin.com/in/jeanjacques-akakpo/"
                    className="contact-social-link"
                  >
                    <img
                      src="/images/socials/linkedin.svg"
                      alt="Linkedin"
                      className="contact-social-icon"
                      width={22}
                      height={22}
                    />
                  </a>
                </li>
                <li className="contact-social-item">
                  <a
                    href="https://github.com/gensjaak"
                    className="contact-social-link"
                  >
                    <img
                      src="/images/socials/github.svg"
                      alt="Github"
                      className="contact-social-icon"
                      width={22}
                      height={22}
                    />
                  </a>
                </li>
              </ul>
            </div>

            <form className="contact-form">
              <label htmlFor="name" className="contact-form-label">
                <span>Name</span>
                <input type="text" id="name" className="contact-form-input" />
              </label>
              <label htmlFor="email" className="contact-form-label">
                <span>Email</span>
                <input type="email" id="email" className="contact-form-input" />
              </label>
              <label htmlFor="message" className="contact-form-label">
                <span>Message</span>
                <textarea
                  id="message"
                  className="contact-form-input"
                  rows={7}
                />
              </label>
              <button type="submit" className="contact-form-button">
                Send message{" "}
                <HugeiconsIcon icon={Sent02Icon} size={22} strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
