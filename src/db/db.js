import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a MongoDB');
        return mongoose.connection.db;
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
};

export default connectDB;


