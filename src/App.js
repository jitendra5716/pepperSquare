import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";




function App() {

  const router = createBrowserRouter([
    {path:'/',element:<Navbar />,children:[
      {
        path:"/", element:<Home />
      },

      
    ]}
  ])
  return (
    <>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
   
    </>
  );
}

export default App;
