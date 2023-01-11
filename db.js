import mongoose from "mongoose"

const connectDB = async () => {
	await mongoose.connect(process.env.DATABASE_URI, () => {
    console.log("✅ Successfully Connected to Database.")
  })
}

connectDB().catch(err => console.log(err))


