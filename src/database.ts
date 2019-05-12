import * as mysql from 'mysql2/promise';

//import { } from './database.d'
import { getConfig } from './config';

const pool = mysql.createPool({
    host: getConfig().mysql.host,
    port: getConfig().mysql.port,
    user: getConfig().mysql.user,
    password: getConfig().mysql.password,
    database: getConfig().mysql.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export function setLink(discord_id: string, reddit_name: string) {
    pool.execute(
        "INSERT INTO `reddit_link` (`discord_id`, `reddit_name`) VALUES (?, ?);",
        [discord_id, reddit_name],
    );
}

export async function getLink(discord_id: string): Promise<string | undefined> {
    const [rows, fields] = await pool.execute("SELECT `reddit_name` FROM `reddit_link` WHERE `discord_id` LIKE ?;", [discord_id]);

    if (rows[0] === undefined)
        return undefined;

    return rows[0].reddit_name;
}

export function updateLink(discord_id: string, reddit_name: string) {
    pool.execute(
        "UPDATE `reddit_link` SET `reddit_name` = ? WHERE `reddit_link`.`discord_id` = ?;",
        [reddit_name, discord_id],
    );
}