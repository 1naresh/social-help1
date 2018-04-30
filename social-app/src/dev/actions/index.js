export function onSignup(user){
    return{
        type: "ON_SIGNUP",
        playload: user
    }
}
export function onLogin(credentials){
    // fetch('/users/login')
    //     .then(res =>res.json())
    //     .then(res => console.log(res))
    localStorage.token="naresh"
    return{
        type: "ON_LOGIN",
        playload: credentials
    }
}