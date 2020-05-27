import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/@popperjs/core/dist/umd/popper.js'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

// Custom JavaScript
import {Program} from "./program.js";
import {Routes} from "./routes.js";

(async function () {
    await Program.init()
    Routes.init()
})()