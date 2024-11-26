import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () => {
    const [user, setUser] = useState({
        Email: "",
        Password: "",
    })

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(user)

            })

            if (response.ok) {
                const res_data = await response.json();
                toast.success("Login Successful")
                console.log("Response from server", res_data)
                storeTokenInLS(res_data.tokon);
                setUser({
                    Email: "",
                    Password: ""
                })
                navigate("/")
            } else {
                toast.error("Invalid Credentails")
                console.log("Invalid Credentials")

            }


            console.log("Login form", response)
        } catch (error) {
            console.log("Login", error)
        }

    };

    return <><section>
        <main>
            <div className="section-login">
                <div className="container grid grid-two-cols">
                    <div className="login-image reg-img">
                        <img
                            src="/Images/Login.png"
                            alt="A Picture About Mental Health"
                            width="460"
                            height="450"
                        />
                    </div>

                    {/* login code  */}
                    <div className="login-form">
                        <h1 className="main-heading mb-3">Login</h1>
                        <br />
                        <form onSubmit={handleSubmit}>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    name="Email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={user.Email}
                                    onChange={handleInput}
                                    placeholder="email"
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="Password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                    value={user.Password}
                                    onChange={handleInput}
                                    placeholder="password"
                                />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-submit">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section></>
}

