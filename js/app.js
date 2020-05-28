import '../node_modules/jquery/dist/jquery.slim.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

// Custom JavaScript
import {Program} from "./program.js";
import {Routes} from "./routes.js";
import {NotificationManager} from "./notification.js";


(async function () {
    await Program.init()
    Routes.init()
    NotificationManager.init()
})()