import ProjectCards from "./components/ProjectCard/ProjectCards";
import "./Homepage.scss";

const Homepage = (props) => {

    const getRecentProjects = (projects) => {
        //get recent projects object
        var recentProjectsObjs = [];
        projects.recentKeys.forEach((projectName) => {
            recentProjectsObjs.push(projects.projects[`${projectName}`]);
        })
        return recentProjectsObjs;
    }

    return (
        <div className="homepage-container">
            <div className="homepage-section-1 wave-container">
                <h1>Scorch Team</h1>
                <h5>Innovative solutions and passion projects</h5>
                <div className="header-wave-container">
                    <svg id="wave" viewBox="0 0 1440 200" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#FFD9CE" d="M0,180L48,156.7C96,133,192,87,288,56.7C384,27,480,13,576,26.7C672,40,768,80,864,96.7C960,113,1056,107,1152,86.7C1248,67,1344,33,1440,43.3C1536,53,1632,107,1728,130C1824,153,1920,147,2016,126.7C2112,107,2208,73,2304,80C2400,87,2496,133,2592,126.7C2688,120,2784,60,2880,56.7C2976,53,3072,107,3168,113.3C3264,120,3360,80,3456,73.3C3552,67,3648,93,3744,110C3840,127,3936,133,4032,133.3C4128,133,4224,127,4320,103.3C4416,80,4512,40,4608,46.7C4704,53,4800,107,4896,116.7C4992,127,5088,93,5184,66.7C5280,40,5376,20,5472,30C5568,40,5664,80,5760,106.7C5856,133,5952,147,6048,156.7C6144,167,6240,173,6336,173.3C6432,173,6528,167,6624,150C6720,133,6816,107,6864,93.3L6912,80L6912,200L6864,200C6816,200,6720,200,6624,200C6528,200,6432,200,6336,200C6240,200,6144,200,6048,200C5952,200,5856,200,5760,200C5664,200,5568,200,5472,200C5376,200,5280,200,5184,200C5088,200,4992,200,4896,200C4800,200,4704,200,4608,200C4512,200,4416,200,4320,200C4224,200,4128,200,4032,200C3936,200,3840,200,3744,200C3648,200,3552,200,3456,200C3360,200,3264,200,3168,200C3072,200,2976,200,2880,200C2784,200,2688,200,2592,200C2496,200,2400,200,2304,200C2208,200,2112,200,2016,200C1920,200,1824,200,1728,200C1632,200,1536,200,1440,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"></path></svg>
                </div>
            </div>
            <div className="homepage-section-2">
                <h2>Recent Projects</h2>
                <h5>Check out what we've been up to</h5>
                <a href="/projects" className="view-all-projects-button"><p>View all projects</p><i className="fas fa-long-arrow-alt-right"></i></a>
                <div className="project-cards">
                    <ProjectCards
                        projects={getRecentProjects(props.projects)} />
                </div>  
            </div>
        </div>
    );
}

export default Homepage;