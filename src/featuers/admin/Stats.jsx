import Stat from "../../ui/Stat";
import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import StatsLayout from "../../ui/StatsLayout";

function Stats({ projects, users, proposals }) {
  return (
    <StatsLayout>
      <Stat
        title="کاربران"
        icon={<HiUser className="w-20 h-20" />}
        value={users}
        color="green"
      />
      <Stat
        title="درخواست ها"
        icon={<HiCollection className="w-20 h-20" />}
        value={proposals}
        color="primary"
      />
      <Stat
        title="پروژه ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        value={projects}
        color="yellow"
      />
    </StatsLayout>
  );
}

export default Stats;
