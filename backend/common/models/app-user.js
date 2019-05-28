'use strict';

module.exports = function(AppUser) {

    AppUser.observe('after save', async function(ctx) {
        let UserInfo = AppUser.app.models.UserInfo;
        if (ctx.instance) {
            return UserInfo.create({
                userId: ctx.instance.id,
                currentBoard: null
            })
            
        }
        return;
    });

};
