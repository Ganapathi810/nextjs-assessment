import { DocumentsTable } from "@/components/documents-table";
import { GroupOfCards } from "@/components/group-of-cards";

export default function Home() {
  return (
    <div className="px-3 pb-5 w-full">
      <GroupOfCards />
      <DocumentsTable />
    </div>
  );
}
