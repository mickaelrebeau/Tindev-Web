import { PrimaryButton } from '@/components/kit/Button/PrimaryButton'
import { SecondaryButton } from '@/components/kit/Button/SecondaryButton'
import { TertiaryButton } from '@/components/kit/Button/TertiaryButton'
import { Paragraph } from '@/components/kit/Utilitaries/Paragraph'
import { FirstTitle } from '@/components/kit/Title/FirstTitle'
import { SecondaryTitle } from '@/components/kit/Title/SecondarytTitle'
import { Tag } from '@/components/kit/Utilitaries/Tag'
import { Card } from '@/components/card/Card'
import image from '@/assets/moi.jpg'
import { StackedAvatars } from '@/components/ui/StackedAvatars'
import { faker } from '@faker-js/faker'

export function Kit() {
  return (
    <div className="">
      {/* Titles */}
      <FirstTitle>Titre 1</FirstTitle>
      <SecondaryTitle>Titre 2</SecondaryTitle>

      {/* Buttons */}
      <PrimaryButton>Button 1</PrimaryButton>
      <SecondaryButton>Button 2</SecondaryButton>
      <TertiaryButton>Button 3</TertiaryButton>

      {/* Paragraphs */}
      <Paragraph className={'dark:text-red-700'}>
        Nostrud ea eu elit sint pariatur culpa proident consequat consectetur.
        Cupidatat ea deserunt ut ut esse consectetur minim sit consequat nisi.
        Incididunt cupidatat Lorem sunt esse aliqua qui exercitation esse ex
        veniam non. Excepteur eu sit reprehenderit commodo consectetur voluptate
        duis nulla exercitation esse.
      </Paragraph>

      {/* Tags */}
      <Tag>Python</Tag>

      {/* Stacked avatars */}
      <StackedAvatars
        avatars={Array.from({ length: 10 }, () => faker.image.avatarGitHub())}
        countDisplayed={5}
        link={'/'}
        size={24}
        space="md"
        textSize="4xl"
      />
      <StackedAvatars
        avatars={Array.from({ length: 3 }, () => faker.image.avatarGitHub())}
        countDisplayed={4}
        link={'/'}
        size={10}
        space="xl"
        textSize="sm"
      />

      {/* Cards */}
      <Card
        pseudo={'Raynh'}
        // description={
        //   'Nostrud ea eu elit sint pariatur culpa proident consequat consectetur. Cupidatat ea deserunt ut ut esse consectetur minim sit consequat nisi. Incididunt cupidatat Lorem sunt esse aliqua qui exercitation esse ex veniam non. Excepteur eu sit reprehenderit commodo consectetur voluptate duis nulla exercitation esse.'
        // }
        avatar={image}
        tags={[
          'Python',
          'Java',
          'C',
          'HTML',
          'CSS',
          'JavaScript',
          'ReactJS',
          'Tailwind',
        ]}
        reseaux={[
          { name: 'github', link: 'https://github.com/RaphHuynh' },
          { name: 'instagram', link: 'https://github.com/RaphHuynh' },
          { name: 'twitch', link: 'https://github.com/RaphHuynh' },
        ]}
      />
    </div>
  )
}
