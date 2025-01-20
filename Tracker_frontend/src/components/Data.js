// // data.js (or in the same file)
// const sidebarData = [
//     {
//       title: "Admin Dashboard",
//       icon: "fas fa-fw fa-tachometer-alt",
//       link: "/dashboard",
//       subMenu: [],
//     },
//     {
//       title: "Task",
//       icon: "fas fa-fw fa-wrench",
//       link: "#",
//       subMenu: [
//         {
//           title: "Pending Task",
//           link: "/dashboard/pending",
//         },
//         {
//           title: "Completed Task",
//           link: "/dashboard/completed",
//         },
//         {
//           title: "Unassigned Task",
//           link: "/dashboard/unassigned",
//         },
//         {
//           title: "Assigned Task",
//           link: "/dashboard/assigned",
//         },
//       ],
//     },
//     {
//       title: "User Profile",
//       icon: "fas fa-fw fa-user",
//       link: "#",
//       subMenu: [
//         {
//           title: "Create User",
//           link: "/dashboard/profile",
//         },
//         {
//           title: "User List",
//           link: "/dashboard/userlist",
//         },
//       ],
//     },
//     {
//       title: "Pages",
//       icon: "fas fa-fw fa-folder",
//       link: "#",
//       subMenu: [
//         {
//           title: "Login",
//           link: "/login",
//         },
//         {
//           title: "Forgot Password?",
//           link: "/forgetpassword",
//         },
//       ],
//     },
//   ];
  
//   export default sidebarData;

const sidebarData = {
    Admin: [
        {
                  title: "Admin Dashboard",
                  icon: "fas fa-fw fa-tachometer-alt",
                  link: "/dashboard",
                  subMenu: [],
                },
                {
                  title: "Task",
                  icon: "fas fa-fw fa-wrench",
                  link: "#",
                  subMenu: [
                    {
                      title: "Create Task",
                      link: "createTask",
                    },
                    {
                      title: "Pending Task",
                      link: "pending",
                    },
                    {
                      title: "Completed Task",
                      link: "/dashboard/completed",
                    },
                    {
                      title: "Unassigned Task",
                      link: "/dashboard/unassigned",
                    },
                    {
                      title: "Assigned Task",
                      link: "/dashboard/assigned",
                    },
                  ],
                },
                {
                  title: "Branch",
                  icon: "fas fa-fw fa-building",
                  link: "#",
                  subMenu: [
                    {
                      title: "Create Branch",
                      link: "/dashboard/createBranch",
                    },
                    {
                      title: "Technician List",
                      link: "/dashboard/technicianlist",
                    },
                  ],
                },
                {
                  title: "User Profile",
                  icon: "fas fa-fw fa-user",
                  link: "#",
                  subMenu: [
                    {
                      title: "Create User",
                      link: "/dashboard/profile",
                    },
                    {
                      title: "User List",
                      link: "/dashboard/userlist",
                    },
                  ],
                },
                {
                  title: "Pages",
                  icon: "fas fa-fw fa-folder",
                  link: "#",
                  subMenu: [
                    {
                      title: "Forgot Password?",
                      link: "/forgetpassword",
                    },
                  ],
                },
    ],
    Technician: [
      {
        title: "Technician Dashboard",
        icon: "fas fa-fw fa-home",
        link: "/dashboard",
        subMenu: [],
      },
      {
        title: "Task",
        icon: "fas fa-fw fa-wrench",
        link: "#",
        subMenu: [
          {
            title: "Pending Task",
            link: "pending",
          },
          {
            title: "Completed Task",
            link: "/dashboard/completed",
          },
          {
            title: "Unassigned Task",
            link: "/dashboard/unassigned",
          },
          {
            title: "Assigned Task",
            link: "/dashboard/assigned",
          },
        ],
      },
      {
        title: "Profile",
        icon: "fas fa-fw fa-user",
        link: "/dashboard/getprofile",
        subMenu: [],
      },
      {
        title: "Pages",
        icon: "fas fa-fw fa-folder",
        link: "#",
        subMenu: [
          {
            title: "Forgot Password?",
            link: "/forgetpassword",
          },
        ],
      },
    ],
  };
  export default sidebarData;