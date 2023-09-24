// import { createBrowserRouter } from 'react-router-dom';
// import { RouterProvider } from 'react-router-dom';
import "./App.css";
import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import appStore from "./utils/appStore";
// import Login from './components/Login';
// import Browse from './components/Browse';

function App() {
  // const appRouter = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Body />,
  //     children: [
  //      {
  //       path: '/login',
  //       element: <Login />
  //      },
  //      {
  //       path: '/browse',
  //       element: <Browse />
  //      }
  //     ]
  //   }
  // ]);

  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
