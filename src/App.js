
import "./style.scss";
// import Framel from "./Framel/Framel";
import BoxAll from "./components/BoxAll/BoxAll";

function App() {

        return(
          <div>
            <BoxAll/>
          </div>
        )


  /*const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
                  <Framel />
               </div>
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/frame",
      element: <Boxes01 />
               
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );*/
}

export default App;
