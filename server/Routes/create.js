const express = require("express")
const route = express.Router()
const user = require('../Model/schema')

route.get(['/create', '/create/:id'], async (req, res) => {
    try {
        let activity = {};
        if (req.params.id) {
            activity = await user.findById(req.params.id);
        } else {
            activity = await user.find({});
        }
        console.log(activity)
        res.send(activity)
    } catch (err) {
        res.send(err)
    }
})


route.post('/create', (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const time = req.body.time
    const date = req.body.date
    const activityType = req.body.activityType
    console.log("req.body", req.body)
    const User = new user({ name: name, description: description, activityType: activityType, duration: time, date: date });
    User.save().then((result) => {
        console.log(result)
        res.send("UserAdded")

    }).catch((err) => {
        console.log(err)
        res.send("user not Added")
    })

})
route.patch('/create/:id', async (req, res) => {
    try {
        const activity = await user.findByIdAndUpdate(req.params.id, req.body);
        await activity.save();
        res.send(activity);
    } catch (error) {
        res.status(500).send(error);
    }
})
route.delete("/create/:id", (req, res) => {
    console.log(req.params.id)
    user.findByIdAndDelete({ _id: req.params.id }).then((result) => {
        if (result.deletedCount !== 0) {
            console.log("deleted successfully")
            res.send("deleted successfully")
        } else {
            res.send("NOT DELTED")
        }
    }).catch((err) => {
        console.log(err)
        res.send("NOT deleted successfully")
    })
})




module.exports = route;