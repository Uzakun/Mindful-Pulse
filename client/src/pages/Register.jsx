import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const Register = () => {
  const [user, setUser] = useState({
    UserName: "",
    Email: "",
    Phone: "",
    Password: "",
  });



  const navigate = useNavigate();

  const {storeTokenInLS} = useAuth();



  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };



  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {

      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      })

      const res_data = await response.json();
        console.log("Response from server", res_data.extraDetails)

      if (response.ok) {
        
        storeTokenInLS(res_data.tokon);
        setUser({
          UserName: "",
          Email: "",
          Phone: "",
          Password: "",
        })
        toast.success("Registration Successful")
        navigate("/");
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }


     
    }
    catch (error) {
      console.log("Register", error);
    }


  }



  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/Images/Regi&LPage.png"
                  alt="A Picture About Mental Health"
                  width="400"
                  height="500"
                />
              </div>

              {/* Registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="UserName"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.UserName}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
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
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="Phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.Phone}
                      onChange={handleInput}
                      placeholder="phone"
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
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};