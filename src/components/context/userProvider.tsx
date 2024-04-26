import { createContext, useState } from "react";

type userProps = {
    children: React.ReactNode
}

export type AuthUser = {
    name: string,
    email: string
}


type userContextType = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
export const Usercontext = createContext<userContextType | null>(null)

export const UserProvider = ({ children }: userProps) => {

    const [user, setUser] = useState<AuthUser | null>(null)
    return (
        <Usercontext.Provider value={{ user, setUser }}>
            {children}
        </Usercontext.Provider>
    )
}