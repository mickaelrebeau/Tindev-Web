import { generateSortedDates } from '../methods/date'

const ids = Array.from({ length: 100 }, (_, i) => i)
const idsIt = ids[Symbol.iterator]()

const dates = generateSortedDates(20)
const datesIt = dates[Symbol.iterator]()

export const messages = [
  {
    channelId: 0,
    id: idsIt.next().value,
    userId: 1,
    date: datesIt.next().value,
    content: 'Un petit message ?',
  },
  {
    channelId: 0,
    id: idsIt.next().value,
    userId: 1,
    date: datesIt.next().value,
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl eu nisl. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl eu nisl.',
  },
  {
    channelId: 0,
    id: idsIt.next().value,
    userId: 0,
    date: datesIt.next().value,
    content: 'Petit message mignon !',
  },
  {
    channelId: 0,
    id: idsIt.next().value,
    userId: 0,
    date: datesIt.next().value,
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl eu nisl. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl eu nisl.',
  },
  {
    channelId: 0,
    id: idsIt.next().value,
    userId: 0,
    date: datesIt.next().value,
    content: 'Tu fais quoi ?',
  },
  {
    channelId: 0,
    id: idsIt.next().value,
    userId: 1,
    date: datesIt.next().value,
    content: 'Je dev un snake en dodge ! et toi ?',
  },
  {
    channelId: 0,
    id: idsIt.next().value,
    userId: 0,
    date: datesIt.next().value,
    content: "Ouah ! ca a l'air super cool !",
  },
  {
    channelId: 0,
    id: idsIt.next().value,
    userId: 0,
    date: datesIt.next().value,
    content: 'Moi je suis en train de faire un site de rencontre !',
  },
  {
    channelId: 0,
    id: idsIt.next().value,
    userId: 1,
    date: datesIt.next().value,
    content: "Ah bon ? c'est quoi le nom ?",
  },
  {
    channelId: 0,
    id: idsIt.next().value,
    userId: 0,
    date: datesIt.next().value,
    content: "C'est Tindev ! l'app de rencontre pour les devs !",
  },
]
