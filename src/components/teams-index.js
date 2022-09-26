import * as React from "react";
import { getTeams, addNewTeam } from "../data";
import { Link, useLocation } from "react-router-dom";

function TeamsIndex() {
  const [teamList, setTeamList] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [listUpdated, setListUpdated] = React.useState(0);
  const { pathname } = useLocation();

  React.useEffect(() => {
    (async () => {
      const teams = await getTeams();
      setTeamList(teams);
      setShowModal(false);
    })();
    // getTeams().then((data) => {
    //   setTeamList(data);
    //   setShowModal(false);
    // });
  }, [listUpdated]);

  function addTeam(event) {
    event.preventDefault();
    const { name, description } = event.target.elements;
    console.log(name.value, description.value);
    addNewTeam(name.value, description.value).then((data) => {
      console.log(data);
      setListUpdated((c) => c + 1);
    });
    setShowModal(false);
  }

  if (teamList === null) return <h3>Loading...</h3>;

  return (
    <div>
      <div>
        <h1>
          Teams
          <button onClick={() => setShowModal(true)}>Creat New Team</button>
        </h1>
      </div>
      <ul>
        {teamList.length !== 0
          ? teamList.map(({ id, name }) => (
              <li key={id}>
                <Link to={id}>{name}</Link>
                <hr />
              </li>
            ))
          : "Add new Team"}
      </ul>
      {showModal ? (
        <div>
          <form onSubmit={addTeam}>
            <div>
              <label htmlFor="name">Team Name</label>
              <input id="name" type="text" />
            </div>
            <div>
              <label htmlFor="description">Team Description</label>
              <input id="description" type="text" />
            </div>
            <div>
              <button type="submit">Add Team</button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default TeamsIndex;
