(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.TelecomMASAgent = factory());
})(this, (function () { 'use strict';

  // index.js

  class TelecomMASAgent {
    constructor(agentName = "Telecom MAS Agent") {
      this.agentName = agentName;
      this.userBalances = new Map(); // Simulate user call balances
      this.sentMessages = []; // Store sent SMS logs
      this.pushNotifications = []; // Store push notifications
    }

    /**
     * Initialize user balances (simulate fetching from DB/API)
     * @param {string} userId - The user ID.
     * @param {number} [initialBalance=100] - Initial balance in minutes.
     * @returns {Promise<string>} - Confirmation message.
     */
    async initializeUser(userId, initialBalance = 100) {
      await this._simulateDelay(500);
      this.userBalances.set(userId, initialBalance);
      return `User ${userId} initialized with balance ${initialBalance} minutes.`;
    }

    /**
     * Check call balance asynchronously
     * @param {string} userId - The user ID.
     * @returns {Promise<string>} - Remaining balance message.
     * @throws {Error} - If user is not found.
     */
    async checkCallBalance(userId) {
      await this._simulateDelay(300);
      if (!this.userBalances.has(userId)) {
        throw new Error(`User ${userId} not found.`);
      }
      return `User ${userId} has ${this.userBalances.get(userId)} minutes remaining.`;
    }

    /**
     * Simulate making a call that deducts minutes
     * @param {string} userId - The user ID.
     * @param {number} minutes - Minutes to deduct.
     * @returns {Promise<string>} - Confirmation message.
     * @throws {Error} - If user is not found or balance is insufficient.
     */
    async makeCall(userId, minutes) {
      await this._simulateDelay(400);
      if (!this.userBalances.has(userId)) {
        throw new Error(`User ${userId} not found.`);
      }
      const currentBalance = this.userBalances.get(userId);
      if (currentBalance < minutes) {
        throw new Error(`Insufficient balance for user ${userId}.`);
      }
      this.userBalances.set(userId, currentBalance - minutes);
      return `Call made for ${minutes} minutes. New balance: ${this.userBalances.get(userId)} minutes.`;
    }

    /**
     * Simulate sending SMS asynchronously
     * @param {string} toNumber - Recipient's phone number.
     * @param {string} message - Message content.
     * @returns {Promise<string>} - Confirmation message.
     */
    async sendSMS(toNumber, message) {
      await this._simulateDelay(200);
      const logEntry = { to: toNumber, message, timestamp: new Date().toISOString() };
      this.sentMessages.push(logEntry);
      return `Message "${message}" sent to ${toNumber}.`;
    }

    /**
     * Retrieve SMS sending history
     * @returns {Array<Object>} - List of sent messages.
     */
    getSentMessages() {
      return this.sentMessages;
    }

    /**
     * Send a push notification
     * @param {string} userId - The user ID.
     * @param {string} notification - Notification content.
     * @returns {Promise<string>} - Confirmation message.
     */
    async sendPushNotification(userId, notification) {
      await this._simulateDelay(300);
      const notificationEntry = { userId, notification, timestamp: new Date().toISOString() };
      this.pushNotifications.push(notificationEntry);
      return `Notification sent to user ${userId}: "${notification}"`;
    }

    /**
     * Retrieve push notifications for a user
     * @param {string} userId - The user ID.
     * @returns {Array<Object>} - List of notifications for the user.
     */
    getPushNotifications(userId) {
      return this.pushNotifications.filter((notif) => notif.userId === userId);
    }

    /**
     * Agent introduction
     * @returns {string} - Introduction message.
     */
    introduce() {
      return `Hello! I am ${this.agentName}, your telecom multi-agent system. How can I assist you today?`;
    }

    /**
     * Private method to simulate delay
     * @param {number} ms - Delay in milliseconds.
     * @returns {Promise<void>}
     */
    async _simulateDelay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  }

  var telecom_mas_agent = TelecomMASAgent;

  return telecom_mas_agent;

}));
