class Controller {
    check(eggs) {
    const isValid = Validator.valid(eggs);
   
    return isValid;
    }
   }

   // данный код и коды ниже не будут запускаться и возвращать значения по причинам описанным в файле al_v6.ts

   class EggController {
    checkEgg(eggAll) {
    const isEggValid = EggValidator.qualityEggValid(eggAll);
    return isEggValid;
    }
   }


   class EggController {
    public checkEgg(eggAll: IEgg[]): boolean {
    const isEggValid: boolean = EggValidator.qualityEggValid(eggAll);
    return isEggValid;
    }
   }