
export default function actionLogin(comment) {
    return {
        type: "CHECK_AUTH",
        payload: comment
    }
}