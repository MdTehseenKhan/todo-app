import mongoose from "mongoose"

const connectDB = async () => {
	await mongoose.connect(process.env.DATABASE_URI, () => {
    console.log("✅ Successfully Connected to Database.")
  })
}
mongoose.set("strictQuery", true)
connectDB().catch(err => console.log(err))


