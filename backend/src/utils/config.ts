import "dotenv/config";

type EnvVariable = string | undefined;

interface SSLConfig {
    keyPath: string;
    certPath: string;
}

interface DBConnectionConfig {
    user: string;
    database: string;
    password: string;
    host: string;
    port: string | number;
}

interface AppConfiguration {
    PORT: EnvVariable;
    SALT: number;
    SSL: SSLConfig;
    JWT: EnvVariable;
    CLIENT_URI: EnvVariable;
    DBConnection: DBConnectionConfig;
}

const dbConnectionJson: DBConnectionConfig = JSON.parse(process.env.DB_CONNECTION!);

export default {
    PORT: process.env.PORT,
    SALT: Number(process.env.SALT),
    SSL: {
        keyPath: process.env.SSL_KEY!,
        certPath: process.env.SSL_CERT!,
    },
    JWT: process.env.JWT,
    CLIENT_URI: process.env.CLIENT_URI,
    DBConnection: {
        user: dbConnectionJson.user,
        database: dbConnectionJson.database,
        password: dbConnectionJson.password,
        host: dbConnectionJson.host,
        port: Number(dbConnectionJson.port),
    },
} satisfies AppConfiguration;
