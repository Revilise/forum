import '../styles/colors.css'
import '../styles/global.css'
import {Provider} from "react-redux";
import store from "../app/store";

export default function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}