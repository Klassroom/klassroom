module.exports = {
  port: process.env.PORT || 3000,
    db: process.env.MONGOLAB_URI ||
        process.env.MONGOHQ_URL ||
        'mongodb://localhost:27017/tweetstockr2',
    startingPoints: 100,
    usersOnRanking: 100
}
