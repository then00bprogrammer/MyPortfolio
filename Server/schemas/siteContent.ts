// schemas/siteContent.ts

export default {
  name: 'siteContent',
  type: 'document',
  title: 'Site Content',
  fields: [
    {
      name: 'projectsPageSubtitle',
      type: 'string',
      title: 'Projects Page Subtitle/Description',
      description: 'Subtitle or description for the main Projects page',
    },
    {
      name: 'servicesSubtitle',
      type: 'string',
      title: 'Services Subtitle/Description',
      description: 'Subtitle or description for the Services section',
    },
    {
      name: 'projectsHomeSubtitle',
      type: 'string',
      title: 'Projects Home Subtitle/Description',
      description: 'Subtitle or description for the Projects section on the Home page',
    },
  ],
};
