import "../styles/globals.css";
import Navbar from "../components/Navbar/navbar";
import Layout from "../components/Layout/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<Navbar />
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default MyApp;
