import { useAuth } from "../store/auth"

export const Service = () => {

    const { services } = useAuth();


    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services </h1>
            </div>
            <div className="container grid grid-three-cols">

                {
                    services?.map((curElem, index) => {

                        const {provider, price, description, service} = curElem;

                        return (
                            <div className="card" key={index}>
                                <div className="card-img">
                                    <img src="/Images/MH.jpg" alt="Services informantion" width="300" height="250" />
                                </div>

                                <div className="card-details">
                                    <div className="grid grid-two-cols">
                                        <p>{provider}</p>
                                        <p>{price}</p>
                                    </div>
                                    <h2>{service}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        );
                    })
                }




            </div>



        </section >
    )
}

