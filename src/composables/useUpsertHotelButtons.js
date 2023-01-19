import { inject } from "vue";
import { hotelStatus } from "@/helpers/constants";

export default function useUpsertHotelButtons(props) {
  const { hotelData, upsertHotelStep, isLastStep, edit } = inject("create");
  const skipList = ["media", "contacts", "lakes", "rooms", "tags"];

  const getFormData = (statusId) => {
    let data,
      removeKeys = [];
      
    if (props?.form) {
      data = new FormData(props.form);

      for (let key of data.keys()) {
        if (data.get(key) == "" || data.get(key) == null) {
          removeKeys.push(key);
        }
      }

      removeKeys.forEach((key) => {
        data.delete(key);
      });
    } else {
      data = new FormData();

      for (let key in hotelData) {
        if (hotelData[key] !== "" && hotelData[key] !== null) {
          if (!skipList.includes(key)) {
            data.append(key, hotelData[key]);
          }
        }
      }
    }

    data.append("status_id", statusId);
    return data;
  };

  const proceed = () => {
    let statusId = isLastStep.value
      ? hotelStatus.MODERATION
      : hotelStatus.DRAFT;
    let data = getFormData(statusId);
    upsertHotelStep(data);
  };

  const save = () => {
    let data = getFormData(hotelStatus.DRAFT);
    edit(data);
  };

  return { proceed, save };
}
