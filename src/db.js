import mongoose from 'mongoose';

export default callback => {
    const db = mongoose.connect('config.mongoURL');
    callback(db);
}