export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I'm an experienced software engineer with five years of hands-on expertise in both backend and frontend development.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with communication accross time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently looking the opportunity in IT greatness",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ethoscode - IT Consultant Web App",
    des: "One stop solution IT Consultan website with wordpress and elementor.",
    img: "/p1.webp",
    iconLists: ["/wp.webp", "/el.png"],
    link: "https://ethoscode.co/",
  },
  {
    id: 2,
    title: "Pret A Manger - Club Pret Coffee Subscription",
    des: "A coffee subscription system that can be purchased and managed from Web App.",
    img: "/p2.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/exjs.png", "/node.png"],
    link: "https://www.pret.co.uk/en-GB/club-pret",
  },
  {
    id: 3,
    title: "A Netflix like streaming Web App",
    des: "A website application with the UI and UX similar to netflix.",
    img: "/p3.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mongo.svg"],
    link: "https://yasin-streaming.vercel.app/",
  },
  {
    id: 4,
    title: "AI Inventory Management System",
    des: "Inventory Management System to track items within the inventory using AI Chat.",
    img: "/",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/python.svg",
      "/fastapi.svg",
      "/posgre.svg",
    ],
    link: "https://github.com/yasinderu/ai-supplychain",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend React Engineer - Logol",
    desc: "Developed a Logistic Online System by leveraging ReactJs and Redux.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Fullstack Software Developer - Technoplast",
    desc: "Designed and developed warehouse management system web app using ReactJs, NodeJs, Express, and MySql.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Fullstack Software Developer - Pret A Manger",
    desc: "Develop a Club Pret Coffee subscription system using NextJs, NodeJs, Express, and Fastify.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Fullstack Software Developer - Imbee",
    desc: "Research, develop, and analyze on how to improve the app performance.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/yasinderu",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/muhammad-yasin-3079651a0/",
  },
];
