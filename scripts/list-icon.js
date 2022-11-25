const path = require("path");
const fs = require("fs");

const iconToBase64 = (filePath, suffix = "gif") => {
  const data = fs.readFileSync(filePath);
  return `data:image/${suffix};base64,${Buffer.from(data).toString("base64")}`;
};

const iconList = fs.readdirSync("./listicon");

console.log(
  JSON.stringify(
    iconList.reduce((p, c) => {
      const key = c.slice(0, c.indexOf("."));
      const suffix = c.slice(c.indexOf("."));
      return {
        ...p,
        [key]: iconToBase64("./listicon/" + c, suffix),
      };
    }, {})
  )
);
