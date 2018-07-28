import validator from 'validator';


// all the validators should return ture on failure and false on success so that developer
// can skip !(not) operator for return value
class Validator {
    static validateRequired(value){        
        return validator.isEmpty(value + '');
    }

    static validateInteger(value){             
        return !validator.isInt(value + '');
    }

    static validateIntegerWithMin(value, min){             
        return !validator.isInt(value + '', { min: min  });
    }

    static validateIntegerWithMax(value, max){             
        return !validator.isInt(value + '', { max: max  });
    }

    static validateIntegerWithMinMax(value, min, max){          
        return !validator.isInt(value + '', { min : min, max: max  });
    }
}

export default Validator;