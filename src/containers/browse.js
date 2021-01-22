import React, { useState } from 'react';
import { Header } from './header';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { SelectProfilesContainer } from './profiles';
import FooterContainer  from './footer';

export function BrowseContainer() {
    const [profile, setProfile] = useState({});

    const user = {
        displayName: "Laza",
        photoUrl: "1"
    }

    return profile.displayName ? (
        <>
            <p>Browse Container</p>
            <FooterContainer />
        </>
    ) :
        (<SelectProfilesContainer user={user} setProfile={setProfile} />)

}
