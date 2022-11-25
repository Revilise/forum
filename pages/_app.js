import '../styles/colors.css'
import '../styles/global.css'
import {Provider} from "react-redux";
import store from "../app/store";
import { SWRConfig } from "swr";
import {fetcher} from "../components/conference-view/fetcher";

export default function App({Component, pageProps}) {
    return (
        <SWRConfig value={{fetcher}}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </SWRConfig>
    )
}