import { Client, Account, ID } from "appwrite";
import config from "../Config/config.js";

class UserClass {
  client = new Client();
  account;

  constructor() {
    this.client.setProject(config.PROJECT_ID);
    this.account = new Account(this.client);
  }

  async signUpUser({ name, email, password }) {
    try {
      const userCreate = await this.account.create(ID.unique(), email, name, password);
      if (!userCreate) {
        throw new Error("Error occurred when user tried to sign up");
      }
      return userCreate; 
    } catch (error) {
      console.error("Error occurred when user tried to sign up: ", error.message);
      alert("Error occurred, please try again");
    }
  }

  // Sign in user
  async signInUser({ email, password }) {
    try {
      const userLogin = await this.account.createEmailPasswordSession(email, password);
      if (!userLogin) {
        throw new Error("Error occurred when user tried to log in");
      }
      return userLogin; 
    } catch (error) {
      console.log("Error occurred when user tried to log in: ", error.message);
      alert("Login error, please try again");
    }
  }

  // Sign out user
  async signOut() {
    try {
      await this.account.deleteSession('current');
      console.log("User signed out successfully");
    } catch (error) {
      console.log("Error occurred when user tried to log out: ", error.message);
      alert("Error occurred when user tried to log out");
    }
  }
}

const authService = new UserClass();
export default authService;
