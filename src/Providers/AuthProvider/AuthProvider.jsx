import { createContext, useState } from "react";
import {getAuth} from 'firebase/auth'
import app from "../../FirebaseConfig/FirebaseConfig";

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const userInfo = {
        user
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;