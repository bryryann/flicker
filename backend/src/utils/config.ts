import "dotenv/config";

type EnvVariable = string | undefined;

interface SSLConfig {
    keyPath: string;
    certPath: string;
}

interface AppConfiguration {
    PORT: EnvVariable;
    SSL: SSLConfig
}

export default {
    PORT: process.env.PORT,
    SSL: {
        keyPath: process.env.SSL_KEY!,
        certPath: process.env.SSL_CERT!,
    },
} satisfies AppConfiguration;
