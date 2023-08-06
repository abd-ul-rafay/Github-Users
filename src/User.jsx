import './User.css';

const User = (props) => {
    const { name, avatar, url } = props;

    return (
        <div className='user-list'>
            <img src={ avatar } alt='profile' />
            <div className='main'>
                <h3>{ name }</h3>
                <a href={url} rel="noreferrer" target='_blank'>See Profile</a>
            </div>
        </div>
    );
}

export default User;
