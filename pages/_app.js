import '../styles/colors.css'
import '../styles/global.css'
import {Provider} from "react-redux";
import store from "../app/store";
import { SWRConfig } from "swr";
import {fetcher} from "../components/conference-view/fetcher";
import Popup from "../features/popup/Popup";

export default function App({Component, pageProps}) {
    return (
        <SWRConfig value={{fetcher}}>
            <Provider store={store}>
                <Popup />
                <Component {...pageProps} />
            </Provider>
        </SWRConfig>
    )
}