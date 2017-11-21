
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
    ]
}


export default function otherInfo(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}