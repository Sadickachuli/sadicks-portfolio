import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";
import HomePage from "./pages/homePage";
import NotFound from "./pages/notFound";
import authLoader from "./loaders/authLoader";
import ProfilePage from "./pages/profile";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import homeLoader from "./loaders/unAuthLoader";

export default function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route loader={homeLoader}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route loader={authLoader}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
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
