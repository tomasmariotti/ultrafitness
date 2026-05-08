import { getRouter } from "./router";
import { RouterProvider } from "@tanstack/react-router";
import { hydrateRoot } from "react-dom/client";

const router = getRouter();

hydrateRoot(document.getElementById("root")!, <RouterProvider router={router} />);
