//import { signToken } from '../utils/authenticate'
//import { AuthenticationError } from 'apollo-server-express'
import Service from "./services.js";

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
  },
  Mutation: {
    addService: async (_, args) => {
      try {
        const service = new Service({
          title: args.title,
          description: args.description,
          price: args.price, // Here, args.price is an array of price objects
          image: args.image
        });
  
        return await service.save();
      } catch (error) {
        console.log(error)
        throw new Error("Failed to add service.");
      }
    },
    updateService: async (_, { id, ...rest }) => {  // ...rest is doing the same thing you did in the above addService
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
  }
}; 
export default resolvers;
