
const express               = require("express")

const router = new express.Router()



router.get("/teste", (req, res) => {
    res.send("Oi");
})



module.exports = router