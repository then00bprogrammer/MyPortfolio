// schemas/message.js

export default {
    name: 'message',
    type: 'document',
    title: 'Message',
    fields: [
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        description: 'Email of Sender',
      },
      {
        name: 'subject',
        type: 'string',
        title: 'Subject',
        description: 'Subject of the message'
      }, 
      {
        name: 'messageText',
        type: 'string',
        title: 'Message Text',
        description: 'Message'
      }
    ]
  }
  