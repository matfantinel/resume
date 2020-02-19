import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "mf-resume",
  styleUrl: "mf-resume.scss",
  shadow: true
})
export class MfResume {
  calcYearsSince(date: string) {
    const birthday = new Date(date);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  render() {
    return (
      <article class="resume">
        <section class="name-and-contact">
          <div>
            <h1>Matheus Fantinel</h1>
            <h5>Software Developer</h5>
          </div>
          <ul>
            <li class="birthday">
              <svg-icon name="birthday"></svg-icon>
              <span>{this.calcYearsSince("1995-08-24")} years old</span>
            </li>
            <li class="location">
              <svg-icon name="location"></svg-icon>
              <span>Caxias do Sul, RS, Brazil</span>
            </li>
            <li class="email">
              <svg-icon name="email"></svg-icon>
              <a href="mailto:matheus@fantinel.dev">matheus@fantinel.dev</a>
            </li>
            <li class="linkedin">
              <svg-icon name="linkedin"></svg-icon>
              <a
                href="https://www.linkedin.com/in/matheus-fantinel/"
                target="_blank"
              >
                LinkedIn Profile
              </a>
            </li>
            <li class="telegram">
              <svg-icon name="telegram"></svg-icon>
              <a href="https://t.me/MatFantinel" target="_blank">
                Say Hi on Telegram!
              </a>
            </li>
          </ul>
        </section>
        <section class="photo">
          <img
            class="avatar"
            src="https://www.gravatar.com/avatar/32608c8d8f273ce2b11ab0d3d8e02bf9?s=250&d=mm&r=x"
          />
        </section>
        <section class="about">
          <h5>About</h5>
          <p>
            I am a software engineer from Brazil specializing in building fast,
            beautiful and high-quality web apps. I also enjoy Open Source
            software, writing on my blog occasionally, and a little bit of
            gaming.{" "}
          </p>
        </section>
        <section class="work">
          {/* <h5>Professional Experience</h5>
          <div class="experience">
            <div class="title">
              <span><b>SIGE Cloud</b> — <i>Web Developer</i></span>
              <small>July 2017 - July 2019</small>
            </div>

            <h4>Responsibilities</h4>
            <ul>
              <li>Bringing complex designs to reality, based on visual mockups and prototypes;</li>
              <li>Analysis, planning and development of a web-based ERP software;</li>
              <li>Participating in the creation of new solutions to meet the market's needs;</li>
              <li>Development of internal tools to improve the company's customer support service;</li>
            </ul>

            <h4>Achievements</h4>
            <ul>
              <li>
                Big part on planning and developing a simplified ERP software focused on small companies, built from scratch;
              </li>
              <li>
                Development of an Android and iOS app that acts as an extension to the company’s main product;
              </li>
              <li>
                Development of an internal HelpDesk software, including the creation and execution of support tickets, as well
                as the creation of reports and views of general data;
              </li>
              <li>
                Partial automation of the HelpDesk system, utilizing Machine Learning to reduce the amount of opened tickets
                by over 10%;
              </li>
              <li>
                Successfully applying the Microfrontends approach to redesign and modernize a legacy product.
              </li>
            </ul>
          </div>

          <div class="experience">
            <div class="title">
              <span><b>Promob Software Solutions</b> — <i>Software Developer</i></span>
              <small>September 2014 - June 2017</small>
            </div>

            <h4>Responsibilities</h4>
            <ul>
              <li>Maintenance and modernization of the company's services portal;</li>
              <li>Development and maintenance of many APIs used by other development teams;</li>
              <li>
                Refactoring of the company’s internal software structure, according to changes in the business model;
              </li>
              <li>Integration with third-party softwares - CRM, HelpDesk and ERP;</li>
            </ul>
        </div> */}
        </section>
        <section class="education">
          <hr />
          <hr />
          <hr />
        </section>
        <section class="community">
          <hr />
          <hr />
          <hr />
        </section>
        <section class="skills">
          <hr />
          <hr />
          <hr />
          <hr />
        </section>
      </article>
    );
  }
}
