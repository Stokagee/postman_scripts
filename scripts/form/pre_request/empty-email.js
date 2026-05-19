export {};

const firstName = pm.variables.replaceIn('{{$randomFirstName}}');
const lastName = pm.variables.replaceIn('{{$randomLastName}}');
const phone = pm.variables.replaceIn('{{$randomPhoneNumber}}');
const email = pm.variables.replaceIn('{{$randomEmail}}');
const gender = ['male', 'female', 'other'];

pm.environment.set("first_name_for_verify", firstName);
pm.environment.set("last_name_for_verify", lastName);
pm.environment.set("phone_for_verify", phone);
pm.environment.set("email_for_verify", email);

const randomGender = gender[Math.floor(Math.random() * gender.length)];
pm.environment.set("gender_for_verify", randomGender);
