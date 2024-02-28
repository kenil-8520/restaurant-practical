import {body, query, param} from "express-validator"

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

export const createRestaurantValidation = [
  body('name').not().isEmpty().withMessage('Name of restaurant is required.'),
  body('name').isAlphanumeric().withMessage('invalid restaurant name'),
  body('address').not().isEmpty().withMessage('Address of restaurant is required.'),
  body('address').isAlphanumeric().withMessage('invalid restaurant Address.'),
  body('cuisine_type').not().isEmpty().withMessage('cuisine_type is required.'),
  body('cuisine_type').isAlpha().withMessage('Invalid cuisine_type'),
  body('longitude').not().isEmpty().withMessage('longitude is required.'),
  body('longitude').isFloat().withMessage('Invalid Longitude'),
  body('latitude').not().isEmpty().withMessage('latitude is required.'),
  body('latitude').isFloat().withMessage('Invalid latitude'),

]

export const deleteRestaurantValidation = [
  param('id').not().isEmpty().withMessage('id is required to delete the restaurant'),
  param('id').isAlpha().withMessage('Invalid id please provide a valid id'),
]

export const getRestaurantValidation = [
  body('longitude').not().isEmpty().withMessage('longitude is required'),
  body('longitude').isFloat().withMessage('Invalid longitude'),
  body('latitude').not().isEmpty().withMessage('latitude is required'),
  body('latitude').isFloat().withMessage('Invalid latitude'),
  body('radius').not().isEmpty().withMessage('Radius is required'),
  body('radius').isFloat().withMessage('Invalid radius'),
]
