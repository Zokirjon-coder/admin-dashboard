import dashboard from "../assets/icons/dashboard.svg";
import analytic from "../assets/icons/analytic.svg";
import timesheets from "../assets/icons/timesheets.svg";
import todo from "../assets/icons/todo.svg";
import report from "../assets/icons/report.svg";
import settings from "../assets/icons/settings.svg";

export const dataMenu = [
  { id: 1, name: "Main", active: "true", icon: dashboard, pathname: "" },
  { id: 2, name: "Loads", active: "false", icon: analytic, pathname: "" },
  {
    id: 3,
    name: "Dedicated Line",
    active: "false",
    icon: timesheets,
    pathname: "",
  },
  {
    id: 4,
    name: "Trailer management",
    active: "false",
    icon: todo,
    pathname: "",
  },
  {
    id: 5,
    name: "Truck management",
    active: "false",
    icon: report,
    pathname: "",
  },
  {
    id: 6,
    name: "Fleet management",
    active: "false",
    icon: settings,
    pathname: "",
  },
  {
    id: 7,
    name: "HR management",
    active: "false",
    icon: settings,
    pathname: "",
  },
  {
    id: 8,
    name: "Reports",
    active: "false",
    icon: settings,
    pathname: "",
  },
  {
    id: 9,
    name: "Monitoring",
    active: "false",
    icon: settings,
    pathname: "",
  },
  {
    id: 10,
    name: "Settings",
    active: "false",
    icon: settings,
    pathname: "",
  },
];
