
import Joi from "joi";

export const createContactSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com","ua", "net" ] },
      })
      .required(),
    phone: Joi.string().required(),
  });
  
  export const updateContactSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com","ua", "net" ] },
    }),
  
    phone: Joi.string(),
  });

