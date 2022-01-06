import "./ProjectCard.scss";

const ProjectCard = (props) => {

    const renderTeamMembers = () => {
        var teamMemberList = ""
        props.teamMembers.forEach((item, index) => {
            if (index === props.teamMembers.length - 1) {
                teamMemberList += `${item}`;
            } else {
                teamMemberList += `${item}, `;
            }
        });
        return teamMemberList;
    }

    return (
        <div className="project-card-container" style={{ backgroundColor: props.backgroundColor, color: props.textColor }}>
            <div className="project-card-row-1">
                <img className="project-card-image" alt={props.showcaseImageDescription} src={props.showcaseImage}></img>
            </div>
            <div className="project-card-row-2">
                <h3 className="project-card-title">{props.title}</h3>
                <p className="project-card-description">{props.description}</p>
                <div className="project-card-team-members">
                    <p className="project-card-team-members-p">Team Members:</p>
                    <p className="project-card-team-members-p">{renderTeamMembers()}</p>  
                </div>
            </div>
            <div className="project-card-row-3">
                {
                    props.sourceLink &&
                    <a className="project-card-link" href={props.sourceLink} style={{backgroundColor: props.textColor, color: props.backgroundColor}}>{props.sourceLinkText}</a>
                }
                {
                    props.projectLink &&
                    <a className="project-card-link" href={props.projectLink} style={{backgroundColor: props.textColor, color: props.backgroundColor}}>{props.projectLinkText}</a>
                }
            </div>
        </div >
    );
}

export default ProjectCard;