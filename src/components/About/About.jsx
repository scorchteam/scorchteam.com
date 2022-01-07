import "./About.scss";

const About = () => {
    return (
        <section className="about-container">
            <div className="about-header">
                <h1>Meet the Team</h1>
                {/* <h5>Innovative solutions and passion projects</h5> */}
                <div className="header-wave-container">
                    <svg id="wave" style={{transition: '0.3s'}} viewBox="0 0 1440 200" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#FFD9CE" d="M0,0L40,13.3C80,27,160,53,240,70C320,87,400,93,480,86.7C560,80,640,60,720,60C800,60,880,80,960,80C1040,80,1120,60,1200,56.7C1280,53,1360,67,1440,90C1520,113,1600,147,1680,140C1760,133,1840,87,1920,86.7C2000,87,2080,133,2160,146.7C2240,160,2320,140,2400,116.7C2480,93,2560,67,2640,53.3C2720,40,2800,40,2880,46.7C2960,53,3040,67,3120,63.3C3200,60,3280,40,3360,30C3440,20,3520,20,3600,33.3C3680,47,3760,73,3840,70C3920,67,4000,33,4080,30C4160,27,4240,53,4320,83.3C4400,113,4480,147,4560,163.3C4640,180,4720,180,4800,173.3C4880,167,4960,153,5040,150C5120,147,5200,153,5280,130C5360,107,5440,53,5520,43.3C5600,33,5680,67,5720,83.3L5760,100L5760,200L5720,200C5680,200,5600,200,5520,200C5440,200,5360,200,5280,200C5200,200,5120,200,5040,200C4960,200,4880,200,4800,200C4720,200,4640,200,4560,200C4480,200,4400,200,4320,200C4240,200,4160,200,4080,200C4000,200,3920,200,3840,200C3760,200,3680,200,3600,200C3520,200,3440,200,3360,200C3280,200,3200,200,3120,200C3040,200,2960,200,2880,200C2800,200,2720,200,2640,200C2560,200,2480,200,2400,200C2320,200,2240,200,2160,200C2080,200,2000,200,1920,200C1840,200,1760,200,1680,200C1600,200,1520,200,1440,200C1360,200,1280,200,1200,200C1120,200,1040,200,960,200C880,200,800,200,720,200C640,200,560,200,480,200C400,200,320,200,240,200C160,200,80,200,40,200L0,200Z"></path></svg>
                </div>
            </div>  
        </section>
    );
}

export default About;