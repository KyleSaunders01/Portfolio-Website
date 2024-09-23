import React from "react";

const Footer = () => {
    return (
        <footer className="s-footer">

            <div className="row">
                <div className="column ss-copyright">
                    <span>Kyle.</span>
                    <span>Built with <a href="https://react.dev/" target="_blank">React.ts</a> and <a
                        href="https://tailwindcss.com/" target="_blank">tailwind.css</a></span>
                </div>

                <div className="ss-go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd"
                             clipRule="evenodd">
                            <path
                                d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/>
                        </svg>
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;