import Head from "next/head";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="/css/styles.css" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
