class Config {
    private static instance: Config;
    private readonly nodeEnv: string;
    private readonly port: number;
    private readonly databaseUrl: string;

    private constructor() {
        this.nodeEnv = process.env.NODE_ENV || 'development';
        this.port = parseInt(process.env.PORT as string, 10) || 3000;
        this.databaseUrl = this.getDatabaseUrl();
    }

    public static getInstance() {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return {
            databaseUrl: Config.instance.databaseUrl,
            nodeEnv: Config.instance.nodeEnv,
            port: Config.instance.port,
        }
    }

    private getDatabaseUrl(): string {
        if (this.nodeEnv === 'development') {
            return process.env.DATABASE_LOCAL || '';
        } else {
            return process.env.DATABASE_URL || '';
        }
    }
}

export const config = Config.getInstance();
