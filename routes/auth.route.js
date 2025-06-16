import express from 'express'
import { lecturerLogin, signin, signup, studentLogin } from '../controllers/Users/auth.controller.js'

const router = express.Router()


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "12345"
 *         email:
 *           type: string
 *           format: email
 *           example: "johndoe@example.com"
 *         firstname:
 *           type: string
 *           example: "John"
 *         lastname:
 *           type: string
 *           example: "Doe"
 *         gender: 
 *           type: enum
 *           example: ["male", "female"]
 *         role:
 *           type: enum
 *           example: ["admin", "lecturer", "student"]
 *         department: 
 *           type: string
 *           example: "string"
 *         faculty: 
 *           type: string
 *           example: "string"
 *         staffId: 
 *           type: string
 *           example: "string"
 *         matricNumber:
 *           type: string
 *           example: "string"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-01-01T00:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2024-01-01T00:00:00.000Z"
 *     AdminSignup:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - email
 *         - gender
 *         - phoneNumber
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
 *         gender:
 *           type: s
 *           example: "string"
 *         phoneNumber:
 *           type: string
 *           example: "string"
 *         password:
 *           type: string
 *           format: password
 *           minLength: 8
 *           example: "string"
 *     AdminLogin:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "string"
 *         password:
 *           type: string
 *           format: password
 *           example: "string"
 *     LecturerLogin:
 *       type: object
 *       required: 
 *         - staffId
 *         - password
 *       properties:
 *         staffId:
 *           type: string
 *           example: "string"
 *         password: 
 *           type: string
 *           example: "string"
 *     StudentLogin:
 *       type: object
 *       required:
 *         - matricNumber
 *         - password
 *       properties:
 *         matricNumber:
 *           type: string
 *           example: "string"
 *     UserUpdate:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "johndoe@example.com"
 *         firstname:
 *           type: string
 *           example: "John"
 *         lastname:
 *           type: string
 *           example: "Doe"
 *         phoneNumber:
 *           type: string
 *           example: "+1234567890"
 *         role:
 *           type: string
 *           example: "user"
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
 * /api/auth/admin/signup:
 *   post:
 *     summary: Create an admin
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminSignup'
 *     responses:
 *       201:
 *         description: Admin created successfully
 *       400:
 *         description: Validation error or user already exists
 *       500:
 *         description: Internal server error
 */
router.post('/admin/signup', signup)


/**
 * @swagger
 * /api/auth/admin/login:
 *   post:
 *     summary: Login as an admin
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminLogin'
 *     responses:
 *       201:
 *         description: Admin created successfully
 *       400:
 *         description: Validation error or user already exists
 *       500:
 *         description: Internal server error
 */
router.post('/admin/login', signin)


/**
 * @swagger
 * /api/auth/lecturer/login:
 *   post:
 *     summary: Login as Lecturer
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LecturerLogin'
 *     responses:
 *       201:
 *         description: Lecturer Login Successfull
 *       400:
 *         description: Validation error or user already exists
 *       500:
 *         description: Internal server error
 */
router.post('/lecturer/login', lecturerLogin)


/**
 * @swagger
 * /api/auth/student/login:
 *   post:
 *     summary: Login as student
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/studentLogin'
 *     responses:
 *       201:
 *         description: Student Login Successfull
 *       400:
 *         description: Validation error or user already exists
 *       500:
 *         description: Internal server error
 */
router.post('/student/login', studentLogin)


const AuthRoutes = router
export default AuthRoutes