import {check, validationResult} from 'express-validator';

const annoucementValidator = [
    check('title')
    .isLength({min: 3, max: 40})
    .withMessage("the length of the title should be in the range > 3 and < 40 characters")
    .not()
    .isEmpty()
    .withMessage('Title cannot be null!')
    .bail(),
    check('description')
    .not()
    .isEmpty()
    .withMessage('Description cannot be null!')
    .bail(),
    check('author')
    .not()
    .isEmpty()
    .bail(),
    check('price')
    .not()
    .isEmpty()
    .isFloat()
    .bail(),
    check('category')
    .not()
    .isEmpty()
    .bail(),
    check('option')
    .not()
    .isEmpty()
    .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(422).json({errors: errors.array()});
        next();
      },
]

export default annoucementValidator;