// Problem 1: formatValue
function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return !value;
}

// Problem 2: getLength
function getLength(value: string | any[]): number {
    if (Array.isArray(value)) {
        return value.length;
    }
    return value.length;
}

// Problem 3: Person class
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Problem 4: filterByRating
interface Movie {
    title: string;
    rating: number;
}

function filterByRating(movies: Movie[]): Movie[] {
    const result: Movie[] = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].rating >= 4) {
            result.push(movies[i]);
        }
    }
    return result;
}

// Problem 5: filterActiveUsers
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
    const result: User[] = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].isActive === true) {
            result.push(users[i]);
        }
    }
    return result;
}

// Problem 6: Book interface + printBookDetails
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): string {
    const availableText = book.isAvailable ? "Yes" : "No";
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableText}`;
}

// Problem 7: getUniqueValues
function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
    const result: (string | number)[] = [];

    for (let i = 0; i < arr1.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === arr1[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === arr2[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(arr2[i]);
        }
    }

    return result;
}

// Problem 8: calculateTotalPrice
interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        let itemTotal = products[i].price * products[i].quantity;

        if (products[i].discount !== undefined) {
            itemTotal = itemTotal - (itemTotal * products[i].discount / 100);
        }

        total += itemTotal;
    }

    return total;
}
