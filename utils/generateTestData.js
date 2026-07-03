const {faker} = require('@faker-js/faker');

function generateTestData()
{
   return{
    user:{
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        fullName: faker.person.fullName(),
        email: `test${Date.now()}@yopmail.com`, //use Yopmail domain
        password: 'Test@123',
        phone: faker.phone.number('############')
    },
    workspace:{
        name: faker.company.name() +'5'+ faker.person.jobTitle(),
        description: faker.lorem.sentence(),
        targetaudience: faker.lorem.sentence()
    },
    company:{
        name: faker.company.name(),
        designation: faker.person.jobTitle(),
        Website: faker.internet.url(),
        employeeCount: faker.number.int({min:10, max:500})
    },
    address:{
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country(),
        zipCode: faker.location.zipCode()
    }
   };
}
module.exports = {generateTestData};

//generate Different data types
// const randomNumber = faker.number.int({ min: 1000, max: 9999 });
// const randomString = faker.string.alphanumeric(10);
// const randomUUID = faker.string.uuid();
// const randomBoolean = faker.datatype.boolean();
// const futureDate = faker.date.future();
// const amount = faker.finance.amount();
// const username = faker.internet.username();
// const company = faker.company.name();
// const jobTitle = faker.person.jobTitle();
// const paragraph = faker.lorem.paragraph();