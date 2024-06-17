"use server"
import { validationSchema } from "@/utils/validations";
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();
//await new Promise(resolve => setTimeout(resolve, 30000000));

export async function getUsers() {
    try {
        return prisma.user.findMany();
    } catch (e) {
        console.error("error getting all entries: " + e);
        throw e;
    }
}

export async function getUser(id:number) {
    try {
        return prisma.user.findUnique({
            where : {
                id: id
            }
        });
    } catch (e) {
        console.error("error getting entry " + id + ": " + e);
        throw e;
    }
}

export async function deleteUser(formData: FormData) {
    const id = formData.get('id');
    
    if(!id){
        return null;
    }

    try {
        const result = prisma.user.delete({
            where : {
                id: parseInt(id as string)
            }
        });

        revalidatePath('/');

        return result;
    } catch (e) {
        console.error("error deleting entry " + id + ": " + e);
        throw e;
    }
}

export async function addUser(formData: FormData) {

    const name = formData.get('name');
    const email = formData.get('email');

    if(!name || !email) {
        return "failed to add user, missing fields."
    }    

    const isValid = await validationSchema.isValid({name, email});
    if(!isValid) {
        return "failed to add valid user."
    }

    try {
      await prisma.user.create({
        data: {
          name: name as string,
          email: email as string
        },
      });   

      revalidatePath('/');
      
    } catch(e) {
        console.error("error adding user");
        throw e;
    }    
}