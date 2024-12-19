interface ClientConfig {
    SERVER_URL: string;
    TMDB: {
        API_KEY: string;
        API_TOKEN: string;
    }
}

// Environment Variables work a bit different on Vite,
// for now, will just use hardcoded development values.
export default {
    SERVER_URL: import.meta.env.VITE_API_URL!,
    TMDB: {
        API_KEY: import.meta.env.VITE_TMDB_KEY!,
        API_TOKEN: import.meta.env.VITE_TMDB_TOKEN!
    }
} satisfies ClientConfig;
