import { useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {
    const [Contact, setContact] = useState({
        UserName: "",
        Email: "",
        Message: "",
    })



    const [userData, setUserData] = useState(true);

    const {user} = useAuth();


    if(userData && user){
        setContact({
            UserName: user.UserName,
            Email: user.Email,
            Message: "",
        })

        setUserData(false);
    }



    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        // setContact({
        //     ...Contact,
        //     [name]: value,
        // })

        // or
        setContact((prev) => ({
            ...prev,
            [name]: value,
        }))
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Contact);
    };

    return <>
        <section>
            <main>
                <div className="section-contact">
                    <div className="container grid grid-two-cols">
                        <div className="contact-image reg-img">
                            <img
                                src="/Images/Contact.png"
                                alt="A Picture About Mental Health"
                                width="400"
                                height="450"
                            />
                        </div>

                        {/* contact code  */}
                        <div className="contact-form">
                            <h1 className="main-heading mb-3">Contact Us</h1>
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
                                        value={Contact.UserName}
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
                                        value={Contact.Email}
                                        onChange={handleInput}
                                        placeholder="email"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea name="Message" id="message"
                                        required
                                        autoComplete="off"
                                        value={Contact.Message}
                                        onChange={handleInput}
                                        cols="80" rows="3"></textarea>

                                </div>


                                <br />
                                <button type="submit" className="btn btn-submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </main>
            <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7828804106084!2d-0.1500507098167513!3d51.51719919914412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760358699af981%3A0x291766470bfb3f65!2sCentre%20For%20Mental%20Health!5e0!3m2!1sen!2sin!4v1713814618438!5m2!1sen!2sin" width="1520" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>

        </section>
    </>
}

