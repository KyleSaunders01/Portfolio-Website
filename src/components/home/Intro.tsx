import React, { useEffect } from "react";
import anime from 'animejs';


const Intro: React.FC = () => {

    useEffect(() => {
        // Animate the intro-social list items
        anime.timeline()
            .add({
                targets: '.intro-social li',
                translateX: [-50, 0],
                opacity: [0, 1],
                delay: anime.stagger(100, { direction: 'reverse' }), // Apply stagger effect in reverse order
                easing: 'easeOutExpo',
                duration: 1000
            })
            // Animate the intro-scrolldown
            .add({
                targets: '.intro-scrolldown',
                translateY: [100, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1000
            }, '-=800')  // Start 800ms before the previous animation finishes

            // Animate the text-pretitle and text-huge-title
            .add({
                targets: ['.s-intro .text-pretitle', '.s-intro .text-huge-title'],
                translateX: [100, 0],
                opacity: [0, 1],
                delay: anime.stagger(400), // Stagger between the pretitle and title
                easing: 'easeOutExpo',
                duration: 1000
            });
    }, []); // Empty dependency array to run only on component mount

    return (
        <section id="intro" className="s-intro target-section">

            <div className="row intro-content wide">

                <div className="column">
                    <div className="text-pretitle with-line">
                        Hello World
                    </div>

                    <h1 className="text-huge-title">
                        I am Kyle, <br/>
                        a Junior Software <br/>
                        Engineer based <br/>
                        in Cape Town,<br/>
                        South Africa.
                    </h1>
                </div>

                <ul className="intro-social">
                    <li><a href="https://www.linkedin.com/in/kyle-s-b43930239/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/KyleSaunders01" target="_blank">GitHub</a></li>
                    <li><a href="https://stackoverflow.com/users/22295366/kyle-saunders" target="_blank">StackOverflow</a></li>
                </ul>

            </div>

            <a href="#about" className="intro-scrolldown smoothscroll">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                     clipRule="evenodd">
                    <path
                        d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/>
                </svg>
            </a>

        </section>
    );
};

export default Intro;