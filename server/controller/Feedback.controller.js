import express from 'express'
import feedBack from '../model/feedback.js'


export let feedbackData = async (req,res) => {

    try {
        let { name, email, message } = req.body
        let data = new feedBack({
            name, email, message
        })
        await data.save()
        res.json('feedback add ')

    } catch (error) {
        console.log({message:'error is' + error});
    }

}

