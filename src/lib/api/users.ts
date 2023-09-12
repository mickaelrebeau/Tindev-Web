import { faker } from '@faker-js/faker'
import { Wait } from '../methods/async'

export async function getUser(userId: string): Promise<User> {
  await Wait(1000)

  // return Promise.reject({ message: 'User not found' })

  return Promise.resolve({
    id: userId,
    name: faker.person.fullName(),
    username: faker.animal.cat(),
    avatar: faker.image.avatar(),
    bio: faker.lorem.sentence(69),
    jobTitle: faker.person.jobTitle(),
    birthday: faker.date.past({
      years: faker.number.int({ min: 16, max: 52 }),
    }),
    photos: Array.from({ length: faker.number.int({ min: 3, max: 7 }) }, () => {
      return faker.image.url({ width: 300, height: 500 })
    }),
  })
}
