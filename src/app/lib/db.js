import mongoose from 'mongoose';

global.mongoose = {
    conn: null,
    prominse: null,
};

export async function dbConnect(){
    if (global.mongoose && global.mongoose.conn){
        console.log('connected from previous');
        return global.mongoose.conn;
    } else {
        const conString = process.env.MONGODB_API;
        const promise = mongoose.connect(conString, {
            autoIndex: true,
        });

        global.mongoose = {
            conn : await promise,
            promise
        };

        console.log('New connection to MongoDB');

        return await promise;
    }
}