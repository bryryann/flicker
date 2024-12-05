import "dotenv/config";

type EnvVariable = string | undefined;

type Config = Record<string, EnvVariable>;

export default {
    PORT: process.env.PORT,
} satisfies Config;
