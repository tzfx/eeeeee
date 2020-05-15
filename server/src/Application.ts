import express, {Request, Response, NextFunction} from "express";
import { Express } from "express-serve-static-core";

import { v4 as UUID } from 'uuid';
import bodyParser from "body-parser";
import { LevelUp } from "levelup";


const PORT = 3001;
const BASE = "/api";

class Application {
    
    private readonly express: Express;
    private readonly db: LevelUp;
    
    constructor() {
        this.express = express();
        this.express.use(bodyParser.json())
        this.db = require('level')("./db");
        if (process.env.NODE_ENV !== "production")
            this.db.clear();
        this.startServer();
    }
    
    private setupCORS() {
        this.express.use(function(_, res, next) {
            res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
    
    getCharacters() {
        return this.express.get(BASE + "/characters", (req: Request, res: Response, next: NextFunction) => {
            const out: any[] = [];
            try {
                this.db.createValueStream()
                    .on("data", (d: any) => out.push(JSON.parse(d)))
                    .on("end", () => res.json(out));
            } catch(e) {
                next(e);
            }
        });
    }
    
    createCharacter() {
        return this.express.post(BASE + "/characters", (req: Request, res: Response, next: NextFunction) => {
            try {
                const uuid = UUID();
                this.db.put(uuid, JSON.stringify(req.body))
                    .then(() => res.json({uuid: req.body.uuid}))
                    .catch((e: any) => res.status(500).send(`An error occurred: ${e}`));
            } catch (e) {
                next(e);
            }
        });
    }
    
    startServer() {
        this.setupCORS();
        this.createCharacter();
        this.getCharacters();

        this.express.listen(PORT,() => {
            console.log(`  App is running at http://localhost:${PORT}/api`);
            console.log("  Press CTRL-C to stop\n");
        })
    }
    
    
    
}

console.log("Application running.");
new Application();

// app.get(BASE + "/characters", (req: Request, res: Response, next: NextFunction) => {
//     const out: any[] = [];
//     try {
//         db.createValueStream()
//             .on("data", (d) => out.push(d))
//             .on("end", () => res.json(out));
//     } catch(e) {
//         next(e);
//     }
// });

// app.post(BASE + "/characters", (req: Request, res: Response, next: NextFunction) => {
//     try {
//         console.log('inc', req.body);
//         const uuid = UUID();
//         db.put(uuid, req.body)
//             .then(() => res.json({uuid: req.body.uuid}))
//             .catch((saveErr) => res.status(500));
//     } catch (e) {
//         next(e);
//     }
// });

// app.listen(PORT, () => {
//     console.log(`  App is running at http://localhost:${PORT}/api`);
//     console.log("  Press CTRL-C to stop\n");
// });