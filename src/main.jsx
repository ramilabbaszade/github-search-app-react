import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from './App'
import {store} from "@/store/index.js";

import './index.css'
import 'rsuite/dist/rsuite.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <div></div>
        </Provider>
    </BrowserRouter>
)
