import express from 'express'
import {feedbackData} from '../controller/Feedback.controller.js'

let router = express.Router()

router.post('/',feedbackData)


export default router

