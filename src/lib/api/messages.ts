import { Wait } from '../methods/async'

export async function getChannelsSummary(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  userId: string
): Promise<ChannelSummary[]> {
  await Wait(2000)

  // return Promise.reject("User not found")

  return Promise.resolve([
    {
      userId: 'c6b8a572-ff71-4836-90c2-5c412fcfed22',
      newNotification: true,
      superLike: true,
    },
    {
      userId: '3fe2d504-8d55-4352-9f18-89d00af7b63',
      newNotification: true,
      superLike: false,
    },
    {
      userId: '97d66584-7257-4b84-8a87-4156f61370d5',
      newNotification: false,
      superLike: false,
      lastMessage:
        "You have the cutest smile i've even seen Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil enim laborum ipsa minima reprehenderit quas voluptatum voluptates itaque ad?",
    },
    {
      userId: 'eead86cf-43d1-4346-b067-f649e2c83c22',
      newNotification: false,
      superLike: false,
      lastMessage: 'What are you up to this weekend...',
    },
    {
      userId: 'd70ff764-1613-46be-ac60-ad5a92abd415',
      newNotification: false,
      superLike: false,
      lastMessage:
        "I'll be flying out to Italy tonight out of Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil enim laborum ipsa minima reprehenderit quas voluptatum voluptates itaque ad?",
    },
  ])
}
