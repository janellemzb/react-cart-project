import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu.js";
import "bootstrap/dist/css/bootstrap.css";
import Cart from "./components/Cart.js";
import { ShopContextProvider } from "./components/context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Address from "./components/Address";
import GithubAuth from "./components/user";
import MenuItemDetails from "./components/MenuItemDetails.js";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";

const { Button, Card, Divider } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Card,
    Divider,
  },
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <ShopContextProvider>
        <BrowserRouter>
          <div style={{ minHeight: "87vh" }}>
            <Header />
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/menu/:id" element={<MenuItemDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/address" element={<Address />} />
              <Route path="/user" element={<GithubAuth />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </ChakraBaseProvider>
  );
}

export default App;
