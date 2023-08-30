import { FeatureTitle } from "./FeatureTitle";
import { FeatureParagraph } from "./FeatureParagraph";

export const FeatureList = ({list}) => {
    return (
        <ul>
            {list.map((item, index) => {
                return (
                    <li key={index} className="mb-4 md:mb-6 xl:flex xl:gap-6">
                     <div className="xl:basis-1/2">
                     <FeatureTitle title={item.title}/>
                     </div>
                     <div className="md:w-[221px] md:h-[60px] xl:basis-1/2 xl:w-[285px] xl:h-[48px]">
                     <FeatureParagraph paragraph={item.paragraph}/>
                     </div>
                    </li>
                )
            })}
        </ul>
    )
}