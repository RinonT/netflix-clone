import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

export default function Loading({src, ...resProps}) {
    return (
        <Spinner {...resProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
} 

Loading.ReleaseBody = function LoadingReleaseBody({children, ...resProps}) {
    return <ReleaseBody {...resProps}>{children}</ReleaseBody>
}