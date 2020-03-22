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
                h("a", { href: "https://github.com/matfantinel/resume/raw/master/Matheus%20Fantinel's%20Resum%C3%A9.pdf" }, "Download as PDF"))) : (""),
            h("section", { class: "name-and-contact" },
                h("div", null,
                    h("h1", null, "Matheus Fantinel"),
                    h("h5", null, "Software Developer")),
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
                        h("a", { href: "mailto:matheus@fantinel.dev" }, "matheus@fantinel.dev")),
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
                                h("span", { class: "company-name" }, "Dynasty Sports & Entertainment")),
                            h("small", null,
                                "Software Engineer | ",
                                h("svg-icon", { name: "location", small: true }),
                                " Remote | August 2019 ~ Now")),
                        h("ul", null,
                            h("li", null, "Development and maintenance of a Vue front-end, aiming to solve current pains and create new and better processes;"),
                            h("li", null, "Working with Azure Service Bus messages to execute tasks on demand;"),
                            h("li", null, "Automating of previously manual processes with Selenium, improving speed and capacity;"))),
                    h("div", { class: "experience" },
                        h("div", { class: "title" },
                            h("div", null,
                                h("span", { class: "company-name" }, "SIGE Cloud")),
                            h("small", null,
                                "Software Developer | ",
                                h("svg-icon", { name: "location", small: true }),
                                " Caxias do Sul | July 2017 ~ July 2019")),
                        h("ul", null,
                            h("li", null, "Big part on planning and developing a simplified ERP software focused on small companies, built from scratch;"),
                            h("li", null, "Development of an Android and iOS app that acts as an extension to the company\u2019s main product;"),
                            h("li", null, "Development of an internal HelpDesk software, including the creation and execution of support tickets, as well as the creation of reports and views of general data;"),
                            h("li", null, "Partial automation of the HelpDesk system, utilizing Machine Learning to reduce the amount of opened tickets by over 10%;"),
                            h("li", null, "Successfully applying the Microfrontends approach to redesign and modernize a legacy product;"))),
                    h("div", { class: "experience" },
                        h("div", { class: "title" },
                            h("div", null,
                                h("span", { class: "company-name" }, "Promob Software Solutions")),
                            h("small", null,
                                "Software Developer | ",
                                h("svg-icon", { name: "location", small: true }),
                                " Caxias do Sul | September 2014 ~ June 2017")),
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
