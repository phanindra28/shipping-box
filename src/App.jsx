import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from "./assets/logo.svg?react";
import ListView from "./features/list-view/ListView.jsx";
import AddBox from "./features/add-box/AddBox.jsx";
import { ShippingProvider } from "./context/ShippingContext.jsx";
import NavBar from "./features/nav-bar/NavBar.jsx";

function App() {
  return (
    <ShippingProvider>
      <BrowserRouter>
        <NavBar />
        <main className={"relative top-[82px] overflow-auto"}>
          <Routes>
            <Route path="/" element={<AddBox />} />
            <Route path="/view-all" element={<ListView />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ShippingProvider>
  );
}

export default App;
