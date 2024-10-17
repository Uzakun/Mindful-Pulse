export const Home = () => {
    return (
      <>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p> Setting the Standard for Global Mental Health Support</p>
                <h1>Welcome to Mindful Pulse</h1>
                <p>
                Your digital oasis for mental well-being. Dive into a world where mindfulness meets modernity, offering a heartbeat of support, guidance, and inspiration. Join our community to explore tools, tips, and stories that nourish your mind, pulse by pulse, towards a brighter, more resilient you.
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
  
        
        {/* 3rd section  */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/Images/Home2.png"
                alt="Helping mind to feel ease"
                width="400"
                height="500"
              />
            </div>
  
            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Started Today</h1>
              <p>
              Our mission is simple: to provide the best mental health services worldwide. With our compassionate approach, innovative solutions, and dedication to your well-being, we're here to guide you on your journey to mental wellness.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };