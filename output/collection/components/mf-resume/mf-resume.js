import { h } from "@stencil/core";
export class MfResume {
    constructor() {
        this.showDownloadLink = false;
    }
    calcYearsSince(date) {
        const birthday = new Date(date);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    render() {
        return (h("article", { class: "resume" },
            this.showDownloadLink ? (h("div", { class: "download-pdf screen-only" },
                h("a", { href: "https://github.com/matfantinel/resume/raw/master/Matheus%20Fantinel's%20Resume.pdf" }, "Download as PDF"))) : (""),
            h("section", { class: "name-and-contact" },
                h("div", null,
                    h("h1", null, "Matheus Fantinel"),
                    h("h5", null, "Web Developer")),
                h("ul", null,
                    h("li", { class: "birthday" },
                        h("svg-icon", { name: "birthday" }),
                        h("span", null,
                            this.calcYearsSince("1995-08-24"),
                            " years old")),
                    h("li", { class: "experience" },
                        h("svg-icon", { name: "experience" }),
                        h("span", null,
                            this.calcYearsSince("2014-09-22"),
                            " years of experience")),
                    h("li", { class: "location" },
                        h("svg-icon", { name: "location" }),
                        h("span", null, "Caxias do Sul, RS, Brazil")),
                    h("li", { class: "email" },
                        h("svg-icon", { name: "email" }),
                        h("a", { href: "mailto:matt@fantinel.dev" }, "matt@fantinel.dev")),
                    h("li", { class: "linkedin screen-only" },
                        h("svg-icon", { name: "linkedin" }),
                        h("a", { href: "https://www.linkedin.com/in/matheus-fantinel/", target: "_blank" }, "LinkedIn Profile")),
                    h("li", { class: "website" },
                        h("svg-icon", { name: "website" }),
                        h("a", { href: "https://fantinel.dev", target: "_blank" }, "fantinel.dev")),
                    h("li", { class: "github screen-only" },
                        h("svg-icon", { name: "github" }),
                        h("a", { href: "https://github.com/matfantinel", target: "_blank" }, "GitHub Profile")),
                    h("li", { class: "languages" },
                        h("svg-icon", { name: "languages" }),
                        h("span", null, "English, Portuguese")))),
            h("section", { class: "photo" },
                h("img", { class: "avatar", src: "https://www.gravatar.com/avatar/d3e0755978911619f8979bef9d843b44?s=250&d=mm&r=x" })),
            h("section", { class: "about" },
                h("p", { class: "section-title" }, "About"),
                h("p", null, "I have a passion for building fast, responsive and pretty UIs, bringing great designs to reality and improving them as they get built. I love learning new things and applying them in practical solutions, either improving existing services or building completely new ones.")),
            h("section", { class: "work" },
                h("p", { class: "section-title" }, "Professional Experience"),
                h("div", { class: "experiences-container" },
                    h("div", { class: "experience" },
                        h("div", { class: "title" },
                            h("div", null,
                                h("span", { class: "company-name" }, "Logitix")),
                            h("small", null,
                                "Software Engineer | ",
                                h("svg-icon", { name: "location", small: true }),
                                " Remote | August 2019 ~ February 2021")),
                        h("ul", null,
                            h("li", null, "Working on a Vue front-end project, aiming to solve current pains and create new and better processes to manage ticket sales and brokerage in the US;"),
                            h("li", null, "Building new ways of viewing and interacting with huge amounts of data;"),
                            h("li", null, "Automating previously manual processes with Selenium, improving speed and capacity;"))),
                    h("div", { class: "experience" },
                        h("div", { class: "title" },
                            h("div", null,
                                h("span", { class: "company-name" }, "SIGE Cloud")),
                            h("small", null,
                                "Software Developer | ",
                                h("svg-icon", { name: "location", small: true }),
                                " Brazil | July 2017 ~ July 2019")),
                        h("ul", null,
                            h("li", null, "Applying the Microfrontends approach to modernize a legacy product;"),
                            h("li", null, "Developing a desktop app from scratch for a simplified ERP focused on small companies;"),
                            h("li", null, "Developing a mobile app that acts as an extension to the company\u2019s main product;"),
                            h("li", null, "Developing an internal HelpDesk software using Artificial Intelligence to help users before they even opened the ticket;"))),
                    h("div", { class: "experience" },
                        h("div", { class: "title" },
                            h("div", null,
                                h("span", { class: "company-name" }, "Promob Software Solutions")),
                            h("small", null,
                                "Software Developer | ",
                                h("svg-icon", { name: "location", small: true }),
                                " Brazil | September 2014 ~ June 2017")),
                        h("ul", null,
                            h("li", null, "Maintenance and modernization of the company's services portal;"),
                            h("li", null, "Development and maintenance of many APIs used by other development teams;"),
                            h("li", null, "Refactoring of the company\u2019s internal software structure, according to changes in the business model;"),
                            h("li", null, "Integration with third-party CRM, HelpDesk and ERP softwares;"))))),
            h("section", { class: "education" },
                h("p", { class: "section-title" }, "Education"),
                h("span", null,
                    "Graduated as a",
                    " ",
                    h("u", null, "Technologist in System Analysis and Development"),
                    " at",
                    " ",
                    h("i", null, "Centro Universit\u00E1rio da Serra Ga\u00FAcha"),
                    ", 2018.")),
            h("section", { class: "skills" },
                h("p", { class: "section-title" }, "Skills"),
                h("ul", null,
                    h("li", null,
                        "Front-end",
                        h("div", { class: "tags-container" },
                            h("span", { class: "tag" }, "Angular"),
                            h("span", { class: "tag" }, "Vue"),
                            h("span", { class: "tag" }, "TypeScript"),
                            h("span", { class: "tag" }, "JavaScript"),
                            h("span", { class: "tag" }, "UX"),
                            h("span", { class: "tag" }, "SASS"),
                            h("span", { class: "tag" }, "Ionic"),
                            h("span", { class: "tag" }, "Electron"),
                            h("span", { class: "tag" }, "PWAs"))),
                    h("li", null,
                        "Back-end",
                        h("div", { class: "tags-container" },
                            h("span", { class: "tag secondary" }, "C#"),
                            h("span", { class: "tag secondary" }, ".NET"),
                            h("span", { class: "tag secondary" }, "NodeJS"),
                            h("span", { class: "tag secondary" }, "MongoDB"),
                            h("span", { class: "tag secondary" }, "SQL Server"),
                            h("span", { class: "tag secondary" }, "LiteDB")))))));
    }
    static get is() { return "mf-resume"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["mf-resume.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["mf-resume.css"]
    }; }
    static get properties() { return {
        "showDownloadLink": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show-download-link",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
