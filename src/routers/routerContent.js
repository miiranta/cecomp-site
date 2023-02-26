
const express               = require("express")
const path                  = require('path');

const router = new express.Router()


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates/index.html'))
})

router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates/about.html'))
})

router.get("/calendar", (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates/calendar.html'))
})

router.get("/certificates", (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates/certificates.html'))
})

router.get("/console", (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates/console.html'))
})

router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates/contact.html'))
})

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates/login.html'))
})

router.get("/polls", (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates/polls.html'))
})

router.get("/store", (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates/store.html'))
})

router.get("/transparency", (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates/transparency.html'))
})

router.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates/error.html'))
})





module.exports = router