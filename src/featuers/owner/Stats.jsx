import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map(
    (project) => project.status === 2
  ).length;
  const numOgProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-3 gap-x-8">
      <Stat
        title="پروژه ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        value={numOfProjects}
        color="primary"
      />
      <Stat
        title="پروژه های واگذار شده"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        value={numOfAcceptedProjects}
        color="green"
      />
      <Stat
        title="درخواست ها"
        icon={<HiCollection className="w-20 h-20" />}
        value={numOgProposals}
        color="yellow"
      />
    </div>
  );
}

export default Stats;
