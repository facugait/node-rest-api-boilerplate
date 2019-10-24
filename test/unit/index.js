const { expect } = require('chai');
const ctrl = new (require('../../src/application/controllers/user.controller'));

describe('Get Users', () => {
  it('Should return and array of objcts with users', async () => {
    const mockReq = {};

    const mockRes = {
      status(status) {
        return {
          json(obj) {
            return obj;
          }
        };
      }
    };

    const result = await ctrl.getUsers(mockReq, mockRes);

    expect(result.user).to.be.an('array');
  });
});

describe('Get Active Users', () => {
  it('Should return and array of objcts with active users', async () => {
    const mockReq = {};

    const mockRes = {
      status(status) {
        return {
          json(obj) {
            return obj;
          }
        };
      }
    };

    const result = await ctrl.getActiveUsers(mockReq, mockRes);

    expect(result.user).to.be.an('array');
  });
});
