import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const SkeletonLoader = ({count}) => {
    return (
        <>
            <SkeletonTheme color="#EEE" highlightColor="#CCC">
                <p>
                    <Skeleton count={count||3} duration={4} />
                </p>
            </SkeletonTheme>
        </>
    )
}

export default SkeletonLoader;
