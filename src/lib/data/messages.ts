export const messages: Message[] = [
  {
    id: 0,
    userId: 0,
    content: 'Cela faisait un moment que vous...',
    comments: [
      {
        id: 0,
        userId: 1,
        content: "n'étiez pas venu",
      },
      {
        id: 1,
        userId: 1,
        content: '😎',
      },
    ],
  },
  {
    id: 1,
    userId: 1,
    content: "Le code avance bien aujourd'hui",
  },
  {
    id: 2,
    userId: 1,
    content: 'Je veux pas aller faire les courses !!!',
    comments: [
      {
        id: 0,
        userId: 0,
        content: 'Il va bien falloir y aller 😜',
        comments: [
          {
            id: 0,
            userId: 1,
            content: 'Mais je veux pas 😢😭😭',
          },
        ],
      },
    ],
  },
]

export const messages2: Message2[] = [
  {
    id: 0,
    userId: 0,
    date: 'Feb. 8, 2022',
    content:
      'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.',
    comments: [
      {
        userId: 2,
        date: 'Mar. 12, 2022',
        content:
          'The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.',
      },
      {
        userId: 0,
        date: 'Jun. 23, 2022',
        content:
          'Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.',
      },
    ],
  },
]
