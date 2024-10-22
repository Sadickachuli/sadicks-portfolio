import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";
import HomePage from "./pages/homePage";
import NotFound from "./pages/notFound";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ViewProject from "./pages/viewProject";
import ContactPage from "./pages/contact";

export default function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="project" element={<ProjectsPage />} />
        <Route path="project/:id" element={<ViewProject />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <article>
      <RouterProvider router={route} />
      <Toaster position="top-center" reverseOrder={false} />
    </article>
  );
}
