'use strict';

module.exports = AppUser => {
  AppUser.sendMessage = async (type, data) => {
    const MessageSystem = AppUser.app.models.MessageSystem;
    if (type === 'ALL') {
      const to = 'system@creport.app'; // testing
      MessageSystem.requestSendmail('mail', { ...data, to });
    }
  };
};
