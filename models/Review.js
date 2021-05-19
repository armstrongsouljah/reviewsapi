const reviews = [{pk:1, fullName: 'Armstrong Muhwezi', reviewMessage: "I love the new menu offerings."}];

class Review {
    constructor() {}
    static getReviews() {
        return reviews;
    };
    static addReview(review) {
        if(!reviews.includes(review)) {
            return reviews.push(review)
        }
    };
    static fetchOne(pk) {
        if(reviews.length) {
            let rev =  reviews.find(rev => rev.pk == pk);
            return rev ? rev : {message: 'review not found'}
        } else return {message: "No reviews"}
    }
};

module.exports = {
    Review
}
