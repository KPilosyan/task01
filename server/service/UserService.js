const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const tokenService = require('./TokenService');
const BadReqError = require('../errors/BadRequest');
const NotFoundError = require('../errors/NotFound');

class UserService {
  async registration(email, password) {
    const candidate = await userModel.findOne({ where: { email } });
    if (candidate) {
      throw new BadReqError('User Already Exists');
    }
    const user = await userModel.create({ email, password });

    return { id: user.id, email: user.email };
  }

  async login(email, password) {
    const user = await userModel.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundError('This email is not registered');
    }

    const isPasswordEqual = await bcrypt.compare(password, user.password);
    if (!isPasswordEqual) {
      throw new BadReqError('Wrong Password');
    }

    // Tokens
    const tokens = tokenService.generateTokens({ id: user.id, email: user.email });
    await tokenService.saveToken(user.id, tokens.refreshToken);

    return { ...tokens, user: { id: user.id, email: user.email } };
  }
}

module.exports = new UserService();
