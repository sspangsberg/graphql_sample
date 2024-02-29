import { Product } from "./models/Product";

export const resolvers = {
    Query: {     
        products: async () => await Product.find(),
        product: async (parent, args, context, info) => { return await Product.findById(args.id); }        
    },
    Mutation: {        
        createProduct: async (_, { name, description, price, inStock }) => {
            const product = new Product({ name, description, price, inStock });
            await product.save();            
            return product;
        },
        updateProduct: async (_, { id, name, description, price, inStock }) => {
            await Product.findByIdAndUpdate(id, { name, description, price, inStock });                        
            return "Update Success";
        },
        deleteProduct: async (_, { id }) => {            
            await Product.findByIdAndRemove(id);            
            return "Delete Success";
        }
    }
};