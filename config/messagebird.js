'use strict'

const Env = use('Env')

module.exports = {
  /*
   |--------------------------------------------------------------------------
   | MessageBird Access Key
   |--------------------------------------------------------------------------
   */
  key: Env.get('MESSAGE_BIRD_KEY', ''),

  /*
   |--------------------------------------------------------------------------
   | MessageBird Connection Timeout
   |--------------------------------------------------------------------------
   */
  timeout: Env.get('MESSAGE_BIRD_TIMEOUT'),

  /*
   |--------------------------------------------------------------------------
   | MessageBird Features to Enable
   |--------------------------------------------------------------------------
   */
  features: [
    "ENABLE_CONVERSATIONSAPI_WHATSAPP_SANDBOX",
    "ENABLE_FIREBASE_PLUGIN"
  ]
}
