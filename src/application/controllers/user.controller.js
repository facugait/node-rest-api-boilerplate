const fetch = require('node-fetch');
const moment = require('moment');
const config = require('../../../config/index');

const URL = config.url;
const options = { method: 'GET' };

const getUrl = (url, method) => fetch(url, method)
  .then((res) => res.json())
  .catch((err) => {
    console.error(`Error ${err}`);
  });

class userController {
  /**
   * Get list of users.
   * @async
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {Object} next - Express middleware handler.
   */
  async getUsers(req, res) {
    try {
      const data = await getUrl(URL, options);
      
      return res.status(200).json({
        success: true,
        msg: 'User found!',
        user: data.users,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        msg: `Error ${error}`,
      });
    }
  }

  async getActiveUsers(req, res) {
    try {
      const data = await getUrl(URL, options);

      const activeUsers = data.users.filter((e) => e.is_active === true);

      const activeUsersByLastname = activeUsers.sort((a, b) => a.lastname.localeCompare(b.lastname));
      
      const orderedActivesWithAge = activeUsersByLastname.map((user) =>{
        const currentDate = moment();
        const bdayDate = moment(user.birthday);       
        user.age = currentDate.diff(bdayDate, 'years');
        return user;
      });
      return res.status(200).json({
        success: true,
        msg: 'User found!',
        user: orderedActivesWithAge,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        msg: `Error ${error}`,
      });
    }
  }
}

module.exports = userController;
