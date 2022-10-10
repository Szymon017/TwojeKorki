import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.send("All Users");
})

router.get('/:id', (req, res)=>{
    res.send("User of id");
})

router.post("/add", (req, res) => {
    res.send("Adding user");
})

export default router;