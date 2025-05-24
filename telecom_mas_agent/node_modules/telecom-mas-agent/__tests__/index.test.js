const TelecomMASAgent = require('../index');

describe('TelecomMASAgent', () => {
  let agent;

  beforeEach(() => {
    agent = new TelecomMASAgent();
  });

  test('should initialize user with balance', async () => {
    const message = await agent.initializeUser('user1', 100);
    expect(message).toBe('User user1 initialized with balance 100 minutes.');
  });

  test('should check call balance', async () => {
    await agent.initializeUser('user1', 100);
    const balance = await agent.checkCallBalance('user1');
    expect(balance).toBe('User user1 has 100 minutes remaining.');
  });

  test('should make a call and deduct minutes', async () => {
    await agent.initializeUser('user1', 100);
    const message = await agent.makeCall('user1', 30);
    expect(message).toBe('Call made for 30 minutes. New balance: 70 minutes.');
  });

  test('should send SMS', async () => {
    const message = await agent.sendSMS('+1234567890', 'Hello!');
    expect(message).toBe('Message "Hello!" sent to +1234567890.');
  });

  test('should retrieve sent messages', async () => {
    await agent.sendSMS('+1234567890', 'Hello!');
    const messages = agent.getSentMessages();
    expect(messages).toHaveLength(1);
    expect(messages[0]).toMatchObject({ to: '+1234567890', message: 'Hello!' });
  });

  test('should introduce the agent', () => {
    const introduction = agent.introduce();
    expect(introduction).toBe('Hello! I am Telecom MAS Agent, your telecom multi-agent system. How can I assist you today?');
  });
});
