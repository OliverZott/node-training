import { setTimeout } from 'node:timers/promises';

// async function main() {
//     console.log("do something...");

//     await new Promise((reselve) => setTimeout(reselve, 1000));

//     console.log("...done");
// }

async function main() {
    console.log("do something...");

    await setTimeout(1000);

    console.log("...done");
}

main();
