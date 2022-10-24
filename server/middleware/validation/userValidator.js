import {check, validationResult} from 'express-validator';

const userValidator = [
  check('email')
    .trim()
    .isEmail()
    .withMessage("")
    .not()
    .isEmpty()
    .withMessage('Email cannot be null!')
    .bail(),
  check('password')
    .isLength({min: 5, max: 20})
    .withMessage("the length of the email should be in the range > 5 and < 20 characters")
    .bail(),
  check('firstName')
    .bail(),
  check('lastName')
    .bail(),
  check('sex')
    .bail(),
  check('telephone')
    .bail(),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
]

export default userValidator;