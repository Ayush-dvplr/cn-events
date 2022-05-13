import '../styles/CardFooter.css';
import RegisteredUsersCount from './RegisteredUsersCount';

const CardFooter =  ({event}) => {
 return (
    <div className='activeCardFooter'>
    <div className='activeRegUsers'>
        <div className='activeTopUsers'>
            {event.registered_users.top_users.map((user)=>{return <div className={'regUserImgBox'} key={user.name}><img src={user.image_url?user.image_url:'https://files.codingninjas.in/0000000000001270.png'} alt={user.name} key={user.name}/><label>{user.name}</label></div>})}
            
        </div>
          {event.registered_users.show_users_count ? <RegisteredUsersCount count={event.registered_users.other_users_count}/> : ''}
       </div>
        {event.registration_status === "REGISTRATIONS_OPEN" ? (<div className='activeCardReg'>
<div className='activeRegister'>REGISTER NOW</div>
</div>) : ''}
    </div>
 );
}

export default CardFooter;

<div className='activeCardReg'>
<div className='activeRegister'>REGISTER NOW</div>
</div>