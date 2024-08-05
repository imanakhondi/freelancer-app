import { MdAssignment } from "react-icons/md";
import Table from "../../../ui/Table";
import toLocalDate from "../../../utils/toLocalDate";
import toPersianNumbersWithComma from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import CreateProposal from "../../proposals/CreateProposal";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index }) {
  const { title, budget, status, deadline } = project;
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  return (
    <Table.row key={project._id}>
      <td>{index + 1}</td>
      <td className="group relative">
        <span className="invisible min-w-32 bg-secondary-300 text-secondary-600 text-center rounded-md p-1 absolute z-10 -top-3 group-hover:visible">
          {title}
        </span>
        {truncateText(title, 10)}
      </td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDate(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status]?.className}`}>
          {projectStatus[status]?.label}
        </span>
      </td>
      <td>
        <button onClick={() => setIsRequestOpen(true)}>
          <MdAssignment className="w-5 h-5 text-primary-900" />
        </button>
        <Modal
          open={isRequestOpen}
          title={`درخواست انجام پروژه ${title}`}
          onClose={() => setIsRequestOpen(false)}
        >
          <CreateProposal
            projectId={project._id}
            onClose={() => setIsRequestOpen(false)}
          />
        </Modal>
      </td>
    </Table.row>
  );
}

export default ProjectRow;
