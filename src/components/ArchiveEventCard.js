import '../styles/ArchiveEventCard.css';
import './CardFooter';
import CardFooter from './CardFooter';

const ArchiveEventCard = ({ event }) => {
  var startDate;
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
    <div className="archiveCard">
      <div className="archiveImageBox">
        <div className="archiveCardImage">
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
        </div>
      </div>
      <div className="archiveCardTitle">{event.name}</div>
      <div className="timeVenueBox">
        <div className="archiveCardTimeBox">
          <div style={{ color: '#958a83' }}>Starts on</div>
          <div className="archiveCardTime">{startDate}</div>
        </div>
        <div className="archiveCardFeeBox">
          <div style={{ color: '#958a83' }}>Entry Fee</div>
          <div className="archiveCardFee">
            {event.fees ? event.fees + ' ' + event.currency : 'Free'}
          </div>
        </div>
        <div className="archiveCardVenueBox">
          <div style={{ color: '#958a83' }}>Venue</div>
          <div className="archiveCardVenue">{event.venue}</div>
        </div>
      </div>
      <div className="archiveCardDes">
        {event.short_desc.length >= 115
          ? event.short_desc.slice(0, 115) + '...'
          : event.short_desc}
      </div>
      <div className="archivetaglistBox">
        {event.card_tags.map((tag) => {
          return <div className="activetags">{tag}</div>;
        })}
      </div>
      <CardFooter event={event} />
    </div>
  );
};

export default ArchiveEventCard;
