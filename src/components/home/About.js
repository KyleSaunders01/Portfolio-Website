import React, {useEffect} from "../../../_snowpack/pkg/react.js";
import anime from "../../../_snowpack/pkg/animejs.js";
const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/Kyle_Saunders_CV.pdf";
    link.download = "Kyle_Saunders_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    const ssViewAnimate = () => {
      const blocks = document.querySelectorAll("[data-animate-block]");
      const viewportAnimation = () => {
        let scrollY = window.pageYOffset;
        blocks.forEach((current) => {
          const viewportHeight = window.innerHeight;
          const triggerTop = current.offsetTop + viewportHeight * 0.2 - viewportHeight;
          const blockHeight = current.offsetHeight;
          const blockSpace = triggerTop + blockHeight;
          const inView = scrollY > triggerTop && scrollY <= blockSpace;
          const isAnimated = current.classList.contains("ss-animated");
          if (inView && !isAnimated) {
            anime({
              targets: current.querySelectorAll("[data-animate-el]"),
              opacity: [0, 1],
              translateY: [100, 0],
              delay: anime.stagger(400, {start: 200}),
              duration: 800,
              easing: "easeInOutCubic",
              begin: () => {
                current.classList.add("ss-animated");
              }
            });
          }
        });
      };
      window.addEventListener("scroll", viewportAnimation);
      return () => {
        window.removeEventListener("scroll", viewportAnimation);
      };
    };
    ssViewAnimate();
  }, []);
  return /* @__PURE__ */ React.createElement("section", {
    id: "about",
    className: "s-about target-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row about-info wide",
    "data-animate-block": true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "column lg-6 md-12 about-info__pic-block"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/about-photo.jpg",
    srcSet: "images/about-photo.jpg 1x, images/about-photo@2x.jpg 2x",
    alt: "",
    className: "about-info__pic",
    "data-animate-el": true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "column lg-6 md-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about-info__text"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-pretitle with-line",
    "data-animate-el": true
  }, "About"), /* @__PURE__ */ React.createElement("p", {
    className: "attention-getter",
    "data-animate-el": true
  }, "I'm an Intermediate Software Engineer with a passion for building reliable, scalable backend systems. Since beginning my software engineering career, I've worked across enterprise modernization projects, distributed microservice architectures, cloud-native infrastructure and IoT platforms. My work has ranged from modernizing legacy enterprise applications to designing backend services for large-scale software platforms, always with a focus on maintainability, performance and long-term supportability. Prior to software engineering, I co-founded a digital media agency where I gained valuable experience in business operations, digital marketing, client management and product delivery. That entrepreneurial background continues to influence how I approach software development—I strive to understand not only the technical solution, but the business problem it solves. Outside of work you'll usually find me riding and racing off-road motorcycles, maintaining and rebuilding my own bikes, working on personal software projects, exploring new technologies, or tending to my saltwater reef aquarium."), /* @__PURE__ */ React.createElement("button", {
    onClick: handleDownload,
    className: "btn btn--medium u-fullwidth",
    "data-animate-el": true
  }, "Download CV")))), /* @__PURE__ */ React.createElement("div", {
    className: "row about-expertise",
    "data-animate-block": true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "column lg-12"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-pretitle",
    "data-animate-el": true
  }, "Expertise"), /* @__PURE__ */ React.createElement("ul", {
    className: "skills-list h1",
    "data-animate-el": true
  }, /* @__PURE__ */ React.createElement("li", null, "Software Architecture"), /* @__PURE__ */ React.createElement("li", null, "Full-Stack Development"), /* @__PURE__ */ React.createElement("li", null, "API Design & Integration"), /* @__PURE__ */ React.createElement("li", null, "DevOps & CI/CD")))), /* @__PURE__ */ React.createElement("div", {
    className: "row about-timelines",
    "data-animate-block": true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "column lg-6 tab-12"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-pretitle",
    "data-animate-el": true
  }, "Experience"), /* @__PURE__ */ React.createElement("div", {
    className: "timeline",
    "data-animate-el": true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "timeline__block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "timeline__bullet"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "timeline__header"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "timeline__title"
  }, "Octoco"), /* @__PURE__ */ React.createElement("h5", {
    className: "timeline__meta"
  }, "Software Engineer (Junior → Intermediate)"), /* @__PURE__ */ React.createElement("p", {
    className: "timeline__timeframe"
  }, "January 2025 - Present")), /* @__PURE__ */ React.createElement("div", {
    className: "timeline__desc"
  }, /* @__PURE__ */ React.createElement("p", null, "Joining Octoco has been a defining step in my career, allowing me to work on complex enterprise software that has significantly accelerated my growth as a software engineer. Since joining as a Junior Software Engineer and progressing into an Intermediate role, I've taken ownership of modernizing legacy systems, designing scalable backend services, and delivering software that solves complex real-world problems."), /* @__PURE__ */ React.createElement("p", null, "My work has focused heavily on modern .NET development, where I've rebuilt legacy enterprise applications from the ground up by migrating them from the .NET Framework to .NET 8. Along the way I've simplified architectures by removing legacy middleware dependencies, significantly improving performance, reliability, maintainability and operational visibility through modern engineering practices and improved observability."), /* @__PURE__ */ React.createElement("p", null, "I've had the opportunity to work alongside experienced Solution Architects to design and implement distributed microservice architectures deployed within on-premise Kubernetes environments. These projects have exposed me to technologies such as Kestra, Rancher, Elasticsearch, Sentry, RabbitMQ, MQTT and modern cloud-native development practices while reinforcing the importance of scalability, resilience and clean architecture."), /* @__PURE__ */ React.createElement("p", null, "Beyond backend development, I've contributed across the full technology stack, developing React and TypeScript frontends, Backend-for-Frontend (BFF) services, NestJS APIs and integrations with payment providers, enterprise systems and IoT-enabled hardware. Working on software that communicates with physical devices has been particularly rewarding, combining traditional backend engineering with real-time communication and systems integration."), /* @__PURE__ */ React.createElement("p", null, "What I enjoy most about Octoco is the level of trust and ownership I've been given. I've had the opportunity to lead significant modernization initiatives, contribute to architectural decisions, mentor colleagues in modern .NET development, and continuously expand my knowledge across backend engineering, infrastructure and distributed systems. Every project presents new challenges, and that's exactly what keeps software engineering exciting for me."))), /* @__PURE__ */ React.createElement("div", {
    className: "timeline__block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "timeline__bullet"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "timeline__header"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "timeline__title"
  }, "Sticitt"), /* @__PURE__ */ React.createElement("h5", {
    className: "timeline__meta"
  }, "Software Engineer (Intern → Junior Software Engineer)"), /* @__PURE__ */ React.createElement("p", {
    className: "timeline__timeframe"
  }, "May 2023 - December 2024")), /* @__PURE__ */ React.createElement("div", {
    className: "timeline__desc"
  }, /* @__PURE__ */ React.createElement("p", null, "Sticitt marked the beginning of my professional software engineering career. Starting as an intern while completing my university studies, I quickly transitioned into a full-time Software Engineer where I worked on enterprise applications used within the education sector. The experience provided an exceptional foundation in modern software development, introducing me to enterprise engineering practices, collaborative development and large production systems."), /* @__PURE__ */ React.createElement("p", null, "During my time at Sticitt I developed and maintained applications using C#, the .NET Framework, Blazor, Entity Framework Core and PostgreSQL while building REST APIs and integrating with existing SOAP services. I also worked extensively with Kubernetes deployments through Google Cloud Platform and ArgoCD, gaining valuable experience with modern DevOps workflows, production deployments and post-release validation."), /* @__PURE__ */ React.createElement("p", null, "One of my proudest achievements was redesigning and rebuilding the FE Parent Portal from the ground up. The project focused on delivering a significantly more modern, maintainable and user-friendly experience while improving both functionality and long-term maintainability."), /* @__PURE__ */ React.createElement("p", null, "Beyond writing software, I developed a strong appreciation for secure software engineering, code quality, teamwork and continuous improvement. I regularly participated in QA testing, contributed ideas for process improvements and embraced every opportunity to learn from more experienced engineers. Those experiences established the engineering principles that continue to guide how I design and build software today."))), /* @__PURE__ */ React.createElement("div", {
    className: "timeline__block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "timeline__bullet"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "timeline__header"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "timeline__title"
  }, "KLS Media"), /* @__PURE__ */ React.createElement("h5", {
    className: "timeline__meta"
  }, "Co-Founder & Creative Director"), /* @__PURE__ */ React.createElement("p", {
    className: "timeline__timeframe"
  }, "June 2021 - April 2023")), /* @__PURE__ */ React.createElement("div", {
    className: "timeline__desc"
  }, /* @__PURE__ */ React.createElement("p", null, "While studying at university, I co-founded KLS Media with a close friend after discovering a passion for filmmaking and commercial photography. What started as a creative hobby quickly grew into a small business serving clients across a variety of industries."), /* @__PURE__ */ React.createElement("p", null, "As a co-founder I was responsible for far more than creative production. I managed client relationships, planned and executed digital marketing campaigns, built websites and landing pages, developed lead generation funnels and helped businesses convert social media traffic into paying customers. I also directed and produced commercial videos, music videos and promotional photography while managing projects from initial concept through final delivery."), /* @__PURE__ */ React.createElement("p", null, "Running a business while completing my degree taught me invaluable lessons about entrepreneurship, communication, project management and delivering value to clients. Looking back, many of those skills continue to shape how I approach software engineering today. I don't just focus on writing quality code—I enjoy understanding the business challenges behind every solution and building software that genuinely solves problems."))))), /* @__PURE__ */ React.createElement("div", {
    className: "column lg-6 tab-12"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-pretitle",
    "data-animate-el": true
  }, "Education"), /* @__PURE__ */ React.createElement("div", {
    className: "timeline",
    "data-animate-el": true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "timeline__block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "timeline__bullet"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "timeline__header"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "timeline__title"
  }, "North West University"), /* @__PURE__ */ React.createElement("h5", {
    className: "timeline__meta"
  }, "Bsc. Information Technology"), /* @__PURE__ */ React.createElement("p", {
    className: "timeline__timeframe"
  }, "2020 - 2023")), /* @__PURE__ */ React.createElement("div", {
    className: "timeline__desc"
  }, /* @__PURE__ */ React.createElement("p", null, "During my time at North West University, I completed a wide range of modules that provided a solid foundation in both the theoretical and practical aspects of software engineering and IT. Notable areas of study included Advanced Databases, where I honed my data management and optimization skills, and Artificial Intelligence, where I developed a keen interest in machine learning algorithms. This passion for AI culminated in my final year, where I built a master's level self-driving car, applying advanced AI concepts to solve real-world challenges. Courses such as Data Structures and Algorithms further sharpened my problem-solving abilities. I also gained valuable hands-on experience through User Interface Programming and App Development, focusing on building efficient, user-friendly applications. In addition to these technical subjects, I immersed myself in Information Security, Operating Systems, and Computer Networks, which expanded my understanding of modern computing infrastructure. Courses like System Analysis and Design and IT Developments enhanced my ability to approach projects analytically, ensuring scalable and maintainable solutions. Outside the classroom, my university experience was enriched by extracurricular activities such as kickboxing and canoe polo. Kickboxing fostered discipline, resilience, and focus, traits that have directly influenced my work ethic in software engineering. Canoe polo, on the other hand, emphasized teamwork, quick thinking, and adaptability—skills essential in both sport and collaborative software projects. Balancing these activities with my academic commitments helped me become a well-rounded individual, ready to tackle complex challenges in the industry."))), /* @__PURE__ */ React.createElement("div", {
    className: "timeline__block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "timeline__bullet"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "timeline__header"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "timeline__title"
  }, "Helpmekaar Kollege"), /* @__PURE__ */ React.createElement("h5", {
    className: "timeline__meta"
  }, "National Senior Certificate (NSC)"), /* @__PURE__ */ React.createElement("p", {
    className: "timeline__timeframe"
  }, "2015 - 2019")), /* @__PURE__ */ React.createElement("div", {
    className: "timeline__desc"
  }, /* @__PURE__ */ React.createElement("p", null, "At Helpmekaar Kollege, I developed a strong interest in programming and IT, which set the foundation for my future in software engineering. During my time there, I actively sought out opportunities to explore technology, constantly learning and experimenting with coding projects. My academic achievements were complemented by my participation in a wide range of extracurricular activities, including field hockey, mountain biking, adventure racing, e-sports, and the English Olympiad. These activities helped build my resilience, leadership, and team-working skills, all of which I carried into my passion for programming. The combination of academic and extracurricular pursuits fostered my problem-solving abilities and adaptability, both of which have been instrumental in my growth as a software engineer. Helpmekaar Kollege provided me with the essential foundation I needed to pursue a degree in Information Technology and excel in the world of software development.")))))));
};
export default About;
