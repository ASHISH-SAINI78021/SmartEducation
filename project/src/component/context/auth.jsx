import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: ""
    });

    useEffect(() => {
        try {
            const data = localStorage.getItem("auth");
            if (data) {
                const parsedData = JSON.parse(data);
                if (parsedData) {
                    setAuth({
                        token: parsedData
                    });
                }
            }
        } catch (error) {
            console.error("Error parsing auth data from localStorage", error);
        }
    }, []);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
