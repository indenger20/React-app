import Search from '../server/shared/fetch';
import axios from 'axios';

const initialState = {
    nav: [
        {
            "text": "Home",
            "path": "/react-app/"
        },
        {
            "text": "About",
            "path": "/react-app/about"
        }
    ],
    auth: null
}


export default function otherInfo(state = initialState, action) {
    switch (action.type) {
        case 'CHECK_AUTH':

            let res = axios.post('/react-app/api/auth', action.payload);

            return { ...state, auth: res };

        default:
            return state;
    }
}

