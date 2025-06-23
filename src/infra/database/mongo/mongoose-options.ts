import mongoose from "mongoose";

export function getMongooseOptions(): mongoose.ConnectOptions {
    const mongooseOptions = {
        writeConcern: mongoWriteConcern,
    };

    return mongooseOptions;
}

const mongoWriteConcern: mongoose.ConnectOptions["writeConcern"] = {
    w: "majority",
    j: true,
    wtimeout: 1000,
};
