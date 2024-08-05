import { useState } from "react";
import ProjectTable from "../featuers/projects/ProjectTable";
import Modal from "../ui/Modal";
import CreateProjectForm from "../featuers/projects/CreateProjectForm";

function Projects() {
  const [isNewOpen, setIsNewOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-black text-secondary-700 text-xl">پروژه های شما</h2>
        <button
          className="btn btn--primary"
          onClick={() => {
            setIsNewOpen(true);
          }}
        >
          افزودن پروژه جدید
        </button>
        {isNewOpen && (
          <Modal
            open={isNewOpen}
            title="افزودن پروژه جدید"
            onClose={() => setIsNewOpen(false)}
          >
            <CreateProjectForm onClose={() => setIsNewOpen(false)} />
          </Modal>
        )}
      </div>
      <ProjectTable />
    </div>
  );
}

export default Projects;
