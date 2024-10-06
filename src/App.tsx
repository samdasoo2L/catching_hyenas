import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";
import LoadingScreen from "./components/loading";
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/protected";
import Layout from "./components/layout";
import Login from "./router/login";
import Home from "./router/home";
import FishListup from "./router/fish-listup";
import SalesStatistics from "./router/sales-statistics";
import CreateAccount from "./router/create-account";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "listup",
        element: <FishListup />,
      },
      {
        path: "static",
        element: <SalesStatistics />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/create-account", element: <CreateAccount /> },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body{
    background-color: white;
    color: black;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    // await auth.authStateReady();
    setIsLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;
