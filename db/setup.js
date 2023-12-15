import { Connection } from "./index.js";

async function setup() {
    await Connection.sync({ force: true })
}

setup();