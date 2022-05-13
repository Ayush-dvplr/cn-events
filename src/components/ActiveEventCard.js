import '../styles/ActiveEventCard.css';
import CardFooter from './CardFooter';

const ActiveEventCard = ({ event }) => {
  var registerEndDate;
  var startDate;
  const registrationDate = () => {
    let d = new Date(event.registration_end_time * 1000);
    let date = d.getDate();
    date = date < 10 ? '0' + date.toString() : date.toString();

    let month = d.toLocaleString('en-us', { month: 'short' });
    let hours = d.getHours();
    let AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    hours = hours < 10 ? '0' + hours.toString() : hours.toString();

    let minutes = d.getMinutes();
    minutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString();

    registerEndDate =
      date + ' ' + month + ', ' + hours + ':' + minutes + ' ' + AmOrPm;
  };
  registrationDate();

  const registerStartDate = () => {
    let d = new Date(event.event_start_time * 1000);
    let date = d.getDate();
    date = date < 10 ? '0' + date.toString() : date.toString();
    let year = d.getFullYear();
    let month = d.toLocaleString('en-us', { month: 'short' });
    let hours = d.getHours();
    let AmOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours < 10 ? '0' + hours.toString() : hours.toString();

    let minutes = d.getMinutes();
    minutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString();

    startDate =
      hours +
      ':' +
      minutes +
      ' ' +
      AmOrPm +
      ', ' +
      date +
      ' ' +
      month +
      ' ' +
      year;
  };
  registerStartDate();

  return (
    <div className="activeCard">
      <div className="activeImageBox">
        <div className="activeCardImage">
          <div>
            <img
              src={
                window.outerWidth >= 780
                  ? event.cover_picture
                  : event.mobile_cover_picture
              }
              alt={event.oderable_key}
            />
          </div>
          <div className="activeRegTime">
            <div className="activeRipple">
              <span></span>
            </div>
            <div>
              Registrations <b>open</b> till <b>{registerEndDate}</b>
            </div>
          </div>
        </div>
      </div>
      <div className="activeCardTitle">{event.name}</div>
      <div className="timeVenueBox">
        <div className="activeCardTimeBox">
          <div style={{ color: '#958a83' }}>Starts on</div>
          <div className="activeCardTime">{startDate}</div>
        </div>
        <div className="activeCardFeeBox">
          <div style={{ color: '#958a83' }}>Entry Fee</div>
          <div className="activeCardFee">
            {event.fees ? event.fees + ' ' + event.currency : 'Free'}
          </div>
        </div>
        <div className="activeCardVenueBox">
          <div style={{ color: '#958a83' }}>Venue</div>
          <div className="activeCardVenue">{event.venue}</div>
        </div>
      </div>
      <div className="activeCardDes">
        {event.short_desc.length >= 115
          ? event.short_desc.slice(0, 115) + '...'
          : event.short_desc}
      </div>
      <div className="activetaglistBox">
        {event.card_tags.map((tag) => {
          return (
            <div className="activetags" key={tag}>
              {tag}
            </div>
          );
        })}
      </div>
      <CardFooter event={event} />
    </div>
  );
};

export default ActiveEventCard;
