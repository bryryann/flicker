interface ClientConfig {
    SERVER_URI: string;
}

// Environment Variables work a bit different on Vite,
// for now, will just use hardcoded development values.
export default {
    SERVER_URI: "https://localhost:5001",
} satisfies ClientConfig;
