import "dotenv/config";

type EnvVariable = string | undefined;

interface AppConfiguration {
    PORT: EnvVariable;
}

export default {
    PORT: process.env.PORT
} satisfies AppConfiguration;
