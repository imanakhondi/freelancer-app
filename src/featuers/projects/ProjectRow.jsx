import { HiEye, HiOutlineTrash } from "react-icons/hi";
import Table from "../../ui/Table";
import toLocalDate from "../../utils/toLocalDate";
import truncateText from "../../utils/truncateText";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";
import toPersianNumbersWithComma from "../../utils/toPersianNumbers";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  const { removeProject } = useRemoveProject();

  return (
    <Table.row key={project._id}>
      <td>{index + 1}</td>
      <td className="group relative">
        <span className="invisible min-w-32 bg-secondary-300 text-secondary-600 text-center rounded-md p-1 absolute z-10 -top-3 group-hover:visible">
          {project.title}
        </span>
        {truncateText(project.title, 10)}
      </td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDate(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center gap-x-2">
          <button onClick={() => setIsEditOpen(true)}>
            <TbPencilMinus className="w-5 h-5 text-primary-900" />
          </button>
          <Modal
            open={isEditOpen}
            title={`ویرایش ${project.title}`}
            onClose={() => setIsEditOpen(false)}
          >
            <CreateProjectForm
              projectToEdit={project}
              onClose={() => setIsEditOpen(false)}
            />
          </Modal>
          <button onClick={() => setIsRemoveOpen(true)}>
            <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>
          <Modal
            open={isRemoveOpen}
            title={`حذف ${project.title}`}
            onClose={() => setIsRemoveOpen(false)}
          >
            <ConfirmDelete
              resourceName={project.title}
              onClose={() => setIsRemoveOpen(false)}
              disabled={false}
              onConfirm={() =>
                removeProject(project._id, {
                  onSuccess: () => setIsRemoveOpen(false),
                })
              }
            />
          </Modal>
        </div>
      </td>
      <td>
        <Link to={project._id} className="flex justify-center">
          <HiEye className="w-5 h-5 text-primary-900" />
        </Link>
      </td>
    </Table.row>
  );
}

export default ProjectRow;
