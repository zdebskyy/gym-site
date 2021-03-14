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
      import("../views/Clubs/Clubs" /* webpackChunkName: "Keypad" */)
    ),
  },
  {
    path: "/prices",
    label: "Prices",
    exact: true,
    component: lazy(() =>
      import("../views/Prices/Prices" /* webpackChunkName: "Contacts" */)
    ),
  },
  {
    path: "/schedule",
    label: "Schedule",
    exact: true,
    component: lazy(() =>
      import("../views/Schedule/Schedule" /* webpackChunkName: "Schedule" */)
    ),
  },
  {
    path: "/photos",
    label: "Photos",
    exact: true,
    component: lazy(() =>
      import("../views/Photos/Photos" /* webpackChunkName: "Profile" */)
    ),
  },
  {
    path: "/team",
    label: "Team",
    exact: true,
    component: lazy(() =>
      import("../views/Team/Team" /* webpackChunkName: "Profile" */)
    ),
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() =>
      import("../views/Contacts/Contacts" /* webpackChunkName: "Profile" */)
    ),
  },
];
