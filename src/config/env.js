import dotenv from 'dotenv';
dotenv.config();
const env = {
    port : process.env.PORT,
    databaseUrl : process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
};
export default env;