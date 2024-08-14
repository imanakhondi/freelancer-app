import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import toPersianNumbers from "../../utils/toPersianNumbers";
import Stat from "../../ui/Stat";
import StatsLayout from "../../ui/StatsLayout";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter(
    (proposal) => proposal.status === 2
  );
  const blance = acceptedProposals.reduce((acc, curr) => curr.price + acc, 0);

  return (
    <StatsLayout>
      <Stat
        title="درخواست ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        value={numOfProposals}
        color="primary"
      />
      <Stat
        title="درخواست های تائید شده"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        value={acceptedProposals.length}
        color="green"
      />
      <Stat
        title="کیف پول"
        icon={<HiCollection className="w-20 h-20" />}
        value={toPersianNumbers(blance)}
        color="yellow"
      />
    </StatsLayout>
  );
}

export default Stats;
