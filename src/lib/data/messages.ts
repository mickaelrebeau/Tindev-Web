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
