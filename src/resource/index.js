const fs = require("fs");

const data = {
  id: "rophim",
  name: "RoPhim",
  color: "#000000",
  description: "RoPhim - Phim hay cả rổ - Xem Phim Mới HD Online Vietsub",
  updated_at: new Date().toISOString()
};

fs.writeFileSync("../../public/data.json", JSON.stringify(data, null, 2));
