import house from "@/public/img/نقل-اثاث-المنزل-في-دبي.jpg";
import apartments from "@/public/img/نقل-اثاث-الشقق-في-دبي.jpg";
import villas from "@/public/img/نقل-اثاث-الفلل-في-دبي.jpg";
import offices from "@/public/img/نقل-اثاث-المكاتب-في-دبي.jpg";
import packing from "@/public/img/تغليف-اثاث-في-دبي.jpg";
import assembly from "@/public/img/فك-وتركيب-اثاث-في-دبي.jpg";
import storage from "@/public/img/تخزين-اثاث-في-دبي.jpg";
import fleet from "@/public/img/اسطول-شاحنات-الزايد-نقل-اثاث.jpg";
import { SERVICE_HREF } from "./constants";

/** One real photo per service. Shared by the service cards and the "other services" navigation. */
export const serviceImages = {
  house,
  apartments,
  villas,
  offices,
  packing,
  assembly,
  storage,
  fleet,
};

/** Service page → photo (used by the service sidebar). */
export const serviceImageByHref = {
  [SERVICE_HREF.house]: house,
  [SERVICE_HREF.apartments]: apartments,
  [SERVICE_HREF.villas]: villas,
  [SERVICE_HREF.offices]: offices,
  [SERVICE_HREF.packing]: packing,
  [SERVICE_HREF.assembly]: assembly,
  [SERVICE_HREF.storage]: storage,
} as const;
