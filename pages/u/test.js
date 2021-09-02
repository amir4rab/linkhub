import UserProfile from '../../components/userProfile/userProfile';
import image from './../../public/images/person.jpeg';
import dummyData from '../../libs/dummyData';

function TestUser() {
    const dataObj = {
        email: dummyData.email,
        id: dummyData.id,
        socials: dummyData.socials,
        profile: {
            bg: dummyData.profile.bg,
            fullName: dummyData.profile.fullName,
            pic: image,
            about: dummyData.profile.about,
            location: dummyData.profile.location,
        }
    };
    return (
        <div>
            <UserProfile userData={ dataObj } />
        </div>
    )
}

export default TestUser
