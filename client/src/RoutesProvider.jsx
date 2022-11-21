import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Register from "./pages/auth/Register";
import PrivateRouter from "./pages/extras/PrivateRouter";
import NotFound from "./pages/extras/NotFound";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Navbar from "./components/nav/Navbar";
import Conversations from "./pages/Conversations";

export default function RoutesProvider() {
	return (
		<Router>
			<div className="flex mx-auto min-h-[100vh] ">
				<Toaster />
				<Routes>
					{/* private router to direct to login if not authenticated */}
					<Route
						path="*"
						element={
							<PrivateRouter>
								<div className="flex w-full flex-col gap-6 mx-auto bg-bgColor">
									<Navbar />
									<div className="container md:min-w-[97%]  mx-auto h-full flex items-center">
										<Routes>
											<Route path="/" element={<Home />} />
											<Route path="/profile/:userId/*" element={<Profile />} />
											<Route path="/search/:searchQuery" element={<Search />} />
											<Route path="/explore" element={<Search />} />
											<Route path="/message" element={<Conversations />} />
										</Routes>
									</div>
								</div>
							</PrivateRouter>
						}
					/>
					<Route path="/register" element={<Register />} />
					<Route path="/404" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
}
