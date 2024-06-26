import mongoose from "mongoose";

export const connectToMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDb connected successfully");
    });

    connection.on("error", (error) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running" + error
      );
      process.exit(1);
    });
  } catch (error) {
    console.log("Something went wrong", error);
    process.exit(1);
  }
};
