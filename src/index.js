import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import indexRoutes from "./routes/indexRoutes.js";

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
console.clear()

// Settings
app.set("port", 3000)
app.set("host", "192.168.10.100")
app.set("views", join(__dirname,"views"))
app.set("view engine", "hbs")
app.engine("hbs", engine({
    layoutsDir: join(app.get("views"),"layouts"),
    defaultLayout: "main",
    partialsDir: join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: {
        compare: (val1,val2) => val1 == val2 ? true : false 
    }

}))


// Middlewares
app.use(morgan("dev"))
app.use(express.static(join(__dirname,"static")))
app.use(express.urlencoded({ extended: false }))
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "tasksapp_key"
}))



// Routes
app.use(indexRoutes)


app.listen(app.get("port"),app.get("host"))
console.log(`Server on http://${app.get("host")}:${app.get("port")}`)
