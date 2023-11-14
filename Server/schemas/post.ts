// schemas/post.js

export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'alertMessage',
      type: 'string',
      title: 'Alert Message',
      description: 'Optional alert message to display',
    },
    {
      name: 'projectVideoLink',
      type: 'url',
      title: 'Project Video Link',
      description: 'Link to the project video (optional)',
    },
    {
      name: 'projectPhoto',
      type: 'image',
      title: 'Project Photo',
      description: 'The project\'s photo (required)',
      options: {
        hotspot: true, // Enable hotspot for image positioning
      },
    },
    {
      name: 'sidePhoto',
      type: 'image',
      title: 'Side Photo',
      description: 'The project\'s side photo (required)',
      options: {
        hotspot: true, // Enable hotspot for image positioning
      },
    },
    {
      name: 'themeColor',
      type: 'string',
      title: 'Theme',
      description: 'Theme Color of the project',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the project',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A brief description of the project',
    },
    {
      name: 'siteLink',
      type: 'url',
      title: 'Site Link',
      description: 'Link to the project website',
    },
    {
      name: 'githubRepoLink',
      type: 'url',
      title: 'GitHub Repo Link',
      description: 'Link to the project\'s GitHub repository',
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      description: 'List of features',
      of: [{ type: 'string' }],
    },
    {
      name: 'techStackDescription',
      type: 'array',
      title: 'Tech Stack Description',
      description: 'Description of the project\'s tech stack',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
      validation: (Rule:any) => Rule.custom((blocks:any) => {
        const textLength = blocks
          .map((block:any) => block.children.map((child:any) => child.text).join(''))
          .join('').length;

        if (textLength > 500) {
          return 'Tech Stack Description must not exceed 300 characters';
        }
        return true;
      }),
    },
    {
      name: 'techStackNames',
      type: 'array',
      title: 'Tech Stack Names',
      description: 'List of tech stack names',
      of: [{ type: 'string' }],
    }, 
    {
      name: 'priority',
      type: 'number',
      title: 'Priority',
      description: 'The order in which these projects should be listed',
      of: [{type: 'number'}]
    }
  ],
  // Optional: You can add validation rules or other configurations here
}
