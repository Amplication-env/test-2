/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { PetWhereUniqueInput } from "./PetWhereUniqueInput";
import { PetUpdateInput } from "./PetUpdateInput";

@ArgsType()
class UpdatePetArgs {
  @Field(() => PetWhereUniqueInput, { nullable: false })
  where!: PetWhereUniqueInput;
  @Field(() => PetUpdateInput, { nullable: false })
  data!: PetUpdateInput;
}

export { UpdatePetArgs as UpdatePetArgs };
