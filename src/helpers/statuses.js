export const statuses = {
  typeHotelStatus: getHotelStatus(),
  typeBookingStatus: getBookingStatus(),
};

function getBookingStatus() {
  let typeBookingStatus = getHotelStatus();
  typeBookingStatus[1]["name"] = "Незавершенное бронирование";
  return typeBookingStatus;
}

function getHotelStatus() {
  return {
    1: {
      type: "wait",
      name: "Черновик",
    },
    2: {
      type: "wait",
      name: "Ожидает подтверждения",
    },
    3: {
      type: "success",
      name: "Подтверждено",
    },
    4: {
      type: "error",
      name: "Отклонено",
    },
  };
}
