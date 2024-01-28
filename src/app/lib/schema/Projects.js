const mongoose = require('mongoose');
const { title } = require('process');

const ProjectsSchema = new mongoose.Schema({
    title: String,
    status: String,
    type: String,
    imgurl: String,
    desc: String,
    repo: String,
    url: String,
})

const Projects = mongoose.models.Projects || mongoose.model("Projects", ProjectsSchema)
module.exports = Projects