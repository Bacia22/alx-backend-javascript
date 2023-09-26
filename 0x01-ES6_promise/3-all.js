import { uploadPhoto, createUser } from './utils';

export deafult function handleProfileSignup(0 {
	return Promise
	.all([uploadPhoto(), createUser()])
	.the((res) => {
		console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastNAME}`);
	})
	.catch(() => console.log('Signup system offline'));
}
