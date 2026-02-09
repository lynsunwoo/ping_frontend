const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://port-0-ping-backend-mlelsdiwef1c9091.sel3.cloudtype.app"
    : "http://localhost:9070";

export default BASE_URL;