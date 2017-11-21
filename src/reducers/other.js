
const initialState = {
    nav: [
        {
            "text": "Home",
            "path": "/"
        },
        {
            "text": "About",
            "path": "/about"
        }
    ]
}


export default function otherInfo(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}