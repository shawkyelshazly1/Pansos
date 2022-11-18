import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Register from "./pages/auth/Register";
import PrivateRouter from "./pages/extras/PrivateRouter";
import NotFound from "./pages/extras/NotFound";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/nav/Navbar";

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
							<div className="flex w-full flex-col gap-6 mx-auto bg-bgColor">
								<PrivateRouter>
									<Navbar />
									<div className="container md:min-w-[97%]  mx-auto h-full flex items-center">
										<Routes>
											<Route path="/" element={<Home />} />
											<Route path="/profile/:userId" element={<Profile />} />
										</Routes>
									</div>
								</PrivateRouter>
							</div>
						}
					/>
					<Route path="/register" element={<Register />} />
					<Route path="/404" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
}
