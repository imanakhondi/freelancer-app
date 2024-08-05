import useUsers from "../../../hooks/useUsers";
import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import UserRow from "./UserRow";

function UsersTable() {
  const { isLoading, users } = useUsers();

  if (isLoading) return <Loading />;
  if (!users.length) return <Empty resourceName="کاربری" />;

  return (
    <div>
      <Table>
        <Table.header>
          <th>#</th>
          <th>نام</th>
          <th>ایمیل</th>
          <th>شماره موبایل</th>
          <th>نقش</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.header>
        <Table.body>
          {users.map((user, index) => (
            <UserRow key={user._id} user={user} index={index} />
          ))}
        </Table.body>
      </Table>
    </div>
  );
}

export default UsersTable;
