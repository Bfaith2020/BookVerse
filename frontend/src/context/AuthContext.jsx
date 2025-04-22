import { createContext, useContext} from 'react';

const AuthContext = createContext();
export const useAuth=() => {
    return useContext(AuthContext);
}

//authprovider
export const authprovider = ({children}) => {
const [currentUser, setCurrentUser]=useState(null)  // Replace with actual user state
const [loading, setLoading]=useState(true) // Replace with actual loading state

//register user
const registerUser = async (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

    const value = {
        currentUser,
        registerUser,


    }
return (
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
)

}