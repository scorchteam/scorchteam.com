import ProjectCard from "./ProjectCard";

const ProjectCards = (props) => {

    const renderProjectCards = (projects) => {
        // console.log(projects);
        if (!projects) {
            return <></>;
        }

        const recentProjectsCards =  Object.values(projects).map((project) => {
            return (
                <ProjectCard
                    key={project.title}
                    backgroundColor={project.backgroundColor}
                    textColor={project.textColor}
                    title={project.title}
                    description={project.description}
                    showcaseImage={`${project.showcaseImage}`}
                    showcaseImageDescription={project.showcaseImageDescription}
                    sourceLink={project.sourceLink}
                    sourceLinkText={project.sourceLinkText}
                    projectLink={project.projectLink}
                    projectLinkText={project.projectLinkText}
                    teamMembers={project.teamMembers} />
            )
        });
        return recentProjectsCards;
    }

    return (
        <>
            {renderProjectCards(props.projects)}       
        </>
    );
}

export default ProjectCards;