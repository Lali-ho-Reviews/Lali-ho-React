import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signIn } from "../services/authServices"

const LoginForm = ({activateUser}) => {

    const navigate = useNavigate()
    const initialFormData = {
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn(formData)
        .then((user) => {
            // console.log(user)
            if(user.error){
                console.log("user.error", user.error)
                setError(user.error)
            }else{
                setError(null)
                sessionStorage.setItem("username",  user.username)
                sessionStorage.setItem("token", user.jwt)
                console.log(sessionStorage.getItem("username"))
                activateUser(user)
                setFormData(initialFormData)
                navigate("/fc")
            }
            
        })
    }

    const handleFormData = (e) => {
        console.log(e.target.value)
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }


    return (
        <>
        {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleFormData} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData} />
                </div>

                <input type="submit" value="Login" />

                
            </form>

            
        </>
        
    )
}

export default LoginForm