export const NAV_ITEMS = ['Home','Education','Research','Extracurriculars','Volunteer','Awards & Certifications','Contact']

export const SITE = {
    owner: 'Tasneema Shaik',
    email: 'tasneema.0330@gmail.com',
    socials: [
        { name: 'GitHub', url: 'https://github.com/tasneemashaik' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tasneemashaik/' },
    ],
    resume: '/certificates/Tasneema_Shaik_Resume.pdf',
    blog: '/certificates/Tasneema_Shaik_Resume.pdf'
}

export const hero = [
    {
        title: "HighSchool Senior @ Cleveland School of Science & Medicine",
        headline:
            "I am a highly motivated and determined high school student with a strong aspiration to become a physician. Throughout my academic journey, I have developed leadership, teamwork, and public speaking skills, as well as the ability to network effectively. These are skills that I use to make a meaningful impact in my community.At my school, the White Coat Tradition serves as a powerful symbol of academic excellence and dedication to future leadership in medicine and community service. In our freshman year, students receive white coats to recognize scholarly achievement and commitment to the school’s mission of preparing future physicians and community leaders. During formal ceremonies and meetings, we have the honor of receiving pins that we attach to our coats, each representing accomplishments or values we uphold (see my whitecoat and pins to the left). Some of my most meaningful pins include awards recognizing my dedication to community service, academic excellence like Principal's List and National Merit Semi-Finalist Award, and the Martin Luther King, Jr. Pin, which reflects the change I hope to create in my community. I am also pledged into two of our school’s four Pathways: Scientific Research and Professional Medicine. These pathways provide structured guidance through specialized coursework, mentorship, and service opportunities designed to prepare students for careers in medicine and scientific innovation. By following these tracks, I am developing the skills, knowledge, and experience necessary to become a physician who contributes meaningfully to the community.Through my high school journey, I have aimed to grow as a scholar, leader, and advocate. I hope to continue using my education and passion to create meaningful impact in the lives of others.",
        subtext: "Pledged in Professional Medicine and Scientific Research Pathways",
        image: "/certificates/Home/WhiteCoat.jpg"
    },

    
    {
        title:
            "National Vice President, SADD National Student Leadership Council",
        headline:
            "Elected VP of National Student Leadership Council and SADD Board member, shaping national strategy.",
        subtext: "Experienced in leading initiatives and serving the community.",
        image: "/certificates/Home/tasneema1.jpg"
    }
];

// data.js
export const EDUCATION = [
    {
        degree: "High School Senior",
        school: "The Cleveland School of Science and Medicine – Senior",
        duration: "2022 - 2026",
        description: "Focused on Science & Math",
        NationalMerit : "National Merit Scholar",
        gpaUnweighted: "4.0",
        gpaWeighted: "4.688",
        classRank: "#1",
        subjects: [
            { name: "AP Chemistry", score: "5" },
            { name: "AP Environmental Science", score: "5" },
            { name: "AP United States Government and Politics", score: "5" },
            { name: "AP United States History", score: "5" },
            { name: "AP Statistics", score: "5" },
            { name: "AP Precalculus", score: "5" },
            { name: "AP English Language and Composition", score: "4" },
            { name: "AP Latin", score: "3" },
            { name: "AP Computer Science Principles", score: "3" },
        ],
        links: [
            { label: "AP Scholar", url: "/certificates/Awards/ap-awards.pdf" },
     //       { label: "String for Excellence", url: "/certificates/Awards/ap-awards.pdf" }
        ],
        image: "/certificates/Awards/APScholor.png"
    },
]

export const RESEARCH = [
  {
    title: "Research Intensive Summer Experience (RISE) Program",
    duration: "June 2025 - July 2025",
    organization: "Cleveland Clinic’s Lerner Research Institute",
    role: "Intern",
    details: [
"During the RISE Program at Cleveland Clinic’s Lerner Research Institute, I spent 300+ hours researching EGF response in lung cancer cells via EGFR signaling. I gained hands-on experience with Western blotting, analyzed protein expression, and presented my findings to 50+ faculty and students, strengthening both my scientific and communication skills. This experience deepened my understanding of translational research and showed how laboratory discoveries can directly impact cancer treatment."        ],
    links: [
<<<<<<< HEAD
        { label: "Certificate", url: "/certificates/Awards/ap-awards.pdf" },
        { label: "Event Photo", url: "/certificates/Awards/ap-awards.pdf" },
        { label: "My Journey with SADD", url: "https://www.youtube.com/embed/AbhYmUGBqTY", type: "video", videotype: "youtube" }
=======
       // { label: "Certificate", url: "/certificates/Awards/ap-awards.pdf" },
       // { label: "Event Photo", url: "/certificates/Awards/ap-awards.pdf" },
        { label: "My Poster Presentation - 2025", url: "/research/rise/risevideo.mp4", type: "video" , videotype: "other" }
>>>>>>> f31f38b (all new changes)
    ],
    image: "/research/rise/rise.jpg"
  },
  {
    title: "Scientific Enrichment Opportunity (SEO)/Youth Engaged in Science (YES) Program",
    duration: "June 2023 - July 2024",
    organization: "Case Western Reserve University",
    role: "Intern",
    details: [
     "Over two summers at Case Western Reserve University’s SEO/YES Program, I completed 600+ hours of research investigating how the G350D and R710G mutations affect DRP1 protein function, focusing on protein assembly and enzymatic activity. I conducted experiments using GTPase assays and electron microscopy, analyzed complex data, and explored connections between these molecular mechanisms and potential patient outcomes. I authored two detailed scientific manuscripts, presented my findings to 200+ attendees, and earned the Mark Smith Prize for Outstanding Scientific Presentation (2023) and Outstanding Poster Presentation (2024). This experience strengthened my laboratory, analytical, and scientific communication skills while deepening my understanding of translational biomedical research." ],
      links: [
<<<<<<< HEAD
          { label: "My Journey with SADD", url: "https://www.youtube.com/embed/AbhYmUGBqTY", type: "video", videotype: "youtube" }
=======
        { label: "ResearchManuscript_2024", url: "/research/seoyes/Shaik_ResearchManuscript_2024.pdf" },
        { label: "ResearchManuscript_2023", url: "/research/seoyes/Shaik_ResearchManuscript_2023.pdf" },
        { label: "My Poster Presentation ", url: "/research/seoyes/PosterPresentation.mp4", type: "video" , videotype: "other" }
>>>>>>> f31f38b (all new changes)
      ],
    image: "/research/seoyes/award.png"
  },
  {
    title: "Brainstormers Club",
    duration: "Aug 2022 - Dec 2023",
    organization: "Cleveland School of Science and Medicine",
    role: "Member",
    details: [
   "I participated in a course led by Cleveland Clinic neurosurgeons, where I learned about a wide range of topics related to the brain and patient care. Throughout the course, I gained hands-on experience with suturing techniques, explored the anatomy of the brain, practiced sterile procedures and proper sterile attire, and learned how to assess and care for spinal injuries. I also studied the causes of strokes and how doctors approach their treatment, which gave me a deeper understanding of the day-to-day responsibilities of medical professionals."
    ],
    image: "/brainstomers/neuroscience.png"
  },
  {
    title: "Horizons Medical Mentoring Program",
    duration: "Aug 2022 - Aug 2023",
    organization: "Cleveland School of Science and Medicine",
    role: "Member",
    details: [
<<<<<<< HEAD
      "Gained foundational knowledge in human anatomy, bleeding control, and basic suturing through case studies and hands-on activities."
    ],
    links: [
        { label: "My Journey with SADD", url: "videos/IMG_1276.mp4", type: "video", videotype: "other" }
    ],
    image: "/certificates/Home/Quantum_certificate.png"
=======
     
    "From August 2022 to August 2023, I participated in the Horizons Medical Mentoring Program at Case Western Reserve University, where I gained hands-on exposure to foundational clinical skills. Guided by mentors, I practiced human anatomy, bleeding control, and basic suturing, building both confidence and precision through repeated practice. Beyond learning technical skills, I gained insight into the daily responsibilities of healthcare professionals, including the importance of patient safety, professionalism, and critical thinking. This experience not only strengthened my practical abilities but also fueled my passion for medicine and solidified my commitment to pursuing a career in healthcare."],
     links: [
      //  { label: "My Journey with internship", url: "/research/rise/risevideo.mp4", type: "video" , videotype: "other" }
    ],
    //image: "/certificates/Home/Quantum_certificate.png"
>>>>>>> f31f38b (all new changes)
  }
];

export const EXTRACURRICULARS = [
  {
    title: "Students Against Destructive Decisions (SADD) National Student Leadership Council",
    role: "National Vice President & Board Member",
    organization: "SADD National Student Leadership Council",
    duration: "May 2024 – Present",
    details: [
     
    "I serve as National Vice President of Students Against Destructive Decisions (SADD), a role I was appointed to following a highly competitive national evaluation. I work closely with fellow council members and national administrators to improve programs, ensuring they are accessible, impactful, and resonate with students. I’ve authored a blog guiding the creation of new SADD chapters, led national conferences with 250+ attendees, and mentored SLC members in producing a national podcast series. I also implemented a recognition system that motivates over 10,000 chapters nationwide and have been invited to speak on the Power of Young People Podcast and national TV to promote teen driver safety. This role has allowed me to combine leadership, strategy, and collaboration while making a tangible impact on youth across the country and empowering students to make safer, more informed choices."],
        links: [
        { label: "Represented SADD National SLC as a Panelist", url: "/saddnation/SADDNationalSLCPanelist.png" },
       // { label: "Event Photo", url: "/certificates/Awards/ap-awards.pdf" },
        { label: "Video - SADD National Leadership Summit in Georgia, Atlanta 2025 ", url: "/saddnation/saddnation.mp4", type: "video" , videotype: "other" }
          ],
    image: "/saddnation/nyc.png"
  },
  {
    title: "SADD Chapter at the Cleveland School of Science and Medicine (CSSM)",
    role: "Founder & President",
    organization: "Cleveland School of Science and Medicine (CSSM)",
    duration: "June 2023 – Present",
    details: [
      
    "As a SADD Chapter Leader, I had the opportunity to grow our chapter from the ground up, recruiting 35 members, expanding to two additional schools, and building partnerships with seven local prevention organizations, including hospitals. I created public health style outreach campaigns and managed social media platforms that reached over 1,000 students, while raising $2,000 by winning a national video challenge on alcohol awareness and using the funds to expand our programs and outreach. Sharing our initiatives at statewide and national SADD events allowed me to connect with other student leaders and showcase our work, and I was honored to receive the President’s Volunteer Service Award for my dedication to teen wellness. Through planning schoolwide projects such as the Distract-O-Trac Project and Red Ribbon Week, I developed strong leadership, event coordination, and networking skills, while inspiring meaningful engagement and positive change in my school community."],
    links: [
<<<<<<< HEAD
        { label: "Certificate", url: "certificates/Awards/ap-awards.pdf" },
        { label: "Event Photo", url: "certificates/Awards/ap-awards.pdf" },
        { label: "My Journey with SADD", url: "videos/IMG_1276.mp4", type: "video", videotype: "other" }
=======
        { label: "Neighborhood Networking Event", url: "/sadd/sadd2.png" },
        { label: "Impaired Driving Awareness Session", url: "/sadd/sadd3.png" },
        { label: "Ford Driver Safety Event", url: "/sadd/sadd3.1.png" },
        { url: "/sadd/sadd1.mp4", type: "video" , videotype: "other" ,label: "SADD CSSM Chapter Raising Awareness for Distracted Driving "},
    //    { label: "SADD CSSM NIAAA Video Award ", url: "https://www.youtube.com/watch?v=qImT4i7jX5Y", type: "video" , videotype: "youtube" }
>>>>>>> f31f38b (all new changes)
    ],
    image: "/sadd/sadd1.png"
    
  },
  {
    title: "Health Professional Pipeline Program (H3P)",
    role: "Vice President & Executive Board Member",
    organization: "Cleveland School of Science and Medicine (CSSM)",
    duration: "Sept 2022 – Present",
    details: [
    "Since September 2022, I have served as Vice President and active member of the Health Profession Pipeline Program (H3P), where I lead meetings for more than 80 members and oversee four committees that plan educational and service events. I gained hands-on medical experience by working with medical students on mock patient interviews and clinical exercises, which gave me an early understanding of patient care. I also organized a school blood drive in partnership with the American Red Cross, collecting 50 units of blood, well above our goal of 30, and coordinated service projects such as making blankets for children at local hospitals. These experiences have helped me grow as a leader, strengthened my skills in event planning and organization, and allowed me to contribute meaningfully to the health and well-being of my community."
    ],
    links: [
<<<<<<< HEAD
        { label: "My Journey with SADD", url: "https://www.youtube.com/embed/AbhYmUGBqTY", type: "video", videotype: "youtube" }
    ],
    image: "/certificates/Home/Quantum_certificate.png"
=======
       // { label: "My Journey with SADD", url: "https://www.youtube.com/embed/AbhYmUGBqTY", type: "video", videotype: "youtube" }
    ],
    image: "/h3p/blooddrivecamp.png"
>>>>>>> f31f38b (all new changes)
  },
  {
    title: "Beyond Bars Initiative (BBI)",
    role: "Co-Founder",
    organization: "OH-11 Youth Advisory Council",
    duration: "Oct 2024 – Present",
    details: [
<<<<<<< HEAD
      "Collaborated with peers and local leaders in OH-11 to address community issues and propose actionable solutions.",
      "Engaged with policymakers to deepen understanding of federal legislative processes and advocacy strategies."
    ],
    links: [
        { label: "My Journey with SADD", url: "videos/IMG_1276.mp4", type: "video", videotype: "other" }
    ],
=======
    "I was selected through a highly competitive process to serve a one-year term on Congresswoman Shontel Brown’s Youth Advisory Council, where I provide input on youth-focused initiatives and policy. Working alongside peers and community stakeholders, I researched Cleveland’s criminal justice system and developed an 18-page capstone plan with actionable reform strategies, which led to the launch of the Beyond Bars Initiative (BBI) to support individuals reentering society after incarceration. I also collaborate with Case Western Reserve University School of Medicine’s HOPE4 initiative to lead visits to the Juvenile Justice Center, assess youth needs, and implement targeted toolkits that promote community wellness. Through this work, I have gained a deeper understanding of advocacy, empathy, and the social factors affecting vulnerable populations, while strengthening my leadership, project management, and community engagement skills." 
    ],
        links: [
          { label: "BBI Team with Congresswoman", url: "/bbi/BBITeamwithcongresswoman.png" },
          { label: "YAC Criminal Justice Reform White Paper", url: "/bbi/WhitePaper.pdf" },
        { label: "OH-11 Youth Advisory Council Capstone Presentation", url: "/bbi/Capstone Presentation.mp4", type: "video" , videotype: "other" }
    ],
    image: "/bbi/bbi.png"
    
>>>>>>> f31f38b (all new changes)
  },
  {
    title: "Ohio Department of Health (ODH) Teen Wellness Team",
    role: "Member",
    organization: "ODH",
    duration: "Nov 2023 – Present",
    details: [
    "Since November 2023, I have been a member of the Ohio Department of Health Teen Wellness Team, selected from over 650 applicants to provide youth perspectives on statewide teen health programs. I contribute to shaping initiatives such as the Ohio Youth Risk Behavior Survey and the ODH Vaping Campaign, and I participated in the Ohio Adolescent Health Partnership Meeting in Columbus, offering feedback to make programs more accessible and student-friendly while taking part in a panel discussion. This experience has given me hands-on insight into public health planning, program development, and collaborative teamwork, while allowing me to actively support teen wellness across Ohio."
    ],
    image: "/odh/TeenwellnessTeam.png"
  },
  {
    title: "University Hospitals' Youth Advisory Council (KIDS Rainbow)",
    role: "Member",
    organization: "University Hospitals",
    duration: "Feb 2024 – Present",
    details: [
     "Since February 2024, I have served on University Hospitals’ Youth Advisory Council (KIDS Rainbow), where I review surveys completed by teens and provide feedback to doctors and hospital leaders to improve pediatric mental health services and patient communication. I work alongside healthcare administrators to create youth-focused initiatives, such as financial literacy programs, and help increase engagement with local communities. This experience has strengthened my skills in healthcare advocacy, communication, and program development, while giving me the opportunity to make a meaningful impact on the health and well-being of young people."
    ],
    image: "/uh/KIDSRainbow.png"
  },
  {
    title: "Student Council",
    role: "Class Representative – CSSM Class of 2026",
    organization: "Cleveland School of Science and Medicine (CSSM)",
    duration: "August 2024 – Present",
    details: [
     "As Class Representative for the CSSM Class of 2026, I lead council office hours to give students a space to share their ideas, voice concerns, and help shape school initiatives. I have helped raise $2,000 for the student body and worked with fellow council members and faculty to plan schoolwide events such as pep rallies, homecoming, and spirit weeks. Beyond school events, I collaborate with the Cleveland Metropolitan School District and the CEO to address disparities in student outcomes at schools facing financial challenges, gaining hands-on experience in leadership, advocacy, and community-focused problem-solving."
    ]
  },
  {
    title: "Mock Trial",
    role: "Member",
    organization: "Cleveland School of Science and Medicine (CSSM)",
    duration: "Sept 2023 – Present",
    details: [
     "I am an active member of my high school’s Mock Trial team, where I have prepared and presented prosecution arguments for the 2024 and 2025 Ohio Mock Trial State Competitions. My responsibilities include conducting in-depth legal research, analyzing evidence, and crafting persuasive arguments while collaborating with teammates to develop cohesive case strategies. In 2024, I received the Outstanding Attorney Award at the Cuyahoga County Court House for my ability to articulate complex legal reasoning and advocate effectively in the courtroom. Participating in Mock Trial has strengthened my public speaking, logical reasoning, teamwork, and evidence-based argumentation skills, while providing firsthand experience with courtroom procedures and fostering a deeper appreciation for advocacy and justice."
    ],
    image: "/certificates/Awards/mocktrail.png"
  }
];

export const VOLUNTEER = [
  {
    title: "Schoolhouse.world",
    role: "SAT Tutor",
    organization: "Schoolhouse.world (Nonprofit Founded by the Creator of Khan Academy)",
    duration: "Jan 2025 – Present",
    details: [
      "I volunteer as an SAT tutor at Schoolhouse, where I provide personalized guidance in reading, writing, and math. I work closely with students to build test-taking strategies, create tailored practice materials, and track their progress, all while encouraging confidence and a growth mindset. Through this role, I have the opportunity to make a meaningful impact on students’ academic success while sharpening my own teaching, leadership, and communication skills."],
    links: [
<<<<<<< HEAD
        { label: "Certificate", url: "/certificates/Awards/ap-awards.pdf" },
        { label: "Event Photo", url: "/certificates/Awards/ap-awards.pdf" },
        { label: "My Journey with SADD", url: "https://www.youtube.com/embed/AbhYmUGBqTY", type: "video", videotype: "youtube" }
=======
        { label: "Certificate", url: "/certificates/Awards/schoolhouse.png" },
      //  { label: "Event Photo", url: "/certificates/Awards/ap-awards.pdf" },
       // { label: "My Journey with SADD", url: "https://www.youtube.com/embed/AbhYmUGBqTY", type: "video", videotype: "youtube" }
>>>>>>> f31f38b (all new changes)
    ],
    image: "/certificates/Awards/schoolhouse.png"
  },
  {
    title: "National Honor Society (NHS) ",
    role: "Member",
    organization: "Cleveland School of Science and Medicine (CSSM)",
    duration: "Oct 2023 – Present",
    details: [
     "I am a proud member of the National Honor Society (NHS), an organization that recognizes students for their academic achievement, leadership, service, and character. Through NHS, I actively participate in community service projects and school initiatives, striving to make a positive impact while embodying values such as integrity, responsibility, and scholarship. Being part of NHS reflects my commitment to personal growth, academic excellence, and contributing meaningfully to my school and community." ],
    links: [
<<<<<<< HEAD
        { label: "My Journey with SADD", url: "videos/IMG_1276.mp4", type: "video", videotype: "other" }
=======
   //     { label: "My Journey with internship", url: "/research/rise/risevideo.mp4", type: "video" , videotype: "other" }
>>>>>>> f31f38b (all new changes)
    ],
    image: "/certificates/Awards/nhs-1.png"
  },
  {
    title: "World Champion Taekwondo Academy",
    role: "Student Trainer",
    organization: "",
    duration: "August 2022 – Present",
    details: [
    "I volunteered as a student trainer at the World Champion Taekwondo Academy, assisting the lead instructor in teaching forms, sparring, and self-defense techniques to students of all ages. This role allowed me to develop leadership, mentorship, and instructional skills while supporting a positive and disciplined learning environment. In recognition of my contributions, I was honored with the Presidential Volunteer Service Award." ],
    image: "/certificates/Awards/twd.jpg"
  }
];

export const AWARDS = {
    ACADEMIC: [
              {
            title: "Governor's Merit Scholorship",
            date: "Oct 2025",
            link: "/certificates/Awards/GovernorMeritScholarship.jpg",
        },
                      {
            title: "National Merit Semifinalist",
            date: "Sep 2025",
            link: "/certificates/Awards/NationalMerit.pdf",
        },
        {
            title: "AP Scholar with Distinction Award",
            date: "July 2025",
            link: "/certificates/Awards/ap-awards.pdf", // 👈 link to image/pdf
            links: [
                { label: "Certificate", url: "/certificates/Awards/ap-awards.pdf" },
                { label: "Event Photo", url: "/certificates/Awards/ap-awards.pdf" }
            ]
        },
                {
            title: "Harvard Book Prize",
            date: "May 2025",
            link: "/certificates/Awards/harvard-book-prize.pdf",
        },
        {
            title: "Global Seal of Biliteracy in Latin",
            date: "May 2025",
             
        },

        //{
         //   title: "Mary Nazimek Award for Research Excellence – New Nereus Commentary",
         //   date: "Jan 2024",
        //    link: "/certificates/mary-nazimek.pdf",
        //},
                  {        title: "Mark Smith Prize for Outstanding Scientific Presentation",
            date: "July 2023",
            link: "/certificates/Awards/MarkSmith.pdf",
        },
        {
            title: "Striving for Excellence Award",
            date: "May 2023",
            link: "/certificates/Awards/excellence.pdf",
        },
        {
            title: "Excellence Award in Math, Science, Social Studies, Language Arts, Computer Science",
            date: "May 2023",
          //  link: "/certificates/multiple-excellence.pdf",
        },
        {
            title: "Principal’s List Award & Lead by Example Award",
            date: "April 2023",
          //  link: "/certificates/principals-list.pdf",
        },
        {
            title: "IBM Quantum Computing Course : Certificate of Completion",
            date: "April 2023",
            link: "/certificates/Awards/Quantum_certificate.png",
        },
        {
            title: "Top Ten NWEA Award for Geometry & Reading",
            date: "Jan 2023",
            link: "/certificates/Awards/NWEA.pdf",
        },
    ],

    SPORTS: [
        {
            title: "Martial Art Taekwondo – Blackbelt",
            date: "Sept 2023",
            link: "/certificates/Awards/blackbelt.pdf",
        },
        {
            title: "USATT Women’s Finalist – Ohio State Championship",
            date: "Aug 2022 - Present",
            link: "/certificates/Awards/columbus.jpg",
            details: ["U1200", "U1300", "U1400"],
        },
    ],

    EXTRACURRICULARS: [
              {
            title: "SADD Chapter Leader of the Year",
            date: "July 2025",
            link: "/certificates/Awards/chapterlead.jpg",
        },
                      {
            title: "OH-11 Youth Advisory Council  -  Mayer & Congresswoman Certificate of Recognition",
            date: "July 2025",
            link: "/certificates/Awards/oh11.pdf",
        },
              {
            title: "OHIO Teen Wellness Team ",
            date: "2025 - 2024 - 2023",
            link: "/certificates/Awards/teen.pdf",
        },
                              {
            title: "Outstanding Attorney Award - Mock Trial Competition",
            date: "Jan2024",
            link: "/certificates/Awards/attorney.pdf",
        },
                              {
            title: "The Council of City Of Cleveland - Recognition ",
            date: "Dec 2024",
            link: "/certificates/Awards/city.pdf",
        },

                      {
            title: "President’s Volunteer Service Award - Silver for community service related to SADD leadership and chappter work ",
            date: "Dec 2024",
            link: "/certificates/Awards/silver.pdf",
        },
         
                              {
            title: "President’s Volunteer Service Award - Bronze for community service related to Volunteer Taekewando assistant trainer",
            date: "Jan 2024",
            link: "/certificates/Awards/bronze.pdf",
        },
        {
            title: "Special Congressional Recognition – SADD CSSM Neighborhood Networking Event",
            date: "Jan 2024",
            link: "/certificates/Awards/congress.pdf",
        },
                {
            title: "Health Profession Pipeline Program",
            date: "Sep 2023",
            link: "/certificates/Awards/h3p.pdf",
        },
        {
            title: "First Place – Potomac Intramural High School Intermediate Division Debate Competition",
            date: "Nov 2023",
            link: "/certificates/Awards/potomac-debate.pdf",
        },
        {
            title: "Entire Holy Quran Memorization & Certification",
            date: "May 2022 - Present",
            link: "/certificates/Awards/quran.jpg",
        },
    ],
};

//export const blogs = [
  //{ title: 'Mastering Flexbox & Grid', summary: 'A practical path to modern layouts.', url: 'https://www.sadd.org/post/guiding-lights-finding-the-perfect-advisor-to-launch-your-chapter' },
//  { title: 'Vanilla JS Patterns', summary: 'Component-like architecture without frameworks.', url: '#' }
//]
