// schemas/codingProfile.js

export default {
    name: 'codingProfile',
    type: 'document',
    title: 'CodingProfile',
    fields: [
      {
        name: 'about',
        type: 'array',
        title: 'About Description',
        description: 'About',
        of: [{type: 'block',},],
      }
    ],
  };
  