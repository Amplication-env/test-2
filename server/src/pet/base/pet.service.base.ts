/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Pet } from "@prisma/client";

export class PetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetFindManyArgs>
  ): Promise<number> {
    return this.prisma.pet.count(args);
  }

  async findMany<T extends Prisma.PetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetFindManyArgs>
  ): Promise<Pet[]> {
    return this.prisma.pet.findMany(args);
  }
  async findOne<T extends Prisma.PetFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetFindUniqueArgs>
  ): Promise<Pet | null> {
    return this.prisma.pet.findUnique(args);
  }
  async create<T extends Prisma.CreatePetArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreatePetArgs>
  ): Promise<Pet> {
    return this.prisma.pet.create<T>(args);
  }
  async update<T extends Prisma.UpdatePetArgs>(
    args: Prisma.SelectSubset<T, Prisma.UpdatePetArgs>
  ): Promise<Pet> {
    return this.prisma.pet.update<T>(args);
  }
  async delete<T extends Prisma.DeletePetArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeletePetArgs>
  ): Promise<Pet> {
    return this.prisma.pet.delete(args);
  }
}
