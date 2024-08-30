import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    restaurant,
    nike,
    dashboard,
    fiverr,
    care,
    careshifa,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.js",
      icon: mobile,
    },
    {
      title: "UI/UX",
      icon: backend,
    },
    {
      title: "Next.js",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Front End Developer",
      company_name: "Fiverr",
      icon: fiverr,
      iconBg: "#E6DEDD",
      date: "March 2020 - Jan 2023",
      points: [
        " Created over 50 customized websites tailored to client specifications, achieving a 95% satisfaction rate and high client retention.",
        " Received 40+ 5-star reviews and converted 20% of clients into repeat customers, boosting long-term revenue by 15%.",
        " Delivered high-quality, pixel-perfect designs and ensured consistent client feedback and repeat business.",
        " Committed to understanding clients' unique needs and translating their ideas into functional, beautiful, and highly interactive digital experiences, providing top-notch customer service throughout the process.",
      ],
    },
    {
      title: "Implimentation Engineer",
      company_name: "Center For Advanced Research in Engineering",
      icon: care,
      iconBg: "#383E56",
      date: "Jun 2023 - July 2023",
      points: [
        "Proficient in designing and customizing Enterprise Resource Planning (ERP) systems to streamline business processes, improve efficiency, and meet the specific needs of clients.",
        "Skilled in writing complex SQL queries to extract, transform, and analyze data within ERP systems, enabling data-driven decision-making for clients.",
        "Proven track record of successful ERP system implementations, optimizing workflows, and ensuring a smooth transition for organizations, resulting in increased productivity and cost savings.",
        "Focused on understanding clients' unique business requirements and delivering tailored ERP solutions that meet their goals and exceed their expectations, with a commitment to ongoing support and maintenance.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Center For Advanced Research in Engineering",
      icon: careshifa,
      iconBg: "#383E56",
      date: "Aug 2023 - Sept 2023",
      points: [
        "A versatile web developer skilled in both front-end design and development, creating visually appealing and functional websites.",
        "Proficient in utilizing React and Next.js to build interactive and high-performance web applications, ensuring a seamless user experience.",
        "Prioritizing user needs and experience, creating front-end designs that resonate with target audiences and delivering web solutions that cater to client objectives.",
        "Ensuring your web projects are responsive and work flawlessly on various devices and screen sizes, offering accessibility and engagement across platforms.",
      ],
    },
    {
      title: "Embedded Software Engineer",
      company_name: "Center For Advanced Research in Engineering",
      icon: care,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Developed and implemented C++ server applications on ARM systems to process radar data and convert it into the Chinese radar format, enhancing data interoperability and integration with existing systems.",
        "Created comprehensive Python bindings for multiple structures and functions, enabling a 40% increase in the efficiency of SOAP services usage within the main application, significantly streamlining software integration and reducing processing time by 30%.",
        "Designed and developed various applications in .NET, contributing to the enhancement of software solutions and expanding the capabilities of internal tools and systems.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Hamza proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Hamza does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Hamza optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "rapidAPI",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/hamza-zaman001/car_showcase",
    },
    {
      name: "Bank App",
      description:
        "Web application that show-cases an eye-catching front end for the online bank name HooBank. It enables online card payments, reviews from the customers and etc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/hamza-zaman001/bank_app",
    },
    // {
    //   name: "GPT-3",
    //   description:
    //     "A comprehensive Web App that shows the introduction about the GPT-3, It gives user a modern AI looking front end and catches their attention to interact with the site.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "javascript",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/hamza-zaman001/GPT3_site",
    // },
    // CHANGE THIS TO SHOWCASE ANOTHER WEBSITE!
    {
      name: "Restaurant App",
      description:
        "An elegant looking restaurant application. It is the whole front end of the restaurant app which only needs a database for the bookings and we're good to go!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: restaurant,
      source_code_link: "https://github.com/hamza-zaman001/restaurant-app",
    },
    // {
    //   name: "Nike Store",
    //   description:
    //     "A web-based store for Nike that gives the introduction for the Nike and their products. It allows users to scroll through various products and Buy them.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "vite",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: nike,
    //   source_code_link: "https://github.com/hamza-zaman001/nike-landing-page",
    // },
    // {
    //   name: "Dashboard",
    //   description:
    //     "A web-based dashboard of Shoppy, It uses Syncfusion charts for different functions. It gives all the functionalities of a dashboard which are required for an Industry.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "syncfusion",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: dashboard,
    //   source_code_link: "https://github.com/hamza-zaman001/dashboard1",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };