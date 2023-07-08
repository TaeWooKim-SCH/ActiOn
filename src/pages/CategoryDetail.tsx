import DetailContent from "../components/CategoryDetail/DetailContent";
import LocationInfo from "../components/CategoryDetail/LocationInfo";
import ReservationInfo from "../components/CategoryDetail/ReservationInfo";
import Review from "../components/CategoryDetail/Review";
import TicketSelect from "../components/CategoryDetail/TicketSelect";
import { categorydetail, userInfo, review } from "../dummy/categorydetail";

function CategoryDetail() {
  return (
    <section className="flex flex-col items-center">
      <DetailContent data={categorydetail} />
      <ReservationInfo data={userInfo} />
      <TicketSelect data={categorydetail} />
      <LocationInfo location={categorydetail} />
      <Review data={review} />
    </section>
  );
}

export default CategoryDetail;