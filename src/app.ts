import express from 'express'
const app = express()

app.use(express.json());
// app.use("/users", userRoutes);

app.listen(5000, () => {
    console.log(`Server is Running 5000`)
})
