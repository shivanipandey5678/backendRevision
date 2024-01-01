const {validate}=require("uuid");

const validUuid = 'f47ac10b-58cc-4372-a567-0e02b2c3d479';
const invalidUuid = 'invalid-uuid-string';

console.log(validate(validUuid))
console.log(validate(invalidUuid))