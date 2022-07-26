import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signUp } from "../services/authServices"

const SignUpForm = ({activateUser}) => {

    const navigate = useNavigate()
    const initialFormData = {
        email: "",
        username: "",
        password: "",
        password_confirmation: "",
    }
    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp(formData)
        .then((user) => {
            // console.log(user)
            if(user.error){
                console.log(user.error)
                let errorMessage = ""
                Object.keys(user.error).forEach(key => {
                    errorMessage = errorMessage.concat("", `${key} ${user.error[key]}`)
                })
                setError(errorMessage)
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
                    <label>Username:</label>
                    <input type="text" name="username" id="username" value={formData.username} onChange={handleFormData} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData} />
                </div>
                <div>
                    <label htmlFor="password">Password confirmation:</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} onChange={handleFormData} />
                </div>

                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default SignUpForm