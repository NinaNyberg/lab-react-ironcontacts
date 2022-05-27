// import logo from './logo.svg';
import './App.css';
import contactsData from './contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const randomContact = Math.floor(Math.random() * contactsData.length);

  const listUpdater = () => {
    setContacts([...contacts, contactsData[randomContact]]);
  };

  const sortedContacts = () => {
    setContacts(contactsData.sort((a, b) => a.popularity - b.popularity));
  };

  const sortedContactsByName = () => {
    setContacts(contactsData.sort((a, b) => a.name.localeCompare(b.name)));
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div>
        <button onClick={listUpdater}>Add random contact</button>
        <button onClick={sortedContactsByName}>Sort by name</button>
        <button onClick={sortedContacts}>Sort by popularity</button>
      </div>
      <table>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Popularity</th>
          <th scope="col">Won Oscar</th>
          <th scope="col">Won Emmy</th>
          <th scope="col">Actions</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt="pic"
                  style={{ width: '10%' }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar === true ? '🧡' : 'no'} </td>
              <td>{contact.wonEmmy === true ? '🧡' : 'no'} </td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
