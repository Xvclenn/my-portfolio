import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow p-4">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
