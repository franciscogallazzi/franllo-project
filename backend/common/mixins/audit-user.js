module.exports = function (Model, options) {
    console.log("IN MIXIN");
    // Model is the model class
    // options is an object containing the config properties from model definition
    Model.defineProperty('created', { type: Date, default: '$now' });
    Model.defineProperty('modified', { type: Date });
    Model.defineProperty('userId', { type: Number });
    Model.defineProperty('modifiedBy', { type: Number });

    Model.observe('before save', function event(ctx, next) { 
        
        const userId = ctx.options && ctx.options.accessToken && ctx.options.accessToken.userId ? ctx.options.accessToken.userId : null;
        if (ctx.instance) {
            ctx.instance.userId = userId;
        } else {
            ctx.data.modifiedBy = userId;
            ctx.data.modified = new Date();
        }
        next();
    });

}