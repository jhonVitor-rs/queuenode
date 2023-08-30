declare global {
  namespace NodeJS {
    interface ProcessEnv{
      MAIL_HOST: string;
      MAIL_PORT: number;
      MAIL_USER: string;
      MAIL_PASS: string;

      REDIS_HOST: string;
      REDIS_PORT: number;
    }
  }
}

export{}