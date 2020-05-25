import axios from "axios";

// axios call that returns 50 random users with first name, last name, image, email, DOB

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
};
