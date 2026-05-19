pm.test("Status code is 201", () => {
    pm.response.to.have.status(201);
});

const expected = {
    first_name: pm.environment.get("first_name_for_verify"),
    last_name: pm.environment.get("last_name_for_verify"),
    phone: pm.environment.get("phone_for_verify"),
    email: pm.environment.get("email_for_verify"),
    gender: pm.environment.get("gender_for_verify")
};

const jsonBody = pm.response.json();

pm.test("Response body has correct data", () => {
    pm.expect(jsonBody).to.eql(expected.first_name);
    pm.expect(jsonBody.last_name).to.eql(expected.last_name);
    pm.expect(jsonBody.phone).to.eql(expected.phone);
    pm.expect(jsonBody.email).to.eql(expected.email);
    pm.expect(jsonBody.gender).to.eql(expected.gender);
});

pm.test("Response body has id", () => {
    pm.expect(jsonBody).to.have.property('id');
    pm.expect(jsonBody.id).to.be.a('number');
});

pm.test("Response body has first_name", () => {
    pm.expect(jsonBody).to.have.property("first_name").that.equals(expected.first_name);
});