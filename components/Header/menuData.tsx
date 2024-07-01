import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Solutions",
    newTab: false,
    path: "/#features",
    submenu: [
      {
        id: 31,
        title: "Frameworks",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "TPRM",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Customer centric Compliance",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Statutory and Regulatory compliance",
        newTab: false,
        path: "/docs",
      },
    ],
  },
  {
    id: 2.1,
    title: "Resources",
    newTab: false,
    path: "/blog",
    submenu: [
      {
        id: 31,
        title: "Blogs",
        newTab: false,
        path: "/blog",
      },
    ],
  },
  {
    id: 2.3,
    title: "Services",
    newTab: false,
    path: "/docs",
    submenu: [
      {
        id: 31,
        title: "vCISO",
        newTab: false,
        path: "/blog",
      },
      {
        id: 32,
        title: "vDPO",
        newTab: false,
        path: "/blog",
      },
      {
        id: 33,
        title: "Compliance",
        newTab: false,
        path: "/blog",
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
