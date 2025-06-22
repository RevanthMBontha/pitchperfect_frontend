import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home.jsx";
import ExtractURL from "./pages/ExtractURL.jsx";
import EditDetails from "./pages/EditDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import EditScript from "./pages/EditScript.jsx";
import FinalProduct from "./pages/FinalProduct.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/extract-url",
      element: <ExtractURL />,
    },
    {
      path: "/edit-details",
      element: <EditDetails />,
    },
    {
      path: "/edit-script",
      element: <EditScript />,
    },
    { path: "/final-product", element: <FinalProduct /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="bottom-center" reverseOrder={true} />
    </QueryClientProvider>
  );
}

export default App;
