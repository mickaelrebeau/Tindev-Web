import { Network } from "../kit/Network/network"
import { SecondaryTitle } from "../kit/Title/SecondarytTitle"
import { Paragraph } from "../kit/Utilitaries/Paragraph"
import { Tag } from "../kit/Utilitaries/Tag"

interface TypeCard {
    pseudo: string
    description: string,
    avatar: string,
    tags: string[],
    reseaux: {name:string, link:string}[]
}

export function Card({pseudo, description, avatar, tags, reseaux}: TypeCard){

    return (
        <section className="p-5 my-4 mx-auto w-[400px] h-auto rounded-md border-lg border shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
            <article className="flex flex-row-reverse justify-between items-center gap-5 w-content mb-2">
                <img src={avatar} className="rounded-full object-cover w-20 h-20 border"/>
                <SecondaryTitle 
                    title={pseudo}
                />
            </article>
            <Paragraph 
                    content={description}            
                />
            <aside className="grid grid-cols-3 mb-4 gap-2">
                {tags.map((tag) => (
                    <Tag content={tag} />
                ))}
            </aside>
            <div className="grid grid-cols-8 w-full h-fit gap-2">
                {reseaux.map((reseau) => (
                    <Network 
                        name={reseau.name}
                        link={reseau.link}
                    />
                ))}
            </div>
        </section>
    )
}