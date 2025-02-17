import { runSeeding } from "./seed";

runSeeding().then(() => {
    process.exit(0);
});
