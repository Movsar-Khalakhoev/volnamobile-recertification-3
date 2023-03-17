import { create } from "zustand";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  phone: string;
}

interface Store {
  users: User[];
  fetchUsers: VoidFunction;
  isLoading: boolean;
  sotBy: keyof User | undefined;
  sortType: "asc" | "desc" | undefined;
  setSort(by: keyof User | undefined, type: "asc" | "desc" | undefined): void;
  search: Partial<User>;
  setSearch<Key extends keyof Partial<User>>(key: Key, value: User[Key] | undefined): void;
}

export const useStore = create<Store>((set, get) => ({
  users: [],
  fetchUsers: async () => {
    set({ isLoading: true });
    await new Promise((res) => setTimeout(res, 500));
    let users = getDummyUsers();

    const sortType = get().sortType;
    const sortBy = get().sotBy;
    if (sortType !== undefined && sortBy !== undefined) {
      users = users.sort((a, b) => {
        if (sortType === "asc") return a[sortBy] > b[sortBy] ? -1 : 1;
        else return a[sortBy] > b[sortBy] ? 1 : -1;
      });
    }
    const search = get().search;

    if (Object.keys(search).length !== 0) {
      users = users.filter((user) => {
        return Object.keys(search).some((key) => {
          return String(user[key as keyof User])
            .toLowerCase()
            .includes(String(search[key as keyof User]).toLowerCase());
        });
      });
    }

    set({ users, isLoading: false });
  },
  isLoading: false,
  sotBy: undefined,
  sortType: undefined,
  search: {},
  setSort: (by, type) => {
    set({ sotBy: by, sortType: type });
    get().fetchUsers();
  },
  setSearch: (key, value) => {
    console.log(key, value);
    const { [key]: field, ...other } = get().search;
    set({ search: value === undefined ? other : { ...other, [key]: value } });
    get().fetchUsers();
  },
}));

const getDummyUsers = (): User[] => [
  {
    id: 1,
    firstName: "Terry",
    lastName: "Medhurst",
    age: 50,
    phone: "+63 791 675 8914",
    address: "1745 T Street Southeast",
  },
  {
    id: 3,
    firstName: "Terrill",
    lastName: "Hills",
    age: 38,
    phone: "+63 739 292 7942",
    address: "560 Penstock Drive",
  },
  {
    id: 4,
    firstName: "Miles",
    lastName: "Cummerata",
    age: 49,
    phone: "+86 461 145 4186",
    address: "150 Carter Street",
  },
  {
    id: 5,
    firstName: "Mavis",
    lastName: "Schultz",
    age: 38,
    phone: "+372 285 771 1911",
    address: "2721 Lindsay Avenue",
  },
  {
    id: 6,
    firstName: "Alison",
    lastName: "Reichert",
    age: 21,
    phone: "+351 527 735 3642",
    address: "18 Densmore Drive",
  },
  {
    id: 7,
    firstName: "Oleta",
    lastName: "Abbott",
    age: 31,
    phone: "+62 640 802 7111",
    address: "637 Britannia Drive",
  },
  {
    id: 8,
    firstName: "Ewell",
    lastName: "Mueller",
    age: 29,
    phone: "+86 946 297 2275",
    address: "5601 West Crocus Drive",
  },
  {
    id: 9,
    firstName: "Demetrius",
    lastName: "Corkery",
    age: 22,
    phone: "+86 356 590 9727",
    address: "5403 Illinois Avenue",
  },
  {
    id: 10,
    firstName: "Eleanora",
    lastName: "Price",
    age: 37,
    phone: "+60 184 408 0824",
    address: "8821 West Myrtle Avenue",
  },
  {
    id: 11,
    firstName: "Marcel",
    lastName: "Jones",
    age: 39,
    phone: "+967 253 210 0344",
    address: "2203 7th Street Road",
  },
  {
    id: 12,
    firstName: "Assunta",
    lastName: "Rath",
    age: 42,
    phone: "+380 962 542 6549",
    address: "6463 Vrain Street",
  },
  {
    id: 13,
    firstName: "Trace",
    lastName: "Douglas",
    age: 26,
    phone: "+1 609 937 3468",
    address: "87 Horseshoe Drive",
  },
  {
    id: 14,
    firstName: "Enoch",
    lastName: "Lynch",
    age: 21,
    phone: "+94 912 100 5118",
    address: "60 Desousa Drive",
  },
  {
    id: 15,
    firstName: "Jeanne",
    lastName: "Halvorson",
    age: 26,
    phone: "+86 581 108 7855",
    address: "4 Old Colony Way",
  },
  {
    id: 16,
    firstName: "Trycia",
    lastName: "Fadel",
    age: 41,
    phone: "+420 833 708 0340",
    address: "314 South 17th Street",
  },
  {
    id: 17,
    firstName: "Bradford",
    lastName: "Prohaska",
    age: 43,
    phone: "+420 874 628 3710",
    address: "1649 Timberridge Court",
  },
  {
    id: 18,
    firstName: "Arely",
    lastName: "Skiles",
    age: 42,
    phone: "+55 886 766 8617",
    address: "5461 West Shades Valley Drive",
  },
  {
    id: 19,
    firstName: "Gust",
    lastName: "Purdy",
    age: 46,
    phone: "+86 886 889 0258",
    address: "629 Debbie Drive",
  },
  {
    id: 20,
    firstName: "Lenna",
    lastName: "Renner",
    age: 41,
    phone: "+1 904 601 7177",
    address: "22572 Toreador Drive",
  },
  {
    id: 21,
    firstName: "Doyle",
    lastName: "Ernser",
    age: 23,
    phone: "+86 634 419 6839",
    address: "3034 Mica Street",
  },
  {
    id: 22,
    firstName: "Tressa",
    lastName: "Weber",
    age: 41,
    phone: "+34 517 104 6248",
    address: "3729 East Mission Boulevard",
  },
  {
    id: 23,
    firstName: "Felicity",
    lastName: "O'Reilly",
    age: 46,
    phone: "+63 919 564 1690",
    address: "5114 Greentree Drive",
  },
  {
    id: 24,
    firstName: "Jocelyn",
    lastName: "Schuster",
    age: 19,
    phone: "+7 968 462 1292",
    address: "3466 Southview Avenue",
  },
  {
    id: 25,
    firstName: "Edwina",
    lastName: "Ernser",
    age: 21,
    phone: "+86 376 986 8945",
    address: "1513 Cathy Street",
  },
  {
    id: 26,
    firstName: "Griffin",
    lastName: "Braun",
    age: 35,
    phone: "+62 511 790 0161",
    address: "600 West 19th Avenue",
  },
  {
    id: 27,
    firstName: "Piper",
    lastName: "Schowalter",
    age: 47,
    phone: "+60 785 960 7918",
    address: "1208 Elkader Court North",
  },
  {
    id: 28,
    firstName: "Kody",
    lastName: "Terry",
    age: 28,
    phone: "+81 859 545 8951",
    address: "210 Green Road",
  },
  {
    id: 29,
    firstName: "Macy",
    lastName: "Greenfelder",
    age: 45,
    phone: "+81 915 649 2384",
    address: "49548 Road 200",
  },
  {
    id: 30,
    firstName: "Maurine",
    lastName: "Stracke",
    age: 31,
    phone: "+48 143 590 6847",
    address: "81 Seaton Place Northwest",
  },
];
