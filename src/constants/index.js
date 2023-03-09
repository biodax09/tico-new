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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  trinksigortam,
  obilet,
  cyce,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Hakkımızda",
  },
  {
    id: "work",
    title: "İşlerimiz",
  },
  {
    id: "contact",
    title: "İletişim",
  },
];

const services = [
  {
    title: "Web Yazılım",
    icon: web,
  },
  {
    title: "Web Tasarım",
    icon: mobile,
  },
  {
    title: "Mobil Yazılım",
    icon: backend,
  },
  {
    title: "E-Ticaret",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Taisa klima olarak hem kurumsal internet sitemizi hem de e-ticaret sitemizi yaptırdık üstelik çok hızlı bir hizmet aldık.",
    name: "Taner YİĞİTBAŞ",
    designation: "CEO",
    company: "Taisa Klima",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sorduğum tüm soruların çözümlerini gösterip işletmeyi daha zirveye taşımayı başaran ekibe sonsuz teşekkür ederim.",
    name: "Can HERDEM",
    designation: "CFO",
    company: "LastingUp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "İnşaat firmamızın web sitesini yaptırdık. Gayet kullanışlı bir site oldu. Çok teşekkür ederiz.",
    name: "Samet AKBAL",
    designation: "CMO",
    company: "Enterprises MGO",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Doğallık Burada",
    description:
      "Kötü bal nasıl olur hiç bilmiyoruz çünkü hiç yemedik görmedik. Organik ve kendi üretimleri olan ürünlerin satıldığı güvenli ve online organik bir mağazadır.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://dogallikburada.com/",
  },
  {
    name: "Gaziantebiz",
    description:
      "Gaziantep’te üretilen tüm ürünlere hızlı ve güvenli ulaşım sağlayan Gaziantebiz.com; alıcının kayıt yaptırarak alışveriş yapma imkanı bulduğu online alışveriş sitesidir.",
    tags: [
      {
        name: "opencart",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://gaziantebiz.com",
  },
  {
    name: "LastingUp",
    description:
      "Bir çok ayakkabı markasıyla anlaşmalı olarak hızlı ve güvenli teslimat sağlayan, alışveriş yapma imkanı bulunan online alışveriş sitesidir.",
    tags: [
      {
        name: "fabcommerce",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://lastingup.com/",
  },
  {
    name: "oBilet",
    description:
      "Türkiye'deki otobüs firmalarını bir araya getiren bir online otobüs bileti arama portalıdır.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: obilet,
    source_code_link: "https://obilet.vercel.app/",
  },
  {
    name: "TrinkSigortam",
    description:
      "Müşterilerilerinin ihtiyaçlarına en uygun ve kapsamlı sigortaya ulaşmalarını sağlamak üzere 2001 yılında kurulmuştur.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "elementor",
        color: "pink-text-gradient",
      },
    ],
    image: trinksigortam,
    source_code_link: "https://trinksigortam.net/",
  },
  {
    name: "CYCE",
    description:
      "Dumansız, atıksız, karbon negatif, sessiz ve güçlü, yeni nesil hızlı şarj istasyonu..",
    tags: [
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: cyce,
    source_code_link: "https://cycecoin.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
