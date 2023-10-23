export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  addres: UserAdress;
  geo: UserGeo;
}

interface UserAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface UserGeo {
  lat: string;
  lng: string;
}
