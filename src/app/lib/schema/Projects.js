const mongoose = require('mongoose');
const { type } = require('os');

const ProjectsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    imgurl:{
        type: String,
    },
    desc: {
        type: String,
    },
    repo: {
        type: String,
    },
    url: {
        type: String,
    },
})

const Projects = mongoose.models.Projects || mongoose.model("Projects", ProjectsSchema)
module.exports = Projects