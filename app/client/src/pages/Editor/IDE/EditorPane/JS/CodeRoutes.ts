import AddJS from "./Add";
import { ADD_PATH } from "@appsmith/constants/routes/appRoutes";
import JSEditor from "pages/Editor/JSEditor";
import ListJSObjects from "./List";

export const CodeRoutes = (path: string) => [
  {
    exact: true,
    key: "AddJS",
    component: AddJS,
    path: [`${path}${ADD_PATH}`, `${path}/:collectionId${ADD_PATH}`],
  },
  {
    exact: true,
    key: "JSEditor",
    component: JSEditor,
    path: [path + "/:collectionId"],
  },
  {
    key: "JSList",
    component: ListJSObjects,
    exact: true,
    path: [path],
  },
];
