// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-strong-jason-strong-wu",
    title: "<strong>Jason</strong> Wu",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Check out my Google Scholar for my latest publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/CV.pdf";
          },
        },{id: "news-graduated-from-georgia-tech-with-b-s-in-computer-science",
            title: 'Graduated from Georgia Tech with B.S. in Computer Science!',
            description: "",
            section: "News",},{id: "news-excited-to-start-my-summer-internship-at-google-ai-s-perception-team",
            title: 'Excited to start my summer internship at Google AI’s Perception team!',
            description: "",
            section: "News",},{id: "news-i-ll-be-attending-ubicomp-2018-as-a-student-volunteer",
            title: 'I’ll be attending Ubicomp 2018 as a student volunteer!',
            description: "",
            section: "News",},{id: "news-started-phd-at-the-cmu-hci-institute",
            title: 'Started PhD at the CMU HCI Institute.',
            description: "",
            section: "News",},{id: "news-attending-chi-2019-for-the-first-time",
            title: 'Attending CHI 2019 for the first time!',
            description: "",
            section: "News",},{id: "news-honored-to-have-received-the-nsf-graduate-research-fellowship-read-more-about-my-work-here",
            title: 'Honored to have received the NSF Graduate Research Fellowship! Read more about my...',
            description: "",
            section: "News",},{id: "news-had-a-great-time-attending-ubicomp-2019",
            title: 'Had a great time attending Ubicomp 2019.',
            description: "",
            section: "News",},{id: "news-attended-and-volunteered-at-assets-2019-met-a-lot-of-cool-people-working-on-important-problems",
            title: 'Attended and volunteered at ASSETS 2019. Met a lot of cool people working...',
            description: "",
            section: "News",},{id: "news-bummed-chi-2020-was-cancelled-due-to-the-covid-19-pandemic-was-looking-forward-to-presenting-my-paper-which-won-an-honorable-mention-award",
            title: 'Bummed CHI 2020 was cancelled due to the COVID-19 pandemic. Was looking forward...',
            description: "",
            section: "News",},{id: "news-honored-that-my-work-was-selected-as-a-student-finalist-in-fast-company-s-2020-innovation-by-design-awards",
            title: 'Honored that my work was selected as a student finalist in Fast Company’s...',
            description: "",
            section: "News",},{id: "news-check-out-my-project-on-accessibility-feature-recommendation-that-won-best-technical-paper-at-web4all-2021-also-had-the-opportunity-to-talk-about-my-work-on-webable-tv",
            title: 'Check out my project on accessibility feature recommendation that won Best Technical Paper...',
            description: "",
            section: "News",},{id: "news-honored-that-i-got-to-work-on-screen-recognition-which-won-best-paper-at-chi-2021",
            title: 'Honored that I got to work on Screen Recognition, which won Best Paper...',
            description: "",
            section: "News",},{id: "news-presented-screen-parsing-at-my-first-uist-really-well-done-virtual-conference-got-to-meet-a-lot-of-people-in-the-community-and-learn-about-their-work",
            title: 'Presented Screen Parsing at my first UIST. Really well done virtual conference. Got...',
            description: "",
            section: "News",},{id: "news-i-wrote-a-blog-post-on-the-cmu-machine-learning-blog-about-machines-that-understanding-user-interfaces",
            title: 'I wrote a blog post on the CMU Machine Learning Blog about machines...',
            description: "",
            section: "News",},{id: "news-attended-chi-2022-and-the-computational-ui-workshop-first-in-person-conference-in-a-long-time-great-to-see-everyone",
            title: 'Attended CHI 2022 and the Computational UI Workshop. First in-person conference in a...',
            description: "",
            section: "News",},{id: "news-wrapping-up-an-awesome-summer-as-a-mentor-for-the-cmu-hcii-reu-program-lucky-to-work-with-amazing-interns",
            title: 'Wrapping up an awesome summer as a mentor for the CMU HCII REU...',
            description: "",
            section: "News",},{id: "news-arrived-in-toronto-for-a-fall-internship-at-meta-reality-labs-excited-to-work-on-user-interfaces-for-ar-and-explore-toronto",
            title: 'Arrived in Toronto for a Fall internship at Meta Reality Labs. Excited to...',
            description: "",
            section: "News",},{id: "news-i-added-my-own-statement-of-purpose-to-the-amazing-collection-on-cs-phd-sop-website-hope-it-can-be-a-useful-resource-for-those-applying-to-cs-phd-programs-good-luck",
            title: 'I added my own Statement of Purpose to the amazing collection on CS...',
            description: "",
            section: "News",},{id: "news-attended-the-uist-2022-conference-in-bend-oregon-listened-to-great-talks-tried-out-some-cool-demos-and-went-hiking",
            title: 'Attended the UIST 2022 conference in Bend, Oregon. Listened to great talks, tried...',
            description: "",
            section: "News",},{id: "news-started-internship-with-the-ui-understanding-team-at-apple-aiml",
            title: 'Started internship with the UI Understanding team at Apple AIML',
            description: "",
            section: "News",},{id: "news-presenting-webui-at-chi-2023-in-hamburg-germany-honored-to-have-been-recognized-with-an-honorable-mention-award",
            title: 'Presenting WebUI at CHI 2023 in Hamburg, Germany. Honored to have been recognized...',
            description: "",
            section: "News",},{id: "news-excited-to-attend-the-ai-amp-amp-hci-workshop-of-icml-2023-for-which-i-served-as-an-area-chair-i-ll-be-presenting-a-poster-about-my-latest-research-called-towards-never-ending-learning-of-user-interfaces",
            title: 'Excited to attend the AI&amp;amp;amp;HCI Workshop of ICML 2023, for which I served...',
            description: "",
            section: "News",},{id: "news-i-m-attending-the-10th-heidelberg-laureate-forum-as-a-young-researcher-looking-forward-to-connecting-with-and-learning-from-laureates-and-young-researchers-in-computer-science-and-math",
            title: 'I’m attending the 10th Heidelberg Laureate Forum as a young researcher. Looking forward...',
            description: "",
            section: "News",},{id: "news-i-m-giving-a-talk-about-my-research-called-computational-understanding-of-user-interfaces-at-saarland-university-excited-to-connect-with-all-the-hci-researchers-there",
            title: 'I’m giving a talk about my research called Computational Understanding of User Interfaces...',
            description: "",
            section: "News",},{id: "news-i-gave-a-shortened-version-of-my-talk-called-computational-understanding-of-user-interfaces-at-the-bid-seminar-great-to-meet-all-the-hci-researchers-there",
            title: 'I gave a shortened version of my talk called Computational Understanding of User...',
            description: "",
            section: "News",},{id: "news-excited-to-attend-the-uist-2023-conference-next-week-in-san-francisco-come-check-out-my-paper-never-ending-learning-of-user-interfaces-and-the-student-innovation-contest-called-beyond-words-that-i-helped-organize",
            title: 'Excited to attend the UIST 2023 conference next week in San Francisco! Come...',
            description: "",
            section: "News",},{id: "news-i-had-a-blast-attending-iui-for-the-first-time-in-greenville-south-carolina-i-presented-my-paper-framekit-incredibly-fortunate-that-it-was-chosen-to-receive-a-best-paper-award-amongst-all-the-amazing-work-presented-there",
            title: 'I had a blast attending IUI for the first time in Greenville, South...',
            description: "",
            section: "News",},{id: "news-back-in-honolulu-hawaii-for-chi-2024-great-time-attending-the-computational-ui-workshop",
            title: 'Back in Honolulu, Hawaii for CHI 2024. Great time attending the Computational UI...',
            description: "",
            section: "News",},{id: "news-first-time-attending-naacl-2024-in-mexico-city-mexico-amazing-city-and-perfect-place-to-present-our-work-on-finetuning-llms-to-produce-higher-quality-ui-designs-uicoder",
            title: 'First time attending NAACL 2024 in Mexico City, Mexico. Amazing city and perfect...',
            description: "",
            section: "News",},{id: "news-back-to-pittsburgh-where-i-passed-my-phd-dissertation-defense-my-dissertation-computational-understanding-of-user-interfaces-would-not-have-been-possible-without-all-the-amazing-support-i-ve-gotten-throughout-my-phd",
            title: 'Back to Pittsburgh where I passed my PhD dissertation defense! My dissertation, Computational...',
            description: "",
            section: "News",},{id: "news-thrilled-to-share-that-i-ve-been-promoted-from-senior-intern-to-research-scientist-at-apple-i-ve-loved-working-with-the-human-centered-machine-intelligence-group-on-hci-ui-modeling-and-accessibility-during-my-phd-excited-for-what-s-next",
            title: 'Thrilled to share that I’ve been promoted from “senior intern” to Research Scientist...',
            description: "",
            section: "News",},{id: "news-i-am-joining-purdue-cs-as-an-assistant-professor-starting-spring-2026-i-am-looking-to-work-with-highly-motivated-students-boiler-up",
            title: 'I am joining Purdue CS as an assistant professor starting Spring 2026. I...',
            description: "",
            section: "News",},{id: "news-i-am-attending-uist-2025-in-busan-korea-please-check-out-the-workshop-on-longitudinal-evaluations-of-ai-systems-that-i-helped-organize-and-squire-i-d-love-to-talk-to-any-prospective-students-and-collaborators",
            title: 'I am attending UIST 2025 in Busan, Korea! Please check out the workshop...',
            description: "",
            section: "News",},{id: "news-excited-to-start-as-an-assistant-professor-at-purdue-cs-i-will-teach-a-seminar-course-on-computational-interaction-this-semester-stay-tuned-for-more-information-about-my-lab",
            title: 'Excited to start as an Assistant Professor at Purdue CS! I will teach...',
            description: "",
            section: "News",},{id: "projects-project-1",
            title: 'project 1',
            description: "with background image",
            section: "Projects",handler: () => {
                window.location.href = "/projects/1_project/";
              },},{id: "projects-project-2",
            title: 'project 2',
            description: "a project with a background image and giscus comments",
            section: "Projects",handler: () => {
                window.location.href = "/projects/2_project/";
              },},{id: "projects-project-3-with-very-long-name",
            title: 'project 3 with very long name',
            description: "a project that redirects to another website",
            section: "Projects",handler: () => {
                window.location.href = "/projects/3_project/";
              },},{id: "projects-project-4",
            title: 'project 4',
            description: "another without an image",
            section: "Projects",handler: () => {
                window.location.href = "/projects/4_project/";
              },},{id: "projects-project-5",
            title: 'project 5',
            description: "a project with a background image",
            section: "Projects",handler: () => {
                window.location.href = "/projects/5_project/";
              },},{id: "projects-project-6",
            title: 'project 6',
            description: "a project with no image",
            section: "Projects",handler: () => {
                window.location.href = "/projects/6_project/";
              },},{id: "projects-project-7",
            title: 'project 7',
            description: "with background image",
            section: "Projects",handler: () => {
                window.location.href = "/projects/7_project/";
              },},{id: "projects-project-8",
            title: 'project 8',
            description: "an other project with a background image and giscus comments",
            section: "Projects",handler: () => {
                window.location.href = "/projects/8_project/";
              },},{id: "projects-project-9",
            title: 'project 9',
            description: "another project with an image 🎉",
            section: "Projects",handler: () => {
                window.location.href = "/projects/9_project/";
              },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%73%6F%6E%77%75@%70%75%72%64%75%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/js0nwu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jsonwu", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=aKqh7zIAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/jasonwuishere", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
