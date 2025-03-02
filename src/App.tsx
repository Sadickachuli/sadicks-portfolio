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
import Header from "./components/header";
import ProjectsSection from "./components/homePage/projects"; 
import { Analytics } from "@vercel/analytics/react"; 
import { SpeedInsights } from "@vercel/speed-insights/react"; 

export default function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects-section" element={<ProjectsSection />} /> 
        <Route path="projects/:id" element={<ViewProject />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <article>
      <RouterProvider router={route} />
      <Toaster position="top-center" reverseOrder={false} />
      <Analytics /> 
      <SpeedInsights /> 
    </article>
  );
}
