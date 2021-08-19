# Adonis MessageBird 🦜

[MessageBird](https://www.messagebird.com) provider for AdonisJS.

## Installation

Simply run:

```
adonis install adonis-messagebird
```

Add MessageBird provider to your AdonisJS application located at `start/app.js`:

```
const providers = [
    ...
    'adonis-adonis-messagebird/providers/MessageBirdProvider'
];
```

Add to your `.env` file

```
MESSAGE_BIRD_KEY=
```

## Usage

Simply call it using:

```Javascript
const MessageBird = use('MessageBird');
```

## Examples

### Sending SMS

```js
const util = require("util");
const MessageBird = use("MessageBird");

const sendSms = async () => {
  const send = util.promisify(MessageBird.messages.create);
  const message = await send({
    originator: "+15017122661",
    recipients: ["+15558675310"],
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
  });

  console.log(message.id);
};
```

## Official Documentation

This is basically a wrapper over [messagebird-nodejs](https://github.com/messagebird/messagebird-nodejs).

For more information, kindly check out the [MessageBird Official Documentation](https://developers.messagebird.com).

## Contributing

If you find any issue, bug or missing feature, please kindly create an issue or submit a pull request.

## License

Adonis MessageBird is open-sourced software licensed under the MIT license.
