import { useState } from "react"
import { signIn } from "../services/authServices"

const LoginForm = ({activateUser}) => {

    const initialFormData = {
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialFormData)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        console.log(activateUser)
        activateUser(formData.email)
        setFormData(initialFormData)
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