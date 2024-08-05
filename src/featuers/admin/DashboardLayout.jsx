import useProjects from "../../hooks/useProjects";
import useUsers from "../../hooks/useUsers";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading: isProposalsLoading, proposals } = useProposals();
  const { isLoading: isProjectsLoading, projects } = useProjects();
  const { isLoading: isUsersLoading, users } = useUsers();

  if (isProposalsLoading || isProjectsLoading || isUsersLoading)
    return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        projects={projects.length}
        users={users.length}
      />
    </div>
  );
}

export default DashboardLayout;
