import * as Styled from '../css/skeleton/styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonPage = () => {

    return (
       <Styled.SectionWrapper>
        {[...Array(8)].map((_, index) => (
            <Styled.SkeletonCard key={index}>
                <Skeleton height={285} width={218} />
             </Styled.SkeletonCard>
           ))}
           
       </Styled.SectionWrapper>        
    )
}

export default SkeletonPage