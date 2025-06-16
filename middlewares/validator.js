import { body, query, param, validationResult } from 'express-validator';

export const createUserValidator = [
    body('email').notEmpty().withMessage('Email field is required').isEmail().withMessage('Enter a Valid email'),
    body('password').notEmpty().withMessage("Password field is required"),
    body('fullname').notEmpty().withMessage('Firstname field  is required'),
]

export const loginUserValidator = [
    body('email').escape().isEmail().withMessage('Enter a Valid email'),
    body('password').escape().notEmpty().withMessage('Password Field is required')
]

export const resendOtpValidator = [
    body('email').escape().isEmail().withMessage('Enter a Valid email'),

]
export const verifyOtpValidator = [
    body('email').escape().isEmail().withMessage('Enter a Valid email'),
    body('otp').escape().isEmail().withMessage('OTP is required')
]

export const changePasswordValidator = [
    body('currentPassword').escape().notEmpty().withMessage('Enter a password'),
    body('newPassword').escape().notEmpty().withMessage('Password is required')
]

export const resetPasswordValidator = [
    body('password').escape().notEmpty().withMessage('A password is required'),
    param('token').escape().notEmpty().withMessage('A token is required'),
]

export const createExpenseValidator = [
    body('amount').notEmpty().withMessage('Amount field can not be empty'),
    body('description').notEmpty().withMessage('Desription field can not be empty'),
    body('category').notEmpty().withMessage('Category field can not be empty'),
    body('Date').notEmpty().withMessage('Desription field can not be empty').isDate().withMessage('Enter a valid date'),
]

export const createIncomeValidator = [
    body('incomeAmount').notEmpty().withMessage('Amount field can not be empty'),
    body('sourceOfIncome').notEmpty().withMessage('Source Of Income field can not be empty'),
    body('Date').notEmpty().withMessage('Desription field can not be empty'),
]

export const validationResultMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: "Validation failed",
            errors: errors.array(),
        });
    }
    next();
}