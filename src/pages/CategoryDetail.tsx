import DetailContent from "../components/CategoryDetail/DetailContent";
import { categorydetail } from "../dummy/categorydetail";

function CategoryDetail() {
  return (
    <section className="flex flex-col items-center">
      <DetailContent data={categorydetail} />
    </section>
  );
}

export default CategoryDetail;