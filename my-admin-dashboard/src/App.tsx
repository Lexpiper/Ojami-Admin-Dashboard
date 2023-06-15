import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./screens/Home/Home";
import Orders from "./screens/Orders/Orders";
import Products from "./screens/Products/Products";

function App() {
  return (
    <div className="App dark:text-gray-100 dark:bg-slate-900 duration-100 overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="orders">
              <Route index element={<Orders />} />
            </Route>
            {/* <Route path="products">
              <Route index element={<Products />} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
