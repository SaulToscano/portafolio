<template>
  <section class="about active section" id="about">
    <div class="container">
      <div class="row">
        <div class="section-title padd-15">
          <h2>About Me</h2>
        </div>
      </div>

      <div class="row">
        <div class="about-content padd-15">
          <div class="row">
            <div class="about-text padd-15">
              <h3>I'm Saul Toscano, <span>Fullstack Developer</span></h3>
              <p>
                I'm a Computer Systems Engineering graduated, and
                i'm a fullstack developer, web, api's, and mobile developer.
                Always searching for the best tools and practices to give my
                clients the best products in the market, committed and dedicated
                always looking to be better everyday
              </p>
            </div>
          </div>
          <div class="row">
            <div class="personal-info padd-15">
              <div class="row">
                <div class="info-item padd-15">
                  <p>Birthday: <span>August 11, 1996</span></p>
                </div>
                <div class="info-item padd-15">
                  <p>Age: <span>28</span></p>
                </div>
                <div class="info-item padd-15">
                  <p>GitHub: <span>github.com/SaulToscano</span></p>
                </div>
                <div class="info-item padd-15">
                  <p>Email: <span>saul.toscano.robles@gmail.com</span></p>
                </div>
                <div class="info-item padd-15">
                  <p>Location: <span>Mexico</span></p>
                </div>
                <div class="info-item padd-15">
                  <p>City: <span>Tijuana</span></p>
                </div>
                <div class="info-item padd-15">
                  <p>Degree: <span>Computer Systems Engr.</span></p>
                </div>
                <div class="info-item padd-15">
                  <p>Freelance: <span>Available</span></p>
                </div>
              </div>
              <div class="row">
                <div class="buttons padd-15">
                  <button @click="openPDF" class="btn" style="cursor: pointer;">View CV</button>
                </div>
              </div>
            </div>

            <!-- Skills -->
            <div class="skills padd-15">
              <div class="row">
                <fragments-skill name="Frontend" percentage="80" />
                <fragments-skill name="Backend" percentage="80" />
                <fragments-skill name="SysAdmin" percentage="70" />
              </div>
            </div>

          </div>

          <div class="row">
            <div class="technologies-tools padd-15">
              <h3 class="title">Technologies & Tools</h3>

              <div class="row">

                <fragments-technologies name="vscode-icons:file-type-html" tooltip="HTML" />
                <fragments-technologies name="vscode-icons:file-type-css" tooltip="CSS" />
                <fragments-technologies name="logos:java" tooltip="Java" />
                <fragments-technologies name="devicon:csharp" tooltip="C#" />
                <fragments-technologies name="vscode-icons:file-type-js-official" tooltip="JS" />
                <fragments-technologies name="logos:react" tooltip="React" />
                <fragments-technologies name="vscode-icons:file-type-vue" tooltip="Vue" />
                <fragments-technologies name="vscode-icons:file-type-angular" tooltip="Angular" />
                <fragments-technologies name="devicon:nodejs" tooltip="Node" />
                <fragments-technologies name="simple-icons:express" tooltip="Express" color="black" />
                <fragments-technologies name="logos:nestjs" tooltip="NestJS" />
                <fragments-technologies name="logos:swagger" tooltip="Swagger" />
                <fragments-technologies name="logos:jest" tooltip="Jest" />
                <fragments-technologies name="devicon:npm" tooltip="NPM" />
                <fragments-technologies name="logos:yarn" tooltip="Yarn" />
                <fragments-technologies name="logos:element" tooltip="Element" />
                <fragments-technologies name="logos:mantine-icon" tooltip="Mantine" />
                <fragments-technologies name="skill-icons:bootstrap" tooltip="Bootstrap" />
                <fragments-technologies name="simple-icons:fontawesome" tooltip="Fontawesome" color="#214087" />
                <fragments-technologies name="simple-icons:iconify" tooltip="Iconify" color="black" />
                <fragments-technologies name="logos:visual-studio-code" tooltip="Visual Studio" />
                <fragments-technologies name="devicon:git" tooltip="Git" />
                <fragments-technologies name="mdi:github" tooltip="Github" color="#181616" />
                <fragments-technologies name="logos:docker-icon" tooltip="Docker" />
                <fragments-technologies name="devicon:jiraalign" tooltip="Jira" />
                <fragments-technologies name="logos:confluence" tooltip="Confluence" />

              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="row">
            <div class="education padd-15">
              <h3 class="title">Education</h3>
              <div class="row">
                <div class="timeline-box padd-15">
                  <div class="timeline shadow-dark">
                    <!-- timeline item -->
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-date">
                        <Icon name="ri:calendar-fill" /> Dec 2021
                      </h3>
                      <h4 class="timeline-title">Tijuana Technological Institute</h4>
                      <p class="timeline-text">
                        In this 4 years of career, I improved my skills on C# programming and obtained new ones;
                        like HTML, React and SQL Server topics.
                      </p>
                    </div>
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-date">
                        <Icon name="ri:calendar-fill" /> Dec 2022
                      </h3>
                      <h4 class="timeline-title">Bootcamp SoyHenry</h4>
                      <p class="timeline-text">
                        In this one-year bootcamp, I expanded my knowledge of HTML, JS, and CSS,
                        in addition to improving React, asynchronous, and backend development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="experience padd-15">
              <h3 class="title">Experience</h3>
              <div class="row">
                <div class="timeline-box padd-15">
                  <div class="timeline shadow-dark">
                    <!-- timeline item -->
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-date">
                        <Icon name="ri:calendar-fill" /> Feb 2020 - Dev 2020
                      </h3>
                      <h4 class="timeline-title">Backend Developer - Vasoking Mexico</h4>
                      <p class="timeline-text">
                        In my job position, I was in charge of capture of creation of api's and microservice using java,
                        springboot,
                        database configuration and maintenance, Ubuntu server maintenance, applications deployment on
                        server, etc.
                      </p>
                    </div>

                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-date">
                        <Icon name="ri:calendar-fill" /> Jun 2021 - Jan 2024
                      </h3>
                      <h4 class="timeline-title">Fullstack Developer - Sol Beauty & Care</h4>
                      <p class="timeline-text">
                        In this job i was in charge of the web page, as a Web manager of the Ecommerce webpage i develop
                        the products,
                        new pages, prices, banners, new implementations, payment portals, etc.
                        As my responsabilities as backend i create modules in js and ts in express and nest, also i
                        maintenance apis in this
                        frameworks, and in C# and java.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const openPDF = () => {
  window.open('/Resume.pdf', '_blank');
};
</script>