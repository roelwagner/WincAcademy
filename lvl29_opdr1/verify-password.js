// Utility functions
const isNotNull = password => password.length > 0;

const hasRightLength = password => password.length < 9;

const hasUpperCaseCharacter = password => password  !== password.toLowerCase();

const hasLowerCaseCharacter = password => password !== password.toUpperCase();

const hasDigit = password => /\d/.test(password);

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    const trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};