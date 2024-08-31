
const checkSession = async (setAuth) => {
    let response = await fetch("http://localhost:8080/api/v1/auth/get-session", {
        method: "GET" ,
        credentials : "include"
    });
    if (response.ok) {
        response = await response.json();
        console.log(response);

        if (response.success) {
            localStorage.setItem("auth", response.userId);
            setAuth({ userId: response.userId });
        }
    }
};

export default checkSession;