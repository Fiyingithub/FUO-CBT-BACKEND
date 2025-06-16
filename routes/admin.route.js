import express from 'express'
import { createLecturer, createStudent } from '../controllers/Users/admin.controller.js'
import { authenticate, authorize } from '../middlewares/protected.js'
import { ROLES } from '../constants/role.constant.js'

const router = express.Router()


/**
 * @swagger
 * components:
 *   schemas:
 *     CreateLecturer:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - email
 *         - gender
 *         - phoneNumber
 *         - staffId
 *         - department
 *         - faculty
 *         - password
 *       properties:
 *         firstname:
 *           type: string
 *           example: "string"
 *         lastname:
 *           type: string
 *           example: "string"
 *         email:
 *           type: string
 *           format: email
 *           example: "string"
 *         phoneNumber:
 *           type: string
 *           example: "string"
 *         staffId:
 *           type: string
 *           example: "string"
 *         department:
 *           type: string
 *           example: "string"
 *         password:
 *           type: string
 *           format: password
 *           minLength: 8
 *           example: "string"
 *     CreateStudent:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - email
 *         - gender
 *         - phoneNumber
 *         - matricNumber
 *         - department
 *         - faculty
 *         - password
 *       properties:
 *         firstname:
 *           type: string
 *           example: "string"
 *         lastname:
 *           type: string
 *           example: "string"
 *         email:
 *           type: string
 *           format: email
 *           example: "string"
 *         phoneNumber:
 *           type: string
 *           example: "string"
 *         matricNumber:
 *           type: string
 *           example: "string"
 *         department:
 *           type: string
 *           example: "string"
 *         password:
 *           type: string
 *           format: password
 *           minLength: 8
 *           example: "string"
 *     ApiResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: "Operation successful"
 *         data:
 *           type: object
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */



/**
 * @swagger
 * /api/admin/addLecturer:
 *   post:
 *     summary: Create a lecturer (By admin only)
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateLecturer'
 *     responses:
 *       201:
 *         description: Lecturer created successfully
 *       400:
 *         description: Validation error or user already exists
 *       500:
 *         description: Internal server error
 */
router.post('/addLecturer', authenticate, authorize(ROLES.ADMIN), createLecturer)

/**
 * @swagger
 * /api/admin/addStudent:
 *   post:
 *     summary: Create a student (By admin only)
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateStudent'
 *     responses:
 *       201:
 *         description: Student created successfully
 *       400:
 *         description: Validation error or user already exists
 *       500:
 *         description: Internal server error
 */
router.post('/addStudent', authenticate, authorize(ROLES.ADMIN), createStudent)


const adminRoute = router

export default adminRoute