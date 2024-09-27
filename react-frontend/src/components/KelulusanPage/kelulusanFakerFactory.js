
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
latihan: faker.lorem.sentence(""),
pelulus: faker.lorem.sentence(""),
status: faker.lorem.sentence(""),
komen: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
