import {people} from './Data.js';
import {getImageUrl} from './Util.js'

export default function list() {
  const chemist = people.filter(person =>
  person.profession === 'chemist'
  );
  const listItems = chemist.map(person =>
  <li>
    <img src= {getImageUrl(person)}
    alt={people.name}
    />
    <p>
      <b>{person.name}:</b>
      {'' +person.profession + ''}
      know for {person.accomplishment}
    </p>
  </li>
  );
  return <ul>{listItems}</ul>
}