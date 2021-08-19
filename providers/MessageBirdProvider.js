'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class MessageBirdProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register() {
    this.app.singleton('Adonis/MessageBird', () => {
      const Config = this.app.use('Adonis/Src/Config')

      const MessageBird = require('messagebird')
      const accessKey = Config.get('messagebird.key')
      const timeout = Config.get('messagebird.timeout')
      const features = Config.get('messagebird.features')

      return new MessageBird(accessKey, timeout, features)
    })
  }

  /**
   * On boot add commands with ace.
   *
   * @return {void}
   */
  boot() {
    this.app.alias('Adonis/MessageBird', 'MessageBird');
  }
}

module.exports = MessageBirdProvider
