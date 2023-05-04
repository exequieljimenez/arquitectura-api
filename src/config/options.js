import dotenv from 'dotenv';
dotenv.config();

const options = {
    server:{
        port: process.env.PORT,
        persistence:process.env.PERSISTENCE
    },
    mongo:{
        url: process.env.MONGO_DB
    }
}



export default options