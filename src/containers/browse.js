import React, { useState } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { SelectProfilesContainer } from './profiles';
import FooterContainer from './footer';

export function BrowseContainer() {
    const [profile, setProfile] = useState({});
    const [category, setCategory] = useState('series');
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    const user = {
        displayName: "Laza",
        photoUrl: "1"
    }

    return profile.displayName ? (
        <>
            <Header src="joke1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src='/images/misc/logo.svg' alt='Netflix' />
                        <Header.Link
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >
                            Series
                        </Header.Link>
                        <Header.Link
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >
                            Films
                        </Header.Link>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoUrl}/>
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture>
                                        <Header.TextLink>
                                            {user.displayName}
                                        </Header.TextLink>
                                    </Header.Picture>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => FirebaseContext.auth().signOut()}>
                                        Sign out
                                    </Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>
                        Watch Joker now
                    </Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him
                    </Header.Text>
                    <Header.PlayButton>
                        Play
                    </Header.PlayButton>
                </Header.Feature>
            </Header>
            <FooterContainer />
        </>
    ) :
        (<SelectProfilesContainer user={user} setProfile={setProfile} />)

}
