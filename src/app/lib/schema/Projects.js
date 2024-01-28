
const mongoose = require('mongoose');

const Projects = new mongoose.Schema({
    title: String,
    status: String,
    type: String,
    imgurl: String,
    desc: String,
    repo: String,
    url: String,
})

module.exports.Projects = mongoose.models.Projects || mongoose.model("Projects", Projects);
