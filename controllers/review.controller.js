const {Review} = require('../models/Review');

function fetchAllReviews () {
    return Review.getReviews();
}
 function findOneReview(pk) {
     return Review.fetchOne(pk);
 }

module.exports = {
    fetchAllReviews,
    findOneReview
}