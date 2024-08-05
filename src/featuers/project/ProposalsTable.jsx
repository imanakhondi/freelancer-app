import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalsRow from "./ProposalsRow";

function ProposalsTable({ proposals }) {
  if (!proposals.length) return <Empty resourceName="درخواستی" />;
  return (
    <Table>
      <Table.header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.header>
      <Table.body>
        {proposals.map((proposal, index) => (
          <ProposalsRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.body>
    </Table>
  );
}

export default ProposalsTable;
