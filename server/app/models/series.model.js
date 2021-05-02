module.exports = (sequelize,Sequelize) => {
    const Series = sequelize.define("series", {
        title: {
            type: Sequelize.STRING
        },
        jp_title: {
            type: Sequelize.STRING
        }
    });

    return Series;
};