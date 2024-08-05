import Table from "../../ui/Table";
import toPersianNumbersWithComma, {
  toPersianNumbers,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تائید",
    className: "badge--secondary",
  },
  {
    label: "تائید شده",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index }) {
  const { description, price, status, duration } = proposal;

  return (
    <Table.row key={proposal._id}>
      <td>{index + 1}</td>
      <td className="group relative">
        <span className="invisible min-w-32 bg-secondary-300 text-secondary-600 text-center rounded-md p-1 absolute z-10 -top-3 group-hover:visible">
          {description}
        </span>
        {truncateText(description, 60)}
      </td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <p className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </p>
      </td>
    </Table.row>
  );
}

export default ProposalRow;
