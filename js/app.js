import './lib/jquery.slim.min.js'
import './lib/bootstrap.bundle.min.js'

// Custom JavaScript
import {Program} from "./program.js";
import {Routes} from "./routes.js";
import {NotificationManager} from "./notification.js";


(async function () {
    await Program.init()
    Routes.init()
    NotificationManager.init()
})()