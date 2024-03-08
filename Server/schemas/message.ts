// schemas/message.js

export default {
    name: 'message',
    type: 'document',
    title: 'Message',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'Name of the sender'
      }, 
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        description: 'Email of Sender',
      },
      {
        name: 'messageText',
        type: 'string',
        title: 'Message Text',
        description: 'Message'
      }
    ]
  }
  