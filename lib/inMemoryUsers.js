import fakeUsers from '../fakeUsers.json' assert { type: "json" };

export const inMemoryUsers = fakeUsers.map((user)=>{
    const names = user.name.split(' ');
    const first_name = names.shift();
    const last_name = names.join(' ');
    const profileFromUser = {
      id: user.id,
      first_name,
      last_name,
      phone: user.phone,
      email: user.email,
      address: [user.address.street, user.address.suite].join(' '),
      city: user.address.city,
      state: '',
      zip: user.address.zipcode,
      photo: user.photo,
      notes: user.website || ''
    }
    return profileFromUser;
});
