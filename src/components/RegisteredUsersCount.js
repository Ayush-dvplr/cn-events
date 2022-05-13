const RegisteredUsersCount = ({count}) => {
  return (
    <div className='activeRegUser'>
    and <b style={{color: 'black'}}>{count}</b> others are participating
    </div>
  );
}

export default RegisteredUsersCount;