import mongoose,  {mongo} from "mongoose";

async function connectNaDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.xtd5j.mongodb.net/livraria?retryWrites=true&w=majority")

    return mongoose.connection;
}

export default connectNaDatabase