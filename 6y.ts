class Controller {
    public check(eggs: IEgg[]): boolean {
        const isValid: boolean = Validator.valid(eggs);

 return isValid;
 }
} // программа не дописанна так как не определен тип IEgg и функция Validator.valid

