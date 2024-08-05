import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import toPersianNumbersWithComma from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import ChangeProposalStatus from "./ChangeProposalStatus";

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

function ProposalsRow({ proposal, index }) {
  const { status, user } = proposal;
  const [isOpenChangeStatus, setIsOpenChangeStatus] = useState(false);

  return (
    <Table.row>
      <td>{index + 1}</td>
      <td>{user.name || "-"}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration} روز</td>
      <td>{toPersianNumbersWithComma(proposal?.price)}</td>
      <td>
        <p className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </p>
      </td>
      <td>
        <button onClick={() => setIsOpenChangeStatus(true)}>تغییر وضعیت</button>
        <Modal
          title="تغییر وضعیت درخواست"
          open={isOpenChangeStatus}
          onClose={() => setIsOpenChangeStatus(false)}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setIsOpenChangeStatus(false)}
          />
        </Modal>
      </td>
    </Table.row>
  );
}

export default ProposalsRow;
