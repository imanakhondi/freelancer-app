import ProjectHeader from "../featuers/project/ProjectHeader";
import ProposalsTable from "../featuers/project/ProposalsTable";
import useProject from "../featuers/project/useProject";
import Loading from "../ui/Loading";

function SingleProject() {
  const { project, isLoading } = useProject();

  if (isLoading) return <Loading />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}

export default SingleProject;
