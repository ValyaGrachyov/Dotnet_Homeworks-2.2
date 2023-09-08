const Auth =() => {

    function handler(){
        window.location.replace("https://accounts.google.com/o/oauth2/v2/auth?response_type=code&"+
        "client_id=585964779299-rfqn24tr6ihod2jvnk1fql04tvdf75bj.apps.googleusercontent.com&"+
        "redirect_uri=http://localhost:3000/afterauth&"+
        "scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile&"+
        "nonce=123456789012345678901234567890&")
    }

    return(
        <button onClick={handler}>Authorize via google</button>
    )
}

export default Auth;