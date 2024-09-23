import React, { useEffect,useState } from "react";
import anime from "animejs";
import * as basicLightbox from 'basiclightbox';
import {BasicLightBox} from "basiclightbox";
// import { Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css';

const Works: React.FC = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const openModal = (modalId: string) => {
        setActiveModal(modalId);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    useEffect(() => {
        const ssLightbox = () => {
            const folioLinks = document.querySelectorAll('.folio-list__item-link');
            const modals: any[] = [];

            folioLinks.forEach(function (link) {
                let modalbox = link.getAttribute('href');
                if(modalbox)
                {
                    let modalElement = document.querySelector(modalbox);
                    if (!modalElement) return;

                    const instance = basicLightbox.create(modalElement, {
                        onShow: (instance: BasicLightBox) => {
                            // Add an event listener to close modal on Escape key press
                            const closeOnEscape = (event: KeyboardEvent) => {
                                if (event.key === 'Escape') {
                                    instance.close();
                                    document.removeEventListener('keydown', closeOnEscape);
                                }
                            };
                            document.addEventListener('keydown', closeOnEscape);

                            return true;
                        },
                    });

                    modals.push(instance);
                }
            });

            folioLinks.forEach(function (link, index) {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    modals[index].show();
                });
            });
        };

        ssLightbox();
    }, []);

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

            return () => {
                window.removeEventListener('scroll', viewportAnimation);
            };
        };

        ssViewAnimate();
    }, []);

    return (
        <section id="works" className="s-works target-section">


            <div className="row works-portfolio">

                <div className="column lg-12" data-animate-block>

                    <h2 className="text-pretitle" data-animate-el>
                        Recent Works
                    </h2>

                    <p className="h1" data-animate-el>
                        Here are some of my favorite projects I have done. Feel free to check them out.
                    </p>

                    <ul className="folio-list row block-lg-one-half block-stack-on-1000">

                        <li className="folio-list__item column" data-animate-el>
                            <a className="folio-list__item-link" href="#modal-01"  onClick={() => openModal('modal-01')}>
                                <div className="folio-list__item-pic">
                                    <img src="images/portfolio/JsAI.png"
                                         srcSet="images/portfolio/JsAI.png 1x, images/portfolio/JsAI@2x.png 2x"
                                         alt=""/>
                                </div>

                                <div className="folio-list__item-text">
                                    <div className="folio-list__item-cat">
                                    Genetic Learning Model with Js
                                    </div>
                                    <div className="folio-list__item-title">
                                        Js Self Driving Model.
                                    </div>
                                </div>
                            </a>
                            <a className="folio-list__proj-link" href="#" title="project link">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                        fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                        {/*end folio list item*/}

                        <li className="folio-list__item column" data-animate-el>
                            <a className="folio-list__item-link" href="#modal-02" onClick={() => openModal('modal-02')}>
                                <div className="folio-list__item-pic">
                                    <img src="images/portfolio/pythonAI.png"
                                         srcSet="images/portfolio/pythonAI.png 1x, images/portfolio/pythonAI@2x.png 2x"
                                         alt=""/>
                                </div>

                                <div className="folio-list__item-text">
                                    <div className="folio-list__item-cat">
                                        Imitation Learning Model with Python
                                    </div>
                                    <div className="folio-list__item-title">
                                        Python Self Driving Model.
                                    </div>
                                </div>
                            </a>
                            <a className="folio-list__proj-link" href="#" title="project link">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                        fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                        {/*end folio list item*/}

                        <li className="folio-list__item column" data-animate-el>
                            <a className="folio-list__item-link" href="#modal-03" onClick={() => openModal('modal-03')}>
                                <div className="folio-list__item-pic">
                                    <img src="images/portfolio/jbay.png"
                                         srcSet="images/portfolio/jbay.png 1x, images/portfolio/jbay@2x.png 2x"
                                         alt=""/>
                                </div>

                                <div className="folio-list__item-text">
                                    <div className="folio-list__item-cat">
                                        Journey Spotlight
                                    </div>
                                    <div className="folio-list__item-title">
                                        JBay Jols.
                                    </div>
                                </div>
                            </a>
                            <a className="folio-list__proj-link" href="#" title="project link">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                        fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                        {/*end folio list item*/}

                        <li className="folio-list__item column" data-animate-el>
                            <a className="folio-list__item-link" href="#modal-04" onClick={() => openModal('modal-04')}>
                                <div className="folio-list__item-pic">
                                    <img src="images/portfolio/damara.png"
                                         srcSet="images/portfolio/damara.png 1x, images/portfolio/damara@2x.png 2x"
                                         alt=""/>
                                </div>

                                <div className="folio-list__item-text">
                                    <div className="folio-list__item-cat">
                                        Hunting Promotion
                                    </div>
                                    <div className="folio-list__item-title">
                                        Into The Wilderness of Africa.
                                    </div>
                                </div>
                            </a>
                            <a className="folio-list__proj-link" href="#" title="project link">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                        fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                        {/*end folio list item*/}

                        <li className="folio-list__item column" data-animate-el>
                            <a className="folio-list__item-link" href="#modal-05" onClick={() => openModal('modal-05')}>
                                <div className="folio-list__item-pic">
                                    <img src="images/portfolio/gtr.png"
                                         srcSet="images/portfolio/gtr.png 1x, images/portfolio/gtr@2x.png 2x"
                                         alt=""/>
                                </div>

                                <div className="folio-list__item-text">
                                    <div className="folio-list__item-cat">
                                        Music Video
                                    </div>
                                    <div className="folio-list__item-title">
                                        Chasing Shadows.
                                    </div>
                                </div>
                            </a>
                            <a className="folio-list__proj-link" href="#" title="project link">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                        fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                        {/*end folio list item*/}

                        <li className="folio-list__item column" data-animate-el>
                            <a className="folio-list__item-link" href="#modal-06" onClick={() => openModal('modal-06')}>
                                <div className="folio-list__item-pic">
                                    <img src="images/portfolio/vv.png"
                                         srcSet="images/portfolio/vv.png 1x, images/portfolio/vv@2x.png 2x"
                                         alt=""/>
                                </div>

                                <div className="folio-list__item-text">
                                    <div className="folio-list__item-cat">
                                        Music Video
                                    </div>
                                    <div className="folio-list__item-title">
                                        Vuur & Vlam.
                                    </div>
                                </div>
                            </a>
                            <a className="folio-list__proj-link" href="#" title="project link">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                        fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                        {/*end folio list item*/}

                    </ul>
                    {/*end folio list*/}

                </div>
                {/*end column*/}


                {/*Modal templates popups*/}
                <div id="modal-01" className={`modal ${activeModal === 'modal-01' ? '' : 'hidden'}`}>
                    <div className="modal-popup">
                        <img src="images/portfolio/gallery/g-JsAI.png" alt=""/>

                        <div className="modal-popup__desc">
                            <h5>Retro Camera</h5>
                            <p>This project was used as a stepping stone to gain a better understanding of machine learning at a very basic level with the use of any libraries.
                            It's very fun machine learning game that is very visual and interactive. It's something I always come back to and play around with and try to improve.</p>
                            <ul className="modal-popup__cat">
                                <li>Genetic Learning Model</li>
                                <li>javascript</li>
                                <li>Machine Learning</li>
                            </ul>
                        </div>

                        <a href="https://github.com/KyleSaunders01/JavaScript_Self_driving_car" target="_blank" className="modal-popup__details">Project link</a>
                    </div>
                </div>
                {/*end modal*/}

                <div id="modal-02" hidden>
                    <div className="modal-popup">
                        <img src="images/portfolio/gallery/g-pythonAI.png" alt=""/>

                        <div className="modal-popup__desc">
                            <h5>Python Self Driving Model</h5>
                            <p>This was a project I did during university and I decided to take it to the next level and tackle a master's level Self Driving Model implementation.
                            I learned so much about machine learning and building self driving models during this project. Machine Learning is definitely a field that interests me.</p>
                            <ul className="modal-popup__cat">
                                <li>Imitation Learning Model</li>
                                <li>Python</li>
                                <li>tensorflow</li>
                                <li>openCv</li>
                                <li>Udacity Self Driving Car Sim</li>
                                <li>Machine Learning</li>
                            </ul>
                        </div>

                        <a href="https://github.com/KyleSaunders01/Python_Self_driving_car" target="_blank" className="modal-popup__details">Project link</a>
                    </div>
                </div>
                {/*end modal*/}

                <div id="modal-03" hidden>
                    <div className="modal-popup">
                        <img src="images/portfolio/gallery/g-jbay.png" alt=""/>

                        <div className="modal-popup__desc">
                            <h5>Jbay Jols</h5>
                            <p>This one was purely for fun. I was on a trip with the university's canoe club and I thought it would be fun to have a little memory piece of the trip to Jeffreys Bay.</p>
                            <ul className="modal-popup__cat">
                                <li>Journey Spotlight</li>
                                <li>Cinematography</li>
                            </ul>
                        </div>

                        <a href="https://www.youtube.com/watch?v=7qfvSTh2lfE" target="_blank" className="modal-popup__details">Project link</a>
                    </div>
                </div>
                {/*end modal*/}

                <div id="modal-04" hidden>
                    <div className="modal-popup">
                        <img src="images/portfolio/gallery/g-damara.png" alt=""/>

                        <div className="modal-popup__desc">
                            <h5>Into The Wilderness of Africa</h5>
                            <p>This project was a great way for me to express my passion for nature & wildlife conservation, while also reaching a specific audience to market an experience.
                                I took the skills I've acquired to make a video that promotes a product/experience well and also gives an euphoric feeling to the viewer.
                            </p>
                            <ul className="modal-popup__cat">
                                <li>Hunting Promotion</li>
                                <li>Marketing Campaign</li>
                            </ul>
                        </div>

                        <a href="https://www.youtube.com/watch?v=2gPWIvPV8-Q" target="_blank" className="modal-popup__details">Project link</a>
                    </div>
                </div>
                {/*end modal*/}

                <div id="modal-05" hidden>
                    <div className="modal-popup">

                        <img src="images/portfolio/gallery/g-gtr.png" alt=""/>

                        <div className="modal-popup__desc">
                            <h5>Chasing Shadows - GoTheRodeo</h5>
                            <p>This was an amazing project, with the help of some very talented people we were able to create an absolute masterpiece with this video.
                                It was so much fun and I learned a ton from this experience.
                                Craig the drummer of GTR actually taught me how to play drums when I was still in school.</p>
                            <ul className="modal-popup__cat">
                                <li>Music Video</li>
                                <li>Director</li>
                                <li>Cinematographer</li>
                                <li>Co-Editor</li>
                            </ul>
                        </div>

                        <a href="https://www.youtube.com/watch?v=YGfjlyisR2Y" target="_blank" className="modal-popup__details">Project link</a>
                    </div>
                </div>
                {/*end modal*/}

                <div id="modal-06" hidden>
                    <div className="modal-popup">
                        <img src="images/portfolio/gallery/g-vv.png" alt=""/>

                        <div className="modal-popup__desc">
                            <h5>Vuur & Vlam - Van West</h5>
                            <p>I've had the privilege working alongside industry leading director Jannes Erasmus and cinematographer Ben Badenhorst with creating the music video for Vuur & Vlam, an Afrikaans hit song.
                                A bunch of great people came together to make this project possible, making it something that was truly special.
                            </p>
                            <ul className="modal-popup__cat">
                                <li>Music Video</li>
                                <li>Cinematographer</li>
                            </ul>
                        </div>

                        <a href="https://www.youtube.com/watch?v=T99gpP8RGJE" target="_blank" className="modal-popup__details">Project link</a>
                    </div>
                </div>
                {/*end modal*/}

            </div>
            {/*end works portfolio*/}

            {/*/!*Testimonials*!/*/}
            {/*<div className="row testimonials">*/}
            {/*    <div className="column lg-12">*/}

            {/*        <Swiper*/}
            {/*            spaceBetween={50}*/}
            {/*            slidesPerView={1}*/}
            {/*            pagination={{clickable: true}}*/}
            {/*            modules={[Pagination, Navigation]}*/}
            {/*            >*/}
            {/*            <SwiperSlide>*/}
            {/*                <div className="testimonial-slider__slide swiper-slide">*/}
            {/*                    <div className="testimonial-slider__author">*/}
            {/*                        <img src="images/avatars/user-02.jpg" alt="Author image"*/}
            {/*                             className="testimonial-slider__avatar"/>*/}
            {/*                        <cite className="testimonial-slider__cite">*/}
            {/*                            <strong>Tim Cook</strong>*/}
            {/*                            <span>CEO, Apple</span>*/}
            {/*                        </cite>*/}
            {/*                    </div>*/}
            {/*                    <p>*/}
            {/*                        Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore*/}
            {/*                        rem.*/}
            {/*                        Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores*/}
            {/*                        quaerat fuga rem nihil nostrum.*/}
            {/*                        Laudantium quia consequatur molestias delectus culpa.*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*                /!*end testimonial slider slide*!/*/}
            {/*            </SwiperSlide>*/}
            {/*            <SwiperSlide>*/}
            {/*                <div className="testimonial-slider__slide swiper-slide">*/}
            {/*                    <div className="testimonial-slider__author">*/}
            {/*                        <img src="images/avatars/user-03.jpg" alt="Author image"*/}
            {/*                             className="testimonial-slider__avatar"/>*/}
            {/*                        <cite className="testimonial-slider__cite">*/}
            {/*                            <strong>Sundar Pichai</strong>*/}
            {/*                            <span>CEO, Google</span>*/}
            {/*                        </cite>*/}
            {/*                    </div>*/}
            {/*                    <p>*/}
            {/*                        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat*/}
            {/*                        voluptas animi adipisci.*/}
            {/*                        Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.*/}
            {/*                        Quasi voluptas eius distinctio. Atque eos maxime.*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*                /!*end testimonial slider slide*!/*/}
            {/*            </SwiperSlide>*/}
            {/*            <SwiperSlide>*/}
            {/*                <div className="testimonial-slider__slide swiper-slide">*/}
            {/*                    <div className="testimonial-slider__author">*/}
            {/*                        <img src="images/avatars/user-01.jpg" alt="Author image"*/}
            {/*                             className="testimonial-slider__avatar"/>*/}
            {/*                        <cite className="testimonial-slider__cite">*/}
            {/*                            <strong>Satya Nadella</strong>*/}
            {/*                            <span>CEO, Microsoft</span>*/}
            {/*                        </cite>*/}
            {/*                    </div>*/}
            {/*                    <p>*/}
            {/*                        Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea*/}
            {/*                        quia nesciunt. Ducimus aut sed ipsam.*/}
            {/*                        Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas*/}
            {/*                        eius distinctio.*/}
            {/*                        Voluptatem dignissimos ut.*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*                /!*end testimonial slider slide*!/*/}
            {/*            </SwiperSlide>*/}
            {/*            <SwiperSlide>*/}
            {/*                <div className="testimonial-slider__slide swiper-slide">*/}
            {/*                    <div className="testimonial-slider__author">*/}
            {/*                        <img src="images/avatars/user-06.jpg" alt="Author image"*/}
            {/*                             className="testimonial-slider__avatar"/>*/}
            {/*                        <cite className="testimonial-slider__cite">*/}
            {/*                            <strong>Jeff Bezos</strong>*/}
            {/*                            <span>CEO, Amazon</span>*/}
            {/*                        </cite>*/}
            {/*                    </div>*/}
            {/*                    <p>*/}
            {/*                        Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui.*/}
            {/*                        In ac felis*/}
            {/*                        quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti*/}
            {/*                        expedita voluptas odit.*/}
            {/*                        Nihil ea quia nesciunt. Ducimus aut sed ipsam.*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*                /!*end testimonial slider slide*!/*/}
            {/*            </SwiperSlide>*/}
            {/*        </Swiper>*/}
            {/*    </div>*/}
            {/*    /!*end column*!/*/}
            {/*</div>*/}
            {/*/!*end row testimonials*!/*/}

        </section>
    );
};

export default Works;