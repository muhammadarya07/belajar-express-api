import sequelize from "./index.js";

async function setup() {
    await sequelize.sync({ force: true })
}

setup();