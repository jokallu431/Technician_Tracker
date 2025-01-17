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
    admin: [
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
                      title: "Login",
                      link: "/login",
                    },
                    {
                      title: "Forgot Password?",
                      link: "/forgetpassword",
                    },
                  ],
                },
    ],
    technician: [
      {
        title: "Technician Dashboard",
        icon: "fas fa-fw fa-home",
        link: "/dashboard",
        subMenu: [],
      },
      {
        title: "Tasks",
        icon: "fas fa-fw fa-tasks",
        link: "#",
        subMenu: [
          { title: "My Tasks", link: "/dashboard/my-tasks" },
          { title: "Completed Tasks", link: "/dashboard/completed-tasks" },
        ],
      },
    ],
  };
  export default sidebarData;