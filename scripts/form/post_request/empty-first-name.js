export {};

pm.test("Status code is 422 Unprocessable Entity", () => {
    pm.response.to.have.status(422);
});

const jsonBody = pm.response.json();

pm.test("Response contains detail as an array of errors", () => {
    pm.expect(jsonBody).to.have.property("detail");
    pm.expect(jsonBody.detail).to.be.an("array");
    pm.expect(jsonBody.detail).to.have.lengthOf.at.least(1);
});

pm.test("Error concerns first_name field and is of type string_too_short", () => {
    const error = jsonBody.detail.find(err => err.loc.includes("first_name"));
    
    pm.expect(error).to.exist;
    pm.expect(error.type).to.eql("string_too_short");
    pm.expect(error.ctx.min_length).to.eql(1);
    pm.expect(error.msg).to.eql("String should have at least 1 character");
});