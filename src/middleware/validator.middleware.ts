import {body, query} from "express-validator"

export const userRegistrationValidation = [
    body('email').not().isEmpty().withMessage("email is required"),
    body('email').isEmail().withMessage('Invalid email format'),
    body('email').isLength({max:30}).withMessage('email can not be more than 30 characters long'),
    body('password').not().isEmpty().withMessage('password is required'),
    body('password').isLength({min: 6}).withMessage('The minimum password length should be 6 characters'),
  ]

export const emailValidation = [
  body('email').not().isEmpty().withMessage("email is required"),
  body('email').isEmail().withMessage('Invalid email format'),
]

export const resetPasswordValidation = [
  body('newPassword').not().isEmpty().withMessage('newPassword is required to reset the password'),
  body('newPassword').isLength({min: 6}).withMessage('The minimum password length should be 6 characters'),
  body('confirmPassword').not().isEmpty().withMessage('confirmPassword is required to reset the password'),
  body('confirmPassword').isLength({min: 6}).withMessage('The minimum password length should be 6 characters'),
]
