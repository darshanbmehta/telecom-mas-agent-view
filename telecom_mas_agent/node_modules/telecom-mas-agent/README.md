# Telecom MAS Agent

A telecom multi-agent system for managing call balances and SMS operations.

## Installation

```bash
npm install telecom-mas-agent
```

## Usage

```javascript
const TelecomMASAgent = require('telecom-mas-agent');

const agent = new TelecomMASAgent();

(async () => {
  await agent.initializeUser('user1', 100);
  console.log(await agent.checkCallBalance('user1'));
  console.log(await agent.makeCall('user1', 30));
  console.log(await agent.sendSMS('+1234567890', 'Hello!'));
  console.log(agent.getSentMessages());
  console.log(agent.introduce());
})();
```

## Features

- Initialize user balances
- Check call balance
- Make calls (deduct minutes)
- Send SMS
- Retrieve SMS history

## License

MIT
