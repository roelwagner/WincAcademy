const { minimumConditionsReached } = require("./verify-password.js");
const verifyPassword = require("./verify-password.js");

const passwords = ["henkie1", "1234a", "z", "henkie1234",  "HENKhenk", "HENK33$", "1234", ""];

test("Password should not be NULL ", () => {
    const tested = passwords.map(password => {
        return verifyPassword.isNotNull(password)
    })
    const expected = [true, true, true, true,  true, true, true, false];
    expect(tested).toEqual(expected);
});

test("Password should not be bigger than 8 characters ", () => {
    const tested = passwords.map(password => {
        return verifyPassword.hasRightLength(password)
    })
    const expected = [true, true, true, false,  true, true, true, true];
    expect(tested).toEqual(expected);
});

test("Password should have at least 1 uppercase letter ", () => {
    const tested = passwords.map(password => {
        return verifyPassword.hasUpperCaseCharacter(password)
    })
    const expected = [false, false, false, false,  true, true, false, false];
    expect(tested).toEqual(expected);
});

test("Password should have at least 1 lowercase letter ", () => {
    const tested = passwords.map(password => {
        return verifyPassword.hasLowerCaseCharacter(password)
    })
    const expected = [true, true, true, true,  true, false, false, false];
    expect(tested).toEqual(expected);
});

test("Password should have at least 1 digit ", () => {
    const tested = passwords.map(password => {
        return verifyPassword.hasDigit(password)
    })
    const expected = [true, true, false, true,  false, true, true, false];
    expect(tested).toEqual(expected);
});

test("Password should meet 3 requirements ", () => {
    const pass = "testings";
    const toCheck = [];
        toCheck.push(verifyPassword.isNotNull(pass),
        verifyPassword.hasRightLength(pass),
        verifyPassword.hasUpperCaseCharacter(pass),
        verifyPassword.hasLowerCaseCharacter(pass),
        verifyPassword.hasDigit(pass))
    
    expect(minimumConditionsReached(toCheck)).toBeTruthy();
});

test("passwordVerifier test ", () => {
    const tested = passwords.map(password => {
        return verifyPassword.verifyPassword(password)
    })

    const expected = [true, true, true, true,  true, false, false, false];

    expect(tested).toEqual(expected)
})