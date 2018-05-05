export function onSignup(user){
    return{
        type: "ON_SIGNUP",
        playload: user
    }
}
export function onLogin(credentials){
    console.log(credentials)
    localStorage.token="naresh"
    return{
        type: "ON_LOGIN",
        playload: credentials
    }
}