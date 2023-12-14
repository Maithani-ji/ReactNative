// import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'dish',
//   title: 'Dishes',
//   type: 'document',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Dish name',
//       validation: (rule) => rule.required(),
//     },
//     {
//       name: 'description',
//       type: 'string',
//       title: 'Dish description',
//       validation: (rule) => rule.required(),
//     },
//     {
//       name: 'image',
//       type: 'image',
//       title: 'image category',
//     },
//     {
//       name: 'price',
//       type: 'number',
//       title: 'price for the dish',
//     },
//   ],
// })
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish name',
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
      title: 'Image of the dish',
    },
    {
      name: 'price',
      title: 'Price of the dish in USD',
      type: 'number',
    },
  ],
})
