// import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'category',
//   title: 'Category',
//   type: 'document',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'category name',
//       validation: (rule) => rule.required(),
//     },
//     {
//       name: 'description',
//       type: 'string',
//       title: 'category description',
//       validation: (rule) => rule.required(),
//     },
//     {
//       name: 'image',
//       type: 'image',
//       title: 'image category',
//     },
//   ],
// })
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of the resturant',
    },
  ],
})
