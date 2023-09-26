import { signTheToken } from '../utils/authenticate.js'
import { AuthenticationError } from 'apollo-server-express'
import Service from "../models/services.js";
import User from '../models/user.js'

const resolvers = {
  Query: {
    services: async () => {
      try {
        return await Service.find();
      } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch services.");
      }
    },
  
    service: async (_, { id }) =>{
      try{
        return await Service.findById(id);
      }catch(error){
        console.log(error)
        throw new Error(`Failed to fetch service with id: ${id}`)
      }
    },
    me: async (_, args, context ) => {
      try {  // the context contains the JWT
        // console.log("Looking for user with ID:", context.user._id);                 
        const user = await User.findOne({_id: context.user._id  });  // grabbing the info from inside the JWT
        // console.log("Found user:", user);
        return user;

      } catch (error) {
        throw new Error(`User not found: ${error.message}`);
      }
    },
  },
  Mutation: {
    addService: async (_, args) => {
      try {
        const service = new Service({
          title: args.title,
          description: args.description,
          price: args.price, 
          image: args.image
        });
  
        return await service.save();
      } catch (error) {
        console.log(error)
        throw new Error("Failed to add service.");
      }
    },
    updateService: async (_, args ) => { 
      console.log(args)
      const { id, ...rest } = args;
      try {
        return await Service.findByIdAndUpdate(id, rest, { new: true });
      } catch (error) {
        console.log(error)
        throw new Error(`Failed to update service with id: ${id}`);
      }
    },
    deleteService: async (_, { id }) => {
      try {
        return await Service.findByIdAndRemove(id);
      } catch (error) {
        console.log(error)
        throw new Error(`Failed to delete service with id: ${id}`);
      }
    },
      // The function takes three arguments: _ (an unused placeholder for the "root" object, which is typically not used in a mutation), { email, password } (the actual variables we're interested in), and context (which can provide additional information, like authentication state).
    loginUser : async (_, { email, password },  context) => {
  
      const user  = await User.findOne({ email});

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }
      // const correctPw = await user.isCorrectPassword(password); Checks if the password is correct. lowercase user.isPasswordCorrect is targeting the instance method on the object.
      const correctPw = await user.isPasswordCorrect(password); 
      

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }
      // const token = signToken(user);: Generates a JWT token for the user. Similar to creating a session in REST.
      const token = signTheToken(user);

      // return { token, user };: Returns an object containing the token and user data. This corresponds to the Auth type in your typeDefs.
      return { token, user };

    },
  }
}; 
export default resolvers;
