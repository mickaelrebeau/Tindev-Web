import { PrimaryButton } from "@/components/kit/Button/PrimaryButton";
import { SecondaryButton } from "@/components/kit/Button/SecondaryButton";
import { TertiaryButton } from "@/components/kit/Button/TertiaryButton";
import { Paragraph } from "@/components/kit/Utilitaries/Paragraph";
import { FirstTitle } from "@/components/kit/Title/FirstTitle";
import { SecondaryTitle } from "@/components/kit/Title/SecondarytTitle";
import { Tag } from "@/components/kit/Utilitaries/Tag";
import { Card } from "@/components/card/Card";
import image from "@/assets/moi.jpg";


export function Kit() {
    return (
        <div className="">
            <FirstTitle
                title="Titre 1"
            />
            <SecondaryTitle
                title="Titre 2"
            />
            <PrimaryButton type="button">Button 1</PrimaryButton>
            <SecondaryButton type="button">Button 2</SecondaryButton>
            <TertiaryButton type="button">Button 3</TertiaryButton>
            <Paragraph
                content="Nostrud ea eu elit sint pariatur culpa proident consequat consectetur. Cupidatat ea deserunt ut ut esse consectetur minim sit consequat nisi. Incididunt cupidatat Lorem sunt esse aliqua qui exercitation esse ex veniam non. Excepteur eu sit reprehenderit commodo consectetur voluptate duis nulla exercitation esse."
            />
            <div className="">
                <Tag
                    content="Python"
                />
            </div>
            <Card 
                pseudo={"Raynh"} 
                description={"Nostrud ea eu elit sint pariatur culpa proident consequat consectetur. Cupidatat ea deserunt ut ut esse consectetur minim sit consequat nisi. Incididunt cupidatat Lorem sunt esse aliqua qui exercitation esse ex veniam non. Excepteur eu sit reprehenderit commodo consectetur voluptate duis nulla exercitation esse."} 
                avatar={image} 
                tags={["Python","Java","C","HTML","CSS","JavaScript","ReactJS","Tailwind"]} 
                reseaux={[{name:"github",link:"https://github.com/RaphHuynh"},{name:"instagram",link:"https://github.com/RaphHuynh"},{name:"twitch",link:"https://github.com/RaphHuynh"}]}            
            />
        </div>
    )
}