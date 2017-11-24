
const initialState = {
    infoUser: {
        "name": "Вероника Ростова",
        "desc": "Менеджер по продажам",
        "status": "Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны"
    },
    InfoData: [
        {
            "name": "Ручное бронирование",
            "val": "11"
        },
        {
            "name": "Пакетные туры",
            "val": "3"
        },
        {
            "name": "Отели",
            "val": "1"
        }
    ],
    CommentData: [
        {
            "name": "Самуил",
            "time": "3 октября 2011",
            "text": "Привет, Верунь! ниче себе ты крутая. фотка класс!!!! First comment "
        },
        {
            "name": "Лилия Семёновна",
            "time": "14 октября 2011",
            "text": "Second comment Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"
        },
        {
            "name": "Самуил",
            "time": "3 октября 2011",
            "text": "Привет, Верунь! ниче себе ты крутая. фотка класс!!!! Third comment"
        },
        {
            "name": "Лилия Семёновна",
            "time": "14 октября 2011",
            "text": "Fourth comment Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"
        }
    ],
}


export default function userInfo(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            let newCommentData = state.CommentData.slice();
            newCommentData[newCommentData.length] = action.payload;
            return {...state, CommentData: newCommentData};

        default:
            return state;
    }
}