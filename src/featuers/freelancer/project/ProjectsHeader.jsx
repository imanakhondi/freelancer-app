import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOptions = [
  { label: "مرتب سازی (جدیدترین)", value: "latest" },
  { label: "مرتب سازی (قدیمی ترین)", value: "earliest" },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex items-center justify-between mb-8 text-secondary-700">
      <h2 className="text-lg font-bold">لیست پروژه ها</h2>
      <div className="flex items-center gap-x-8">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            { label: "دسته بندی (همه)", value: "ALL" },
            ...transformedCategories,
          ]}
        />
        <FilterDropDown filterField="sort" options={sortOptions} />
      </div>
    </div>
  );
}

export default ProjectsHeader;
