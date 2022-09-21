import Footer from "./footer"
import Navbar from "./navBar"

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	)
}
