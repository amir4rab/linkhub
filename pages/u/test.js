import UserProfile from '../../components/userProfile/userProfile';
import image from './../../public/images/person.jpeg';

function TestUser({ userData }) {
    const dataObj = {
        email: userData.email,
        id: userData.id,
        socials: userData.socials,
        profile: {
            bg: userData.profile.bg,
            fullName: userData.profile.fullName,
            pic: image,
            about: userData.profile.about,
            location: userData.profile.location,
        }
    };
    return (
        <div>
            <UserProfile userData={ dataObj } />
        </div>
    )
}

export const getStaticProps = async _ => {
    const res = await fetch('http://localhost:3000/api/dummyData');
    const json = await res.json();
    return {
        props: { userData:{ ...json }},
    }
}

export default TestUser
