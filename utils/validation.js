const regexOnlyLetters = /^[a-zA-Z ]*$/;

/**
 * Función para validar solo letras
 * @param value 
 */
const validateOnlyLetters = (value) => {
    return regexOnlyLetters.test(value);
}

module.exports = {
    validateOnlyLetters: validateOnlyLetters
};