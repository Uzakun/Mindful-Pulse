import { useAuth } from "./store/auth"


export const About = () => {
   const {user} = useAuth();
    return <>
    <main>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
          <p>Welcome, {user ? `${user.UserName} to our website`: `to our Website` }</p>
            <h1>Why Choose Us?</h1>
           
            <p>We understand that mental health encompasses a spectrum of experiences, from managing stress and anxiety to coping with depression and trauma. Our approach is holistic, acknowledging the interconnectedness of mind, body, and spirit in fostering resilience and healing.</p>
            
            <p>
            Education is key to destigmatizing mental health struggles and promoting proactive self-care. Mindful Pulse provides a wealth of resources, including articles, guides, and expert insights.
            </p>

            <p>Healing is often most effective within a supportive community. Mindful Pulse fosters a safe and inclusive space where individuals can share their experiences, find solidarity, and offer encouragement to others.</p>
            <p>
            Beyond information and support, we offer practical tools and techniques to help individuals incorporate mindfulness, self-compassion, and resilience-building practices into their daily lives.
            </p>

            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">Learn More</button>
              </a>
            </div>
          </div>

          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/Images/Home1.png"
              alt="Brain getting stronger"
              width="400"
              height="500"
            />
          </div>
        </div>
      </section>
    </main>

    
    
  </>
}

