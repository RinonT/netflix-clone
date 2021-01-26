import React, {useEffect, useState } from 'react';
import { Header, Loading } from '../components';
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

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [user])

    return profile.displayName ? (
        <> 
        {loading ? <Loading src={user.photoUrl} /> : <Loading.ReleaseBody />}
        <Header src="joker1" dontShowOnSmallViewPort>
				<Header.Frame>
					<Header.Group>
						<Header.Logo
							to={ROUTES.HOME}
							src="/images/misc/logo.svg"
							alt="Netflix"
						/>
						<Header.Link
							onClick={() => setCategory('series')}
							active={category === 'series' ? 'true' : 'false'}
						>
							Series
						</Header.Link>
						<Header.Link
							onClick={() => setCategory('films')}
							active={category === 'films' ? 'true' : 'false'}
						>
							Films
						</Header.Link>
					</Header.Group>
					<Header.Group>
						<Header.Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>
						<Header.Profile>
							<Header.Picture src={user.photoUrl} />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoUrl} />
									<Header.Link>{user.displayName}</Header.Link>
								</Header.Group>
								<Header.Group>
									<Header.Link onClick={() => firebase.auth().signOut()}>
										Sign out
									</Header.Link>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>

				<Header.Feature>
					<Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
					<Header.Text>
						Forever alone in a crowd, failed comedian Arthur Fleck seeks
						connection as he walks the streets of Gotham City. Arthur wears two
						masks -- the one he paints for his day job as a clown, and the guise
						he projects in a futile attempt to feel like he's part of the world
						around him.
					</Header.Text>
					<Header.PlayButton>Play</Header.PlayButton>
				</Header.Feature>
			</Header>
			<FooterContainer></FooterContainer>
		</>
	) : (
		<SelectProfilesContainer user={user} setProfile={setProfile} />
	);
        
}
