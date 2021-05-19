const router = require('express').Router();
const reviewControllers = require('../controllers/review.controller');

router.get('/', (req, res) => {
    let reviews = reviewControllers.fetchAllReviews();
    console.log(reviews)
    return res.json({ data: reviews });
});

router.get('/:pk', (req, res) => {
    const {pk} = req.params;
    let review = reviewControllers.findOneReview(pk);
    return res.json(review)
})

router.post('/add', (req, res) => {
    const {fullName, reviewMessage} = req.body;
});

module.exports = router;
