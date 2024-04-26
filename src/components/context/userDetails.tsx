import { useContext } from "react"
import { UserProvider, Usercontext } from "./userProvider"
import { Button } from "../button"

export const UserDetails = () => {

    const userDetails = useContext(Usercontext)
    const handleLogin = () => {
        userDetails?.setUser({
            name: "gokul",
            email: "gokul@gmail.com"
        })
    }
    const handleLogOut = () => {
        userDetails?.setUser({
            name: "",
            email: ""
        })
    }


    return (
        <div>
            <p>
                user name {userDetails?.user?.name}
            </p>
            <p>
                user email {userDetails?.user?.email}
            </p>
            <Button btnLabel="login" handleclick={handleLogin} />
            <Button btnLabel="logout" handleclick={handleLogOut} />
        </div>
    )
}