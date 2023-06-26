export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'Short Description',
    },
    {
      name: 'heroImage',
      type: 'image',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Body Content',
      of: [{type: 'block'}],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'reference', to: {type: 'tag'}, name: 'tag'}],
    },
  ],
}
