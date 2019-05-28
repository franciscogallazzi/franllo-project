'use strict';

module.exports = function (Board) {

    Board.findByMe = async function (options) {
        return Board.find({
            where: {
                userId: options.accessToken.userId
            }
        })
    }

    Board.remoteMethod('findByMe', {
        accepts: [
            { arg: "options", type: "object", http: "optionsFromRequest" }
        ],
        http: { verb: "GET", path: "/for-me" },
        returns: {
            arg: 'data',
            type: ['Board'],
            root: true
        }
    });

};
