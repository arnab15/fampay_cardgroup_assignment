import Error from "next/error";
import ErrorBoundary from "../Components/ErrorBoundry/ErrorBoundry";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    if (pageProps.error.code) {
        return <Error statusCode={pageProps.error.code} title={pageProps.error.message} />;
    }
    return (
        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>
    );
}

export default MyApp;
