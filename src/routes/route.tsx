import { BrowserRouter, Routes, Route as MyRoute } from "react-router-dom"
import Header from "../layout/Header"
import LandingPage from "../pages/landing-page"
import LoginPage from "../pages/login-page"
import SignUp from "../pages/sign-up"
import User from "../pages/user"
import WishList from "../pages/wish-list"
import Cart from "../pages/cart"
import Checkout from "../pages/checkout"
import Account from "../pages/account"
import About from "../pages/about"
import Contact from "../pages/contact"
import NotFoundPage from "../pages/not-found-page"
import ProductDetails from "../pages/product-details"


export const Route = () => {
    return(
        <BrowserRouter>
            <Routes>
                <MyRoute 
                    element={<Header />}
                >
                    <MyRoute 
                        path="/"
                        element={<LandingPage />}
                    />
                    <MyRoute 
                        path="/login"
                        element={<LoginPage />}
                    />
                    <MyRoute 
                        path="/sign-up"
                        element={<SignUp />}
                    />
                    <MyRoute 
                        path="/user"
                        element={<User />}
                    />
                    <MyRoute 
                        path="/wishlist"
                        element={<WishList />}
                    />
                    <MyRoute 
                        path="/contact"
                        element={<Contact />}
                    />
                    <MyRoute 
                        path="/cart"
                        element={<Cart />}
                    />
                    <MyRoute 
                        path="/checkout"
                        element={<Checkout />}
                    />
                    <MyRoute 
                        path="/account"
                        element={<Account />}
                    />
                    <MyRoute 
                        path="/about"
                        element={<About />}
                    />
                    <MyRoute 
                        path="/product"
                        element={<ProductDetails />}
                    />
                    <MyRoute 
                        path="*"
                        element={<NotFoundPage />}
                    />
                </MyRoute>

            </Routes>
        </BrowserRouter>
    )
}