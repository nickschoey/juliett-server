const userServices = require('../services/user.services');

module.exports.create = async (ctx, next) => {
  console.log(ctx.request.body);
  await userServices.create(ctx)
  next()
}

module.exports.authenticate = async (ctx, next) => {
  
  await userServices.authenticate(ctx)
  next()

}

module.exports.getAll = async (ctx, next) => {
  await userServices.getAll(ctx)
  next()

}

module.exports.delete = async (ctx, next) => {
  await userServices.delete(ctx)
  console.log(ctx.params.id);
  
  
  // await userServices.getAll(ctx)
  next()

}
