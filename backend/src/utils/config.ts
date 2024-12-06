import "dotenv/config";

type EnvVariable = string | undefined;

type Config = Record<string, EnvVariable | PoolConfig>;

interface PoolConfig {
    user: EnvVariable,
    password: EnvVariable,
    database: EnvVariable,
    host: EnvVariable,
    port: number,
};

const pgConfig: PoolConfig = {
    user: process.env.PG_USR,
    password: process.env.PG_PWD,
    database: process.env.PG_DTB,
    host: process.env.PG_HST,
    port: Number(process.env.PG_PRT!)
};

export default {
    PORT: process.env.PORT,
    pgConfig
} satisfies Config;
