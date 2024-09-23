import React, { useEffect } from "react";
import anime from "animejs";

const About: React.FC = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/assets/Kyle_Saunders_CV.pdf'; // Replace with the correct path to your PDF
        link.download = 'Kyle_Saunders_CV.pdf';   // Specify the downloaded file name
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
                    const triggerTop = (current as HTMLElement).offsetTop + (viewportHeight * 0.2) - viewportHeight;
                    const blockHeight = (current as HTMLElement).offsetHeight;
                    const blockSpace = triggerTop + blockHeight;
                    const inView = scrollY > triggerTop && scrollY <= blockSpace;
                    const isAnimated = (current as HTMLElement).classList.contains("ss-animated");

                    if (inView && !isAnimated) {
                        anime({
                            targets: (current as HTMLElement).querySelectorAll("[data-animate-el]"),
                            opacity: [0, 1],
                            translateY: [100, 0],
                            delay: anime.stagger(400, { start: 200 }),
                            duration: 800,
                            easing: 'easeInOutCubic',
                            begin: () => {
                                (current as HTMLElement).classList.add("ss-animated");
                            }
                        });
                    }
                });
            };

            window.addEventListener('scroll', viewportAnimation);

            // Clean up the scroll event listener when the component is unmounted
            return () => {
                window.removeEventListener('scroll', viewportAnimation);
            };
        };

        ssViewAnimate();
    }, []);

    return (
        <section id="about" className="s-about target-section">

            <div className="row about-info wide" data-animate-block >

                <div className="column lg-6 md-12 about-info__pic-block">
                    <img src="images/about-photo.jpg"
                         srcSet="images/about-photo.jpg 1x, images/about-photo@2x.jpg 2x" alt=""
                         className="about-info__pic" data-animate-el/>
                </div>

                <div className="column lg-6 md-12">
                    <div className="about-info__text">
                        <h2 className="text-pretitle with-line" data-animate-el>
                            About
                        </h2>
                        <p className="attention-getter" data-animate-el>
                            I'm a dedicated software engineer with a passion for problem-solving and continuous learning.
                            I’m reliable, adaptable, and thrive in dynamic environments, whether working independently or as part of a team.
                            I earned my Bachelor of Science in Information Technology from North West University, where I balanced academics with extracurriculars like kickboxing and canoe polo.
                            I enjoy tackling complex technical challenges, designing scalable systems, and applying cutting-edge technologies to create impactful solutions.
                        </p>
                        <button onClick={handleDownload} className="btn btn--medium u-fullwidth" data-animate-el>Download CV</button>

                    </div>
                </div>
            </div>
            {/*about info*/}



            <div className="row about-expertise" data-animate-block>
                <div className="column lg-12">

                    <h2 className="text-pretitle" data-animate-el>Expertise</h2>

                    <ul className="skills-list h1" data-animate-el>
                        <li>Software Architecture</li>
                        <li>Algorithm Design & Optimization</li>
                        <li>Full-Stack Development</li>
                        <li>API Design & Integration</li>
                        <li>DevOps & CI/CD</li>
                        <li>Test-Driven Development</li>
                    </ul>

                </div>
            </div>
            {/*end about expertise*/}


            <div className="row about-timelines" data-animate-block>

                <div className="column lg-6 tab-12">

                    <h2 className="text-pretitle" data-animate-el>
                        Experience
                    </h2>

                    <div className="timeline" data-animate-el>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">Sticitt</h4>
                                <h5 className="timeline__meta">Junior Software Engineer</h5>
                                <p className="timeline__timeframe">November 2023 - Present</p>
                            </div>
                            <div className="timeline__desc">
                                <p>Joining Sticitt as my first full-time job after university, I am acquiring extensive knowledge in various technologies, methodologies, and best practices. I am committed to continuously honing and applying these skills on a daily basis.
                                    I consistently identify opportunities for improvement, a practice that shines through in my QA testing rounds. I ensure strict compliance with data security and industry regulations, enforcing these standards by implementing the OWASP API Security guidelines when building applications.
                                    I am learning the value of teamwork and recognising that each team member can have a different approach. Experiencing this teaches me to appreciate the importance of viewing challenges from diverse perspectives. I am also learning how crucial it is to stay committed to maintaining solid fundamental knowledge and staying up-to-date with the latest advancements in computer science.
                                    Colleagues have noted that I am extremely easy to work with and that I never miss a deadline—qualities that have even led to the adoption of a new company value: perseverance.
                                    I am gaining extensive experience with a broad range of technologies, including .NET, Blazor, Entity Framework Core, PostgreSQL, xUnit, Google Cloud Platform (GCP), GitHub, Git, RabbitMQ, gRPC, REST, HTML5, CSS, C#, Kotlin, and JavaScript.</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">Sticitt</h4>
                                <h5 className="timeline__meta">Internship Program</h5>
                                <p className="timeline__timeframe">May 2023 - October 2023</p>
                            </div>
                            <div className="timeline__desc">
                                <p>During this internship I learnt all the basics of what it takes to be a full stack web developer. I developed several projects using the .NET Framework with Blazor as the front end and PostgreSQL as the database. I handled database interactions through Entity Framework Core and implemented REST APIs to facilitate communication between the front end and back end.
                                    I was thrown into the deep end and learnt multiple new technologies in a few months, I love learning like this. I first developed a basic wish list app to get acquainted with the technologies. After that, I was assigned to build an application that also included authentication and session management to track users, who in this case were the company's employees. The app had to track Fines, Nominations and Log assistance between employees.
                                    During my time building the the Fine, Nomination and Logging app, I also built a E-commerce site to take my understanding of those technologies even further and to apply it to the logging app as I really like to challenge myself to learn as much as I can.</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">KLS Media</h4>
                                <h5 className="timeline__meta">Cinematographer & Photographer</h5>
                                <p className="timeline__timeframe">June 2021 - December 2022</p>
                            </div>
                            <div className="timeline__desc">
                                <p>I started making videos of some gaming products when I was in high school and started to enjoy the filmmaking process a lot.
                                    I streamed some of my e-sport matches and did some more gaming videos and it really grew on me as hobby.
                                    When I got to University I took some pictures for friends and made some videos of cars and one day I decided to start a little part time business with my partner making videos and taking photos. We learnt how to source clients, do marketing, hire other creatives to help us with work, work as a well functioning team and most importantly take amazing pictures and make brilliant videos.</p>
                            </div>
                        </div>

                    </div>
                    {/*end timeline*/}

                </div>
                {/*end column*/}

                <div className="column lg-6 tab-12">

                    <h2 className="text-pretitle" data-animate-el>
                        Education
                    </h2>

                    <div className="timeline" data-animate-el>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">North West University</h4>
                                <h5 className="timeline__meta">Bsc. Information Technology</h5>
                                <p className="timeline__timeframe">2020 - 2023</p>
                            </div>
                            <div className="timeline__desc">
                                <p>During my time at North West University, I completed a wide range of modules that provided a solid foundation in both the theoretical and practical aspects of software engineering and IT.
                                    Notable areas of study included Advanced Databases, where I honed my data management and optimization skills, and Artificial Intelligence, where I developed a keen interest in machine learning algorithms.
                                    This passion for AI culminated in my final year, where I built a master's level self-driving car, applying advanced AI concepts to solve real-world challenges.
                                    Courses such as Data Structures and Algorithms further sharpened my problem-solving abilities. I also gained valuable hands-on experience through User Interface Programming and App Development, focusing on building efficient, user-friendly applications.
                                    In addition to these technical subjects, I immersed myself in Information Security, Operating Systems, and Computer Networks, which expanded my understanding of modern computing infrastructure.
                                    Courses like System Analysis and Design and IT Developments enhanced my ability to approach projects analytically, ensuring scalable and maintainable solutions.
                                    Outside the classroom, my university experience was enriched by extracurricular activities such as kickboxing and canoe polo. Kickboxing fostered discipline, resilience, and focus, traits that have directly influenced my work ethic in software engineering.
                                    Canoe polo, on the other hand, emphasized teamwork, quick thinking, and adaptability—skills essential in both sport and collaborative software projects.
                                    Balancing these activities with my academic commitments helped me become a well-rounded individual, ready to tackle complex challenges in the industry.</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">Helpmekaar Kollege</h4>
                                <h5 className="timeline__meta">National Senior Certificate (NSC)</h5>
                                <p className="timeline__timeframe">2015 - 2019</p>
                            </div>
                            <div className="timeline__desc">
                                <p>At Helpmekaar Kollege, I developed a strong interest in programming and IT, which set the foundation for my future in software engineering. During my time there, I actively sought out opportunities to explore technology, constantly learning and experimenting with coding projects.
                                    My academic achievements were complemented by my participation in a wide range of extracurricular activities, including field hockey, mountain biking, adventure racing, e-sports, and the English Olympiad.
                                    These activities helped build my resilience, leadership, and team-working skills, all of which I carried into my passion for programming.
                                    The combination of academic and extracurricular pursuits fostered my problem-solving abilities and adaptability, both of which have been instrumental in my growth as a software engineer.
                                    Helpmekaar Kollege provided me with the essential foundation I needed to pursue a degree in Information Technology and excel in the world of software development.</p>
                            </div>
                        </div>

                    </div>
                    {/*end timeline*/}

                </div>
                {/*end column*/}


            </div>
            {/*end about timelines*/}

        </section>
    );
};

export default About;