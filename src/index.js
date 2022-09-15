import app from "./app";
import sequelize from "./connection";

const main = () => {
  app.listen(4000, () => {
    console.log("Server listening on port 4000");
  });
  sequelize.sync({force: false});
};

main();
