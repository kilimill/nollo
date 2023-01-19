export const URL =
  import.meta.env.PROD  ? "https://api.nollo.ru" : "http://localhost";

export const FRONT_URL =
  import.meta.env.PROD ? "https://nollo.ru" : "http://localhost:8001";

export const roleId = {
  OWNER: 1,
  CLIENT: 2,
};

export const hotelStatus = {
  DRAFT: 1,
  MODERATION: 2,
};