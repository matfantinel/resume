import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "mf-resume",
  styleUrl: "mf-resume.scss",
  shadow: true
})
export class MfResume {
  @Prop() showDownloadLink: boolean = false;

  calcYearsSince(date: string) {
    const birthday = new Date(date);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  render() {
    return (
      <article class="resume">
        {this.showDownloadLink ? (
          <div class="download-pdf screen-only">
            <a href="https://github.com/matfantinel/resume/raw/master/Matheus%20Fantinel's%20Resume.pdf">
              Download as PDF
            </a>
          </div>
        ) : (
          ""
        )}
        <section class="name-and-contact">
          <div>
            <mf-logotype></mf-logotype>
            <h5>Web Developer</h5>
          </div>
          <ul>
            <li class="birthday">
              <svg-icon name="birthday"></svg-icon>
              <span>{this.calcYearsSince("1995-08-24")} years old</span>
            </li>
            <li class="experience">
              <svg-icon name="experience"></svg-icon>
              <span>
                {this.calcYearsSince("2014-09-22")} years of experience
              </span>
            </li>
            <li class="location">
              <svg-icon name="location"></svg-icon>
              <span>Caxias do Sul, RS, Brazil</span>
            </li>
            <li class="email">
              <svg-icon name="email"></svg-icon>
              <a href="mailto:matt@fantinel.dev">matt@fantinel.dev</a>
            </li>
            <li class="linkedin screen-only">
              <svg-icon name="linkedin"></svg-icon>
              <a
                href="https://www.linkedin.com/in/matheus-fantinel/"
                target="_blank"
              >
                LinkedIn Profile
              </a>
            </li>
            <li class="website">
              <svg-icon name="website"></svg-icon>
              <a href="https://fantinel.dev" target="_blank">
                fantinel.dev
              </a>
            </li>
            <li class="github screen-only">
              <svg-icon name="github"></svg-icon>
              <a href="https://github.com/matfantinel" target="_blank">
                GitHub Profile
              </a>
            </li>
            <li class="languages">
              <svg-icon name="languages"></svg-icon>
              <span>English, Portuguese</span>
            </li>
          </ul>
        </section>
        <section class="photo">
          <img
            class="avatar"
            src="https://www.gravatar.com/avatar/d3e0755978911619f8979bef9d843b44?s=250&d=mm&r=x"
          />
        </section>
        <section class="about">
          <p class="section-title">About</p>
          <p>
            I have a passion for building fast, responsive and pretty UIs,
            bringing great designs to reality and improving them as they get
            built. I love learning new things and applying them in practical
            solutions, either improving existing services or building completely
            new ones.
          </p>
        </section>
        <section class="work">
          <p class="section-title">Professional Experience</p>

          <div class="experiences-container">
            <div class="experience">
              <div class="title">
                <div>
                  <span class="company-name">
                    Dynasty Sports & Entertainment
                  </span>
                </div>
                <small>Software Engineer | <svg-icon name="location" small={true}></svg-icon> Remote | August 2019 ~ Now</small>
              </div>

              <ul>
                <li>
                  Working on a Vue front-end project, aiming to solve current pains 
                  and create new and better processes to manage ticket sales and brokerage;
                </li>
                <li>
                  Automating of previously manual processes with Selenium,
                  improving speed and scalability;
                </li>
              </ul>
            </div>

            <div class="experience">
              <div class="title">
                <div>
                  <span class="company-name">SIGE Cloud</span>
                </div>
                <small>Software Developer | <svg-icon name="location" small={true}></svg-icon> Brazil | July 2017 ~ July 2019</small>
              </div>

              <ul>
                <li>
                  Successfully applying the Microfrontends approach to redesign
                  and modernize a legacy product;
                </li>
                <li>
                  Big part on planning and developing a simplified ERP software
                  focused on small companies, built from scratch;
                </li>
                <li>
                  Development of a mobile app that acts as an
                  extension to the company’s main product;
                </li>
                <li>
                  Development of an internal HelpDesk software, including the
                  creation and execution of support tickets, as well as the
                  creation of reports and views of general data;
                </li>
                <li>
                  Partial automation of the HelpDesk system, utilizing Machine
                  Learning to reduce the amount of opened tickets by over 10%;
                </li>                
              </ul>
            </div>

            <div class="experience">
              <div class="title">
                <div>
                  <span class="company-name">Promob Software Solutions</span>
                </div>
                <small>Software Developer | <svg-icon name="location" small={true}></svg-icon> Brazil | September 2014 ~ June 2017</small>
              </div>

              <ul>
                <li>
                  Maintenance and modernization of the company's services
                  portal;
                </li>
                <li>
                  Development and maintenance of many APIs used by other
                  development teams;
                </li>
                <li>
                  Refactoring of the company’s internal software structure,
                  according to changes in the business model;
                </li>
                <li>
                  Integration with third-party CRM, HelpDesk and ERP softwares;
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="education">
          <p class="section-title">Education</p>
          <span>
            Graduated as a{" "}
            <u>Technologist in System Analysis and Development</u> at{" "}
            <i>Centro Universitário da Serra Gaúcha</i>, 2018.
          </span>
        </section>
        <section class="skills">
          <p class="section-title">Skills</p>

          <ul>
            <li>
              Front-end
              <div class="tags-container">
                <span class="tag">Angular</span>
                <span class="tag">Vue</span>
                <span class="tag">TypeScript</span>
                <span class="tag">JavaScript</span>
                <span class="tag">UX</span>
                <span class="tag">SASS</span>
                <span class="tag">Ionic</span>
                <span class="tag">Electron</span>
                <span class="tag">PWAs</span>
              </div>
            </li>
            <li>
              Back-end
              <div class="tags-container">
                <span class="tag secondary">C#</span>
                <span class="tag secondary">.NET</span>
                <span class="tag secondary">NodeJS</span>
                <span class="tag secondary">MongoDB</span>
                <span class="tag secondary">SQL Server</span>
                <span class="tag secondary">LiteDB</span>
              </div>
            </li>
          </ul>
        </section>
      </article>
    );
  }
}
