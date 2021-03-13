import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import("../views/Home/Home" /* webpackChunkName: "Home" */)
    ),
  },
  {
    path: "/clubs",
    label: "Clubs",
    exact: true,
    component: lazy(() =>
      import("../views/Clubs" /* webpackChunkName: "Keypad" */)
    ),
  },
  {
    path: "/prices",
    label: "Prices",
    exact: true,
    component: lazy(() =>
      import("../views/Prices" /* webpackChunkName: "Contacts" */)
    ),
  },
  {
    path: "/schedule",
    label: "Schedule",
    exact: true,
    component: lazy(() =>
      import("../views/Schedule" /* webpackChunkName: "Register" */)
    ),
  },

  {
    path: "/photos",
    label: "Photos",
    exact: true,
    component: lazy(() =>
      import("../views/Photos" /* webpackChunkName: "Profile" */)
    ),
  },
  {
    path: "/team",
    label: "Team",
    exact: true,
    component: lazy(() =>
      import("../views/Team" /* webpackChunkName: "Profile" */)
    ),
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() =>
      import("../views/Contacts" /* webpackChunkName: "Profile" */)
    ),
  },
];
