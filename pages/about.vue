<template>
  <section class="about active section" id="about">
    <div class="container">
      <div class="row">
        <div class="section-title padd-15">
          <h2>{{ $t('pages.about.about') }}</h2>
        </div>
      </div>

      <div class="row">
        <div class="about-content padd-15">
          <div class="row">
            <div class="about-text padd-15">
              <h3>{{ $t('pages.about.im') }} Saul Toscano, <span>{{ $t('pages.about.fullstack') }}</span></h3>
              <p>{{ $t('pages.about.description') }}</p>
            </div>
          </div>
          <div class="row">
            <div class="personal-info padd-15">
              <div class="row">
                <div class="info-item padd-15">
                  <p>{{ $t('pages.about.birthday') }}: <span>{{ $t('pages.about.birthday_date') }}</span></p>
                </div>
                <div class="info-item padd-15">
                  <p>{{ $t('pages.about.age') }}: <span>28</span></p>
                </div>
                <div class="info-item padd-15">
                  <p>GitHub: <a href="https://github.com/SaulToscano" target="_blank"><span>github.com/SaulToscano</span></a></p>
                </div>
                <div class="info-item padd-15">
                  <p>Email: <span>saul.toscano.robles@gmail.com</span></p>
                </div>
                <div class="info-item padd-15">
                  <p>{{ $t('pages.about.location') }}: <span>Mexico</span></p>
                </div>
                <div class="info-item padd-15">
                  <p>{{ $t('pages.about.city') }}: <span>Tijuana</span></p>
                </div>
                <div class="info-item padd-15">
                  <p>{{ $t('pages.about.degree') }}: <span>{{ $t('pages.about.degree_p') }}</span></p>
                </div>
                <div class="info-item padd-15">
                  <p>Freelance: <span>{{ $t('pages.about.freelance_p') }}</span></p>
                </div>
              </div>
              <div class="row">
                <div class="buttons padd-15">
                  <button @click="openPDF" class="btn" style="cursor: pointer;">{{ $t('pages.about.cv') }}</button>
                </div>
              </div>
            </div>

            <!-- Skills -->
            <div class="skills padd-15">
              <div class="row">
                <fragments-skill name="Frontend" percentage="90" />
                <fragments-skill name="Backend" percentage="80" />
                <fragments-skill name="Mobile" percentage="70" />
                <fragments-skill name="DevOps" percentage="65" />
                <fragments-skill name="SysAdmin" percentage="70" />
                <fragments-skill name="UI/UX (Figma)" percentage="70" />
              </div>
            </div>

          </div>

          <div class="row">
            <div class="technologies-tools padd-15">
              <h3 class="title">{{ $t('pages.about.technologies') }}</h3>

              <div class="row">

                <fragments-technologies name="vscode-icons:file-type-html" tooltip="HTML" />
                <fragments-technologies name="vscode-icons:file-type-css" tooltip="CSS" />
                <fragments-technologies name="logos:java" tooltip="Java" />
                <fragments-technologies name="devicon:csharp" tooltip="C#" />
                <fragments-technologies name="vscode-icons:file-type-js-official" tooltip="JS" />
                <fragments-technologies name="devicon:typescript" tooltip="TS" />
                <fragments-technologies name="logos:react" tooltip="React" />
                <fragments-technologies name="vscode-icons:file-type-vue" tooltip="Vue" />
                <fragments-technologies name="vscode-icons:file-type-angular" tooltip="Angular" />
                <fragments-technologies name="devicon:nodejs" tooltip="Node" />
                <fragments-technologies name="simple-icons:express" tooltip="Express" color="#214087" />
                <fragments-technologies name="logos:nestjs" tooltip="NestJS" />
                <fragments-technologies name="logos:swagger" tooltip="Swagger" />
                <fragments-technologies name="logos:jest" tooltip="Jest" />
                <fragments-technologies name="devicon:npm" tooltip="NPM" />
                <fragments-technologies name="logos:yarn" tooltip="Yarn" />
                <fragments-technologies name="logos:element" tooltip="Element" />
                <fragments-technologies name="logos:mantine-icon" tooltip="Mantine" />
                <fragments-technologies name="skill-icons:bootstrap" tooltip="Bootstrap" />
                <fragments-technologies name="simple-icons:fontawesome" tooltip="Fontawesome" color="#214087" />
                <fragments-technologies name="simple-icons:iconify" tooltip="Iconify" color="#214087" />
                <fragments-technologies name="logos:visual-studio-code" tooltip="Visual Studio" />
                <fragments-technologies name="devicon:git" tooltip="Git" />
                <fragments-technologies name="mdi:github" tooltip="Github" color="#214087" />
                <fragments-technologies name="logos:docker-icon" tooltip="Docker" />
                <fragments-technologies name="logos:figma" tooltip="Figma" />
                <fragments-technologies name="devicon:jiraalign" tooltip="Jira" />
                <fragments-technologies name="logos:confluence" tooltip="Confluence" />

              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="row">
            <div class="education padd-15">
              <h3 class="title">{{ $t('pages.about.education') }}</h3>
              <div class="row">
                <div class="timeline-box padd-15">
                  <div class="timeline shadow-dark">
                    <!-- timeline item -->
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-date">
                        <Icon name="ri:calendar-fill" /> Dec 2021
                      </h3>
                      <h4 class="timeline-title">{{ $t('pages.about.uni_title') }}</h4>
                      <p class="timeline-text">
                        {{ $t('pages.about.uni_p_1') }}
                        <br /><br />
                        {{ $t('pages.about.uni_p_2') }}
                      </p>
                    </div>
                    <!-- timeline item -->
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-date">
                        <Icon name="ri:calendar-fill" /> Dec 2022
                      </h3>
                      <h4 class="timeline-title">Bootcamp SoyHenry</h4>
                      <p class="timeline-text">
                        {{ $t('pages.about.bootcamp_p_1') }}
                        <br/><br/>
                        {{ $t('pages.about.bootcamp_p_2') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="experience padd-15">
              <h3 class="title">{{ $t('pages.about.experience') }}</h3>
              <div class="row">
                <div class="timeline-box padd-15">
                  <div class="timeline shadow-dark">
                    <!-- timeline item -->
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-date">
                        <Icon name="ri:calendar-fill" /> Nov 2024 - May 2024
                      </h3>
                      <h4 class="timeline-title">Fullstack Developer - Warlocks-IT</h4>
                      <p class="timeline-text">
                        {{ $t('pages.about.wit_p_1') }}
                        <br><br>
                        {{ $t('pages.about.wit_p_2') }}
                        <br><br>
                        {{ $t('pages.about.wit_p_3') }}
                      </p>
                    </div>
                    <!-- timeline item -->
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-date">
                        <Icon name="ri:calendar-fill" /> Jun 2021 - Jan 2024
                      </h3>
                      <h4 class="timeline-title">Fullstack Developer - Sol Beauty & Care</h4>
                      <p class="timeline-text">
                        {{ $t('pages.about.sbc_p_1') }}
                        <br><br>
                        {{ $t('pages.about.sbc_p_2') }}
                      </p>
                    </div>
                    <!-- timeline item -->
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-date">
                        <Icon name="ri:calendar-fill" /> Feb 2020 - Dev 2020
                      </h3>
                      <h4 class="timeline-title">Backend Developer - Vasoking Mexico</h4>
                      <p class="timeline-text">
                        {{ $t('pages.about.vasoking_p_1') }}
                        <br><br>
                        {{ $t('pages.about.vasoking_p_2') }}
                        <br><br>
                        {{ $t('pages.about.vasoking_p_3') }}
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
import { useHead } from '#imports';
import { useI18n } from 'vue-i18n';

const { getLocaleCookie } = useI18n()

const openPDF = () => {
  getLocaleCookie() === 'en' ? window.open('/Resume.pdf', '_blank') : window.open('/Resume.pdf', '_blank');
};

useHead({
  title: "About me",
  meta: [
    {
      name: "About me",
      content: "Learn all about me"
    }
  ]
})
</script>