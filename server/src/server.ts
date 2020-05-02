import express, {Request, Response, NextFunction} from "express";
import { Express } from "express-serve-static-core";
import LevelUp from "levelup";
import LevelDOWN from "leveldown";

const PORT = 3001;
const BASE = "/api";

const app: Express = express();
const db = LevelUp(LevelDOWN("./db"));

console.log("Application running.");

app.get(BASE + "/characters", (req: Request, res: Response, next: NextFunction) => {
    const out: any[] = [];
    try {
        db.createValueStream()
            .on("data", (d) => out.push(d))
            .on("end", () => res.json(out));
    } catch(e) {
        next(e);
    }
});

app.post(BASE + "/characters", (req: Request, res: Response, next: NextFunction) => {
    try {
        db.put(req.body.uuid, req.body)
            .then(() => res.json({uuid: req.body.uuid}))
    } catch (e) {
        next(e);
    }
});

app.listen(PORT, () => {
    console.log(`  App is running at http://localhost:${PORT}/api`);
    console.log("  Press CTRL-C to stop\n");
});