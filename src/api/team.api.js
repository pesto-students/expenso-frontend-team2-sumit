// POST http://localhost:5000/api/team/new
import api from "./api";

const URLS = {
  newTeam: "team/new",
};

export function getTeams() {
  return "teams";
}

export function addNewTeam({ name, description }) {
  return api.post(URLS.newTeam, { name, description });
}
