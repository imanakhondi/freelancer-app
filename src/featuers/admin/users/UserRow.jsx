import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import ChangeUserStatus from "./ChangeUserStatus";

const userStatus = [
  {
    value: 0,
    label: "رد شده",
    className: "badge--danger",
  },
  {
    value: 1,
    label: "در انتظار تائید",
    className: "badge--secondary",
  },
  {
    value: 2,
    label: "تائید شده",
    className: "badge--success",
  },
];

function UserRow({ index, user }) {
  const { name, email, phoneNumber, role, status } = user;

  const [isChangeStatusUser, setIsChangeStatusUser] = useState(false);

  return (
    <Table.row key={user._id}>
      <td>{index + 1}</td>
      <td className="group relative">
        <span className="invisible min-w-32 bg-secondary-300 text-secondary-600 text-center rounded-md p-1 absolute z-10 -top-3 group-hover:visible">
          {name}
        </span>
        {name}
      </td>
      <td>{email} </td>
      <td>{phoneNumber}</td>
      <td>{role}</td>
      <td>
        <p className={`badge ${userStatus[status].className}`}>
          {userStatus[status].label}
        </p>
      </td>
      <td>
        <button onClick={() => setIsChangeStatusUser(true)}>
          تغییر وضعیت کاربر
        </button>
        <Modal
          title="تغییر وضعیت کاربر"
          open={isChangeStatusUser}
          onClose={() => setIsChangeStatusUser(false)}
        >
          <ChangeUserStatus
            userId={user._id}
            onClose={() => setIsChangeStatusUser(false)}
          />
        </Modal>
      </td>
    </Table.row>
  );
}

export default UserRow;
