import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useLoaderData } from "react-router-dom";
import type { Payment } from "./columns";

const PaymentsPage = () => {
  const data = useLoaderData() as Payment[];

  return (
    <div className="flex-1 min-h-0 p-3">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
