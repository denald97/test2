export {};
 
 declare global {
   namespace NodeJS {
     interface ProcessEnv {
       APP_PORT: string;
       DB_HOST: string;
       DB_PORT: string;
       DB_USER: string;
       DB_PASS: string;
       DB_BASE: string;
       JWT_SECRET: string;
     }
   }
 }