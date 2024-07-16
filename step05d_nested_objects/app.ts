type Author = {
    firstName:string,
    lastName:string
};

type Book = {
    author:Author,
    name:string
};

const myBook:Book = {
    author: {
        firstName: "Nabeel",
        lastName: "Ali"
    },
    name: "My Best Book"
};