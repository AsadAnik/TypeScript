# TypeScript

TypeScript is the Language which is developed by Microsoft itself. We all knows that, TypeScript is the superset of JavaScript. It means we can use type casting every single time by using TypeScript, but yes again we have types on JavaScript but we don’t using that consistency when we are using JavaScript alone. That’s why there is TypeScript for us. That allow us with more versatile features top of JavaScript.

## Types by Inference

```tsx
// Types by inference..
let helloWorld: string = "Hello World";
console.log(helloWorld);
```

## Defining Types

Let’s see the definition of object which we call `Interfaces` to be the shape of data object model.

You can explicitly describe this object’s shape using an `interface` declaration:

```tsx
// Defining Types..
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Asad Anik",
    id: 1,
};

console.log(user);
```

⇒ Defining types at Classes with `interface` by declaring at object field again.

```tsx
// Interface with Classes..
interface Car {
    brand: string;
    price: number;
    model: string;
}

class CarModel {
    brand: string;
    price: number;
    model: string;

    constructor(brand: string, price: number, model: string){
        this.brand = brand;
        this.price = price;
        this.model = model;
    }
}

const myCar: Car = new CarModel("Haval", 3400000, "Jolio");
const carName = myCar.brand;
console.log(carName);
```

⇒ Now let’s using with Function and with Function’s return types.

```tsx
// Function Example here...
function sumNum(num1: number, num2: number): number{
    return num1 + num2;
}

const callSumNum = sumNum(12, 12);
console.log(callSumNum);
```

## Composing Types

TypeScript supports the complex types by combining simple one. There are two ways to do so: with **union**, and with **generics**

**→ Unions**

With a union, you can declare that a type could be one of many types. For example, you can describe a `boolean` type as being either `true` or `false`:

```tsx
// Checking the Union and Generics types at TypeScript..
type MyBool = true | false;

// Most popular use cases for Union..
type WindowStatus = "open" | "closed" | "minimized";
type LockeStatus = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

⇒ Unions provide a way to handle different types too. For example, you may have a function that takes an `array` or a `string`:

```tsx
// Union with Function that can take different Types..
function getLength(obj: string | string[]): number{
    return obj.length;
}

const callGetLength = getLength(["Asad", "Anik"]);
console.log(callGetLength);
```

**→ Generics**

Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

```tsx
// Generics Example..
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{name: string, age: number}>
```

We can use our own types that use Generics:

```tsx
interface CarPack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const carPack: CarPack<string>;

// Since the backpack variable is a string, you can't pass a number to the add function.
carPack.add("Range Rover");

// object is a string, because we declared it above as the variable part of Backpack.
const object = carPack.get();
```

## Structural Type System

One of TypeScript’s core principles is that type checking focuses on the *shape* that values have. This is sometimes called “duck typing” or “structural typing”.

In a structural type system, if two objects have the same shape, they are considered to be of the same type.

**→ 1st Example**

```tsx
// Structural Type System..
interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point){
    console.log(`${p.x}, ${p.y}`);
}

// logs "12, 36"
const point = { x: 12, y: 22 }; 
logPoint(point);
```

**→ 2nd Example**

```tsx
// Example with Classes..
class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    public getValues(): void{
        console.log(`${this.x}, ${this.y}`);
    }
}

const newVPoint = new VirtualPoint(13, 33);
logPoint(newVPoint);

// With Built-In method of class..
newVPoint.getValues();
```

# Introduction to TypeScript

- Setting up the development environment
    - Creating your first TypeScript program
    - Configuring the TypeScript compiler
- Debugging TypeScript applications

**⇒ Benefits of TypeScript,**

![Screenshot 2023-08-16 at 11.59.05 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af8b8bc2-5275-49ec-877f-d18fa23bfbe5/Screenshot_2023-08-16_at_11.59.05_PM.png)

**⇒ TypeScript Compiles into JavaScript for Browser understandability.**

![Screenshot 2023-08-17 at 12.04.12 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/93c40572-feae-42c4-9014-52ad31c305c1/Screenshot_2023-08-17_at_12.04.12_AM.png)

## Setting Up the Development Environment

- Installing TypeScript for Compile code
- Configuring the TS Compiler for Project

### Installing TypeScript for Compile code

1. Install TypeScript globally to use anywhere,
    
    > **sudo npm install —global typescript**
    > 
    
    Or,
    
    > **npm install —global typescript**
    > 
2. Check the version of TypeScript compiler,
    
    > **tsc —version**
    > 
3. Let’s make Run hello world with **tsc** compiler,
    - **—> index.ts**
        
        ```tsx
        let sentense: string = "Hello World";
        console.log(sentense);
        ```
        
    
    **⇒ Run the Code,**
    
    > **tsc index.ts**
    > 
    
    <aside>
    💡 Then finally after running the code for compiled it, we will see the **.js** file which is named with **index.js** who compiles from **index.ts** file. And welcome for TS world.
    
    </aside>
    

### Configuring the TS Compiler for Project

So firstly, we have to run initialisation for projects configurations file of TypeScript compiler,

→ Open any folder with terminal or create one, then write this command,

> **tsc —init**
> 

Then we will found the **tsconfig.json** file, which is for compiler settings / configurations. Here is our configuration file, which is mostly commented configures with description, this is useful for anything we have to do with compilation as our projects requirements.

- **—> tsconfig.json**
    
    ```json
    {
      "compilerOptions": {
        /* Visit https://aka.ms/tsconfig to read more about this file */
    
        /* Projects */
        // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
        // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
        // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
        // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
        // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
        // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */
    
        /* Language and Environment */
        "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
        // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
        // "jsx": "preserve",                                /* Specify what JSX code is generated. */
        // "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
        // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
        // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
        // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
        // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
        // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
        // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
        // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
        // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */
    
        /* Modules */
        "module": "commonjs",                                /* Specify what module code is generated. */
        // "rootDir": "./",                                  /* Specify the root folder within your source files. */
        // "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
        // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
        // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
        // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
        // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
        // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
        // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
        // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
        // "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
        // "resolvePackageJsonExports": true,                /* Use the package.json 'exports' field when resolving package imports. */
        // "resolvePackageJsonImports": true,                /* Use the package.json 'imports' field when resolving imports. */
        // "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */
        // "resolveJsonModule": true,                        /* Enable importing .json files. */
        // "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */
        // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */
    
        /* JavaScript Support */
        // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
        // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
        // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */
    
        /* Emit */
        // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
        // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
        // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
        // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
        // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
        // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
        // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
        // "removeComments": true,                           /* Disable emitting comments. */
        // "noEmit": true,                                   /* Disable emitting files from a compilation. */
        // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
        // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
        // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
        // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
        // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
        // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
        // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
        // "newLine": "crlf",                                /* Set the newline character for emitting files. */
        // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
        // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
        // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
        // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
        // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
        // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */
    
        /* Interop Constraints */
        // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
        // "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */
        // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
        "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
        // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
        "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    
        /* Type Checking */
        "strict": true,                                      /* Enable all strict type-checking options. */
        // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
        // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
        // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
        // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
        // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
        // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
        // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
        // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
        // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
        // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
        // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
        // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
        // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
        // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
        // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
        // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
        // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
        // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */
    
        /* Completeness */
        // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
        "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
      }
    }
    ```
    

## Debugging TypeScript application
First of all we have to enable the source map feature for mapping codes for JavaScript. To do so, you have to make one configuration enable which is **“sourceMap”: true** and then it will enables source map when runs the code immediately create a map file for you.

**⇒ When you debugs with VS-Code and then select to create .json file when debugging,**

- **—> launch.json**
    
    ```json
    {
        // Use IntelliSense to learn about possible attributes.
        // Hover to view descriptions of existing attributes.
        // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "type": "node",
                "request": "launch",
                "name": "Launch Program",
                "skipFiles": [
                    "<node_internals>/**"
                ],
                "program": "${workspaceFolder}/dist/app.js",
                "preLaunchTask": "tsc: build - tsconfig.json",
                "outFiles": [
                    "${workspaceFolder}/**/*.js"
                ]
            }
        ]
    }
    ```
    

<aside>
💡 Then after you did debugging file creating done, then try to make run with shortcuts which is given on VS-Code Editor. Then try to understand the variables changes, call-stacks, and watch modes from F10 (Start Over) from debug runner.

</aside>

## TypeScript Types
- Built-In Types
- Any Types

## Built-In Types

JavaScript types are added also new Types provides by TypeScript it-self. So we can make combine with, we got in TypeScript 11 Built-In Types 😎🥳.

**⇒ JavaScript Types**

- Number
- String
- Boolean
- Null
- Undefined
- Object

**⇒TypeScript Types**

- Any
- Unknown
- Never
- Enum
- Tuple

![Screenshot 2023-08-19 at 1.39.55 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a6f56cda-c153-40fb-9506-16799f93dd2f/Screenshot_2023-08-19_at_1.39.55_PM.png)

### Primitive Datatypes

There are some Primitive Datatypes on TypeScript,

1. **Number  |**  2.  **String |**  3.  **Boolean**

```tsx
let sales: number = 1234;
let course: string = 'TypeScript';
let is_published: boolean = true;
```

<aside>
💡 But when you don’t provides any types, TypeScript will defined it as **any** type.

</aside>

## The Any Type

```tsx
// Any Types..
let sales2;
sales2 = 'ABC';
sales2 = 123;

console.log('========== Any Type ==========');
console.log(`sales2 = ${sales2} [${typeof sales2}]`);
```

## Array
In TypeScript, arrays are used to store collections of values of the same type, and interfaces define the structure of objects. Combining arrays with interfaces can lead to powerful data structures that represent real-world scenarios more accurately.

We can use Arrays with strongly typed in TypeScript. Thats why we use type-annotations before declaring the Arrays.

```tsx
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
```

⇒ So let’s traversing the Array, when you declared this array as strongly typed and then using to traversing it with loop throw. Then you can access all numbers built-in method by default from suggestions list. That is another benefit of using type-annotations. 

Many methods related to numbers array like, toExponential(), toFixed(), toLocalString(), toPrecision(), valueOf(), and etc. So thats all for numbers object.

```tsx
let numbers: number[] = [];
numbers.forEach(n => n.toPrecision());
```

<aside>
💡 And we don’t get this thing on JavaScript

</aside>

### Interfaces and Arrays:

`Interfaces` can be used to define the structure of elements in an array. This is particularly useful when you want to ensure consistency across the items stored in the array.

```tsx
interface Book {
	title: string;
	author: string;
	pages: number;
}

let library: Book[] = [
	{ title: "The Great Getsby", author: "F. Scott Fitzgerald", pages: 180 },
	{ title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
	{ title: "Mastery Engineering", author: "Asad Anik", pages: 350 }
];
```

### Real-life examples of arrays and interfaces:

1. **Student Grades:**
    
    Arrays can store collections of `student grades`, and interfaces can define the structure of each grade.
    
    ```tsx
    interface Grade {
        subject: string;
        score: number;
    }
    
    let studentGrades: Grade[] = [
        { subject: "Math", score: 90 },
        { subject: "English", score: 85 },
        { subject: "History", score: 78 }
    ];
    ```
    
2. **Shopping Cart:**
    
    Arrays can be used to represent items in a `shopping cart`, and an interface can define the structure of each item.
    
    ```tsx
    interface CartItem {
        productId: number;
        name: string;
        price: number;
        quantity: number;
    }
    
    let shoppingCart: CartItem[] = [
        { productId: 1, name: "Laptop", price: 999, quantity: 1 },
        { productId: 2, name: "Headphones", price: 50, quantity: 2 }
    ];
    ```
    
3. **Todo List:**
    
    Arrays can store `todo` items, and an interface can define the structure of each item.
    
    ```tsx
    interface TodoItem {
        id: number;
        task: string;
        completed: boolean;
    }
    
    let todos: TodoItem[] = [
        { id: 1, task: "Finish project", completed: false },
        { id: 2, task: "Buy groceries", completed: true }
    ];
    ```
    
4. **Employee Records:**
    
    Arrays can hold `employee records`, and interfaces can define the structure of each record.
    
    ```tsx
    interface Employee {
        id: number;
        name: string;
        position: string;
        salary: number;
    }
    
    let employees: Employee[] = [
        { id: 1, name: "Alice", position: "Manager", salary: 60000 },
        { id: 2, name: "Bob", position: "Developer", salary: 50000 }
    ];
    ```
    

<aside>
💡 Using interfaces with arrays helps ensure that the data stored in the arrays adheres to a consistent structure, making your code more maintainable and easier to understand. It also allows you to leverage TypeScript's type checking to catch potential errors early in the development process.
</aside>

## Tuples
In TypeScript, a tuple is a data structure that allows you to store a fixed-size collection of elements, where each element can have a different type. Tuples are similar to arrays, but they have a specific length and a specific type for each element at a defined index. Tuples are often used when you want to represent a collection of values with different types and a known order.

Here's an example of a tuple that represents a person's information: name (string), age (number), and whether they are employed (boolean):

```tsx
let person: [string, number, boolean];
person = ["Sadia Lima", 20, true];
```

Or, we can initialise in single statement,

```tsx
const user: [number, string] = [1, 'Asad Anik'];
```

<aside>
💡 In this example, **`person`** & **`user`** is a tuple that contains a string, a number, and a boolean in that order.

</aside>

## **Real-life examples of tuples:**

1.  **Coordinates:** 
    
    Tuples can be used to represent `coordinates`, such as latitude and longitude, which are of different types.
    
    ```tsx
    let coordinates: [number, number] = [40.7128, -74.0060];
    ```
    
2. **RGB Color Values:** 
    
    Tuples can represent `RGB color values` with three numbers ranging from 0 to 255.
    
    ```tsx
    let backgroundColor: [number, number, number] = [255, 0, 128]; // Bright pink
    ```
    
3. **HTTP Response:** 
    
    When dealing with `HTTP responses`, you might have a tuple containing the response status code and the response data.
    
    ```tsx
    let httpResponse: [number, string, object] = [200, "Success", { data: 2023 }];
    ```
    
4. **Date and Time:** 
    
    You can represent a `date and time` using a tuple with a number for the year, month, day, hour, minute, and second.
    
    ```tsx
    let dateTime: [number, number, number, number, number, number] = [2023, 8, 28, 12, 30, 0];
    ```
    
5. **Key-Value Pairs:** 
    
    Tuples can also be used to represent `key-value pairs` in a limited fashion.
    
    ```tsx
    let keyValue: [string, any] = ["username", "john_doe"];
    ```
    
## Enums
In TypeScript, an enum is a way to define a set of named constant values. Enums allow you to create a collection of related values that have a clear and meaningful name, making your code more readable and expressive. Enums are particularly useful when you have a group of values that are closely related and represent a specific concept.

```tsx
enum Direction { Up, Down, Left, Right };
```

<aside>
💡 In this example, the **`Direction`** enum has four values: **`Up`**, **`Down`**, **`Left`**, and **`Right`**. By default, these values are assigned numeric values starting from 0 (e.g., **`Up`** is 0, **`Down`** is 1, and so on). However, you can also explicitly assign values to enum members.

</aside>

⇒ Another great Example for understanding the **`Enum`,**

```tsx
enum Size { Small, Medium, Large };
console.log(Size);
```

> {
  '0': 'Small',
  '1': 'Medium',
  '2': 'Large',
  Small: 0,
  Medium: 1,
  Large: 2
}
> 

<aside>
💡 Then we can access the enums data with multiple ways.

</aside>

**Example →**

```tsx
enum Size { Small, Medium, Large };
console.log(Size);

// Access values with multiple ways..
let mySize = Size.Small;
console.log(`My Size - ${mySize}`);

let mySize2 = Size['Medium'];
console.log(`My Size 2 - ${mySize2}`);
```

⇒ Also its `automatically increments` the values of variable it-self. And when we defined some of value then its iterates with this value. 

For Example →

```tsx
// Starting with other values..
enum Width { Sm = 2, Md, Lg };
console.log(Width);
```

### Real life Examples

1. **Days of the Week:** 
    
    Enums are commonly used to represent `days of the week`.
    
    ```tsx
    enum DaysOfWeek = { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
    
    let today: DaysOfWeek = DaysOfWeek.Friday;
    console.log(today);
    ```
    
    > 5
    > 
2. **Cardinal Directions:** 
    
    As shown earlier, enums can be used to represent `cardinal directions`.
    
    ```tsx
    enum CardinalDirections { North, South, East, West };
    
    let heading: CardinalDirections = CardinalDirections.North;
    console.log(heading);
    ```
    
    > 0
    > 
3. **HTTP Status Codes:** 
    
    Enums can be used to represent `HTTP status codes` with meaningful names.
    
    ```tsx
    enum HttpStatus { OK = 200, NotFound = 404, InternalServerError = 500 };
    
    let responseCode: HttpStatus = HttpStatus.NotFound;
    console.log(`Page Not Found ${responseCode}`);
    ```
    
    > Page Not Found 404
    > 
4. **Colors:** 
    
    Enums can also be used to represent `colors`.
    
    ```tsx
    enum Color { Red = '#FF0000', Green = '#00FF00', Blue = '#0000FF' };
    
    let selectColor = Color.Green;
    console.log(`Green Color Code - ${selectColor}`);
    ```
    
    > Green Color Code - #00FF00
    > 
5. **Months:** 
    
    Enums can represent `months` of the year.
    
    ```tsx
     enum Month { January = 1, February, March, April, May, June, July, August, September, October, November, December };
        
    let currentMonth = Month.July;
    console.log(`Special Month - ${currentMonth}`);
    ```
    
    > Special Month - 6
    >

## Functions
In TypeScript, functions are an essential part of the language, just like in JavaScript. Functions in TypeScript can have parameter types, return types, and can be assigned to variables, passed as arguments, or returned from other functions. TypeScript's static type checking helps catch potential errors early in the development process.

### **Defining Functions:**

⇒ In TypeScript, you can define functions using `type annotations` for parameters and return types. Here's a simple example:

```tsx
function add(a: number, b: number): number {
    return a + b;
}
```

<aside>
💡 In this example, the **`add`** function takes two parameters of type **`number`** and returns a value of type **`number`**.

</aside>

### Define Function with Types:

Inside type we can say how our functions shape is looks like. And then can be use like Functional Programming (Using Statement instead of Expression)

```tsx
// Function with Types..
type MathOperation = (a: number, b: number) => number;

const addition: MathOperation = function(a, b) {
		return a + b;
};

const sumation = addition(10, 5);
console.log(`Addition : ${sumation}`);
```

> Addition : 15
> 

<aside>
💡 Here, **`MathOperation`** is a type representing a function that takes two **`number`** parameters and returns a **`number`**.

</aside>

### Optional & Default Parameter:

**⇒ Optional Parameter,**

```tsx
// Function with default value..
function yourName(fname: string, Mname: string, lname?: string): string {
		return `My name is ${fname} ${Mname} ${lname || ''}`;
};

const myFullName = yourName("Asad", "Anik");
console.log(myFullName);
```

> My name is Asad Anik
> 

**⇒ Default Parameter,**

```tsx
// Default Parameter..
function calculateTax(income: number, taxYear = 2022): number {
	if (taxYear < 2023) {
			return income * 1.8;
	}
	return income * 1.2;
}

const myIncomeWithTax = calculateTax(84_000);
console.log(`My Income with Tax : ${myIncomeWithTax}`);
```

> My Income with Tax : 151200
> 

### Rest Parameter:

You can use rest parameters to capture multiple arguments as an array.

let’s solving this problem → `Sum of (1+2+3+4+5+……….+n = ?)`

```tsx
// Example of Rest Peramater..
function sumOfSerialNumbers(...numbers: number[]): number {
		return numbers.reduce((total, num) => total + num, 0);
}

const sumOfNumbers = sumOfSerialNumbers(1, 2, 3, 4, 5);
console.log(sumOfNumbers);
```

> 15
> 

### Higher-Order Functions:

You can define `higher-order functions` that take other functions as parameters or return them.

```tsx
// Function with Types..
type MathOperation = (a: number, b: number) => number;

const addition: MathOperation = function(a, b) {
		return a + b;
};

// Higher-Order Function..
function applyOperation(num1: number, num2: number, operation: MathOperation): number {
		return operation(num1, num2);
};

const result = applyOperation(23, 20, addition);
console.log(`Result of Addition - ${result}`);
```

> Result of Addition - 43
> 

### Callbacks:

`Callbacks` are commonly used in `asynchronous programming`. Here's a simplified example:

```tsx
// Callbacks..
function fetchData(callBack: (data: string) => void): void {
		// Simulate asynchronous data fetching..
		setTimeout(() => {
				callBack("Data Fetched!");
		}, 1000);
}

fetchData((data) => {
		console.log(data);
});
```

> Data Fetched!
> 

<aside>
💡 NOTE: You can use some configurations to see more optimise compiled JavaScript codes in TypeScript. From **tsconfig.json** enable → “**noUnusedLocals**”, “**noUnusedParameters**”, and “**noImplicitReturns**” to make **true**
</aside>

## Objects
In TypeScript, objects are one of the most fundamental concepts. Objects allow you to represent real-world entities, data structures, or concepts as collections of properties (also known as fields or attributes) and their corresponding values. Objects in TypeScript can have their own types, defined using interfaces or classes, which provide a blueprint for their structure and behaviour.

### **Defining Objects:**

You can define objects using curly braces

```tsx
let person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30
};
```

and specifying their properties along with their values.

<aside>
💡 In this example, **`person`** is an object with properties **`firstName`**, **`lastName`**, and **`age`**.
</aside>

⇒ Let’s see the Object with Type in it-self,

```tsx
const employee: { id: number, name: string, retire: (date: Date) => void } = {
	id: 1,
	name: "Asad Anik",
	retire: (date: Date) => {
		console.log(date);
	}
};
```

—> Now let’s see with some additional keywords to defining types, **`readonly`**

```tsx
const user: { readonly id: number, name: string } = {
	id: 2,
	name: 'John Doe'
};
```

### Object with Type-Aliases:

`Type aliases` allow you to create a new name for any type, including primitive types, union types, and object types. They are particularly useful when dealing with complex types or when you want to create a type that is based on an existing one.

```tsx
type UserProfile = {
    username: string;
    email: string;
    age: number;
};

let user: UserProfile = {
    username: "john_doe",
    email: "john@example.com",
    age: 25
};
```

### **Object Types with Interfaces:**

`Interfaces` in TypeScript allow you to define the structure of an object, including property names, types, and optionally whether they are required or optional.

```tsx
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

let person: Person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30
};
```

### Real-life Examples of Objects:

1. **User Profile:**
    
    Objects are commonly used to represent `user profiles` with various attributes.
    
    ```tsx
    interface UserProfile {
        username: string;
        email: string;
        age: number;
        isPremium: boolean;
    }
    
    let user: UserProfile = {
        username: "john_doe",
        email: "john@example.com",
        age: 25,
        isPremium: true
    };
    ```
    
2. **Product Information:**
    
    Objects can be used to represent `product information` with different properties.
    
    ```tsx
    interface Product {
        name: string;
        price: number;
        category: string;
        inStock: boolean;
    }
    
    let laptop: Product = {
        name: "Laptop",
        price: 999,
        category: "Electronics",
        inStock: true
    };
    ```
    
3. **Location Coordinates:**
    
    Objects can be used to represent `coordinates` of a location.
    
    ```tsx
    interface Coordinates {
        latitude: number;
        longitude: number;
    }
    
    let newYork: Coordinates = {
        latitude: 40.7128,
        longitude: -74.0060
    };
    ```
    
4. **Todo Task:**
    
    Objects can represent individual `todo` tasks.
    
    ```tsx
    interface TodoTask {
        id: number;
        title: string;
        description: string;
        isCompleted: boolean;
    }
    
    let task: TodoTask = {
        id: 1,
        title: "Complete project",
        description: "Finish the final report and submit.",
        isCompleted: false
    };
    ```

## Type-Alias & Interfaces
In TypeScript, both type aliases and interfaces are used to define custom data types. They provide a way to give a name to a shape of data, making your code more readable and maintainable. While they can often be used interchangeably, there are some differences in their behaviour and use cases.

### **Type Aliases:**

`Type aliases` allow you to create a new name for any type, including primitive types, union types, and object types. They are particularly useful when dealing with complex types or when you want to create a type that is based on an existing one.

```tsx
type UserID = number;
type Point = { x: number; y: number };
type Result = string | number;

let id: UserID = 123;
let origin: Point = { x: 0, y: 1 };
let value: Result = "success";
```

### **Interfaces:**

`Interfaces` define the shape of an object, specifying the names and types of its properties. They are mainly used to define contracts for object structures and can also include optional properties, methods, and more.

```tsx
interface Person {
	firstName: string;
	lastName: string;
	age: number;
}

let person: Person = {
	firstName: "Asad",
	lastName: "Anik",
	age: 23
};
```

### Real-life examples of Type Aliases & Interfaces:

1. **User Profile:**
    
    `Type aliases` can be useful for simplifying complex types.
    
    ```tsx
    type UserProfile = {
        username: string;
        email: string;
        age: number;
    };
    
    let user: UserProfile = {
        username: "john_doe",
        email: "john@example.com",
        age: 25
    };
    ```
    
2. **Function Signature:**
    
    `Interfaces` are great for describing function signatures.
    
    ```tsx
    interface MathOperation {
    	(a: number, b: number): number;
    }
    
    let add: MathOperation = (a, b) => a + b;
    let substract: MathOperation = (num1, num2) => num1 - num2;
    ```
    
3. **Product Information:**
    
    `Interface` can define the structure of an object, as seen earlier.
    
    ```tsx
    interface Product {
        name: string;
        price: number;
        category: string;
    }
    
    let laptop: Product = {
        name: "Laptop",
        price: 999,
        category: "Electronics"
    };
    ```
    
4. **Option Values:**
    
    `Type aliases` can be used to create readable types for option values.
    
    ```tsx
    type Option<T> = T | null | undefined;
    
    interface User {
        id: number;
        username: string;
        email: string;
    }
    
    function findUser(id: number): Option<User> {
        // Simulating database query
        const users: User[] = [
            { id: 1, username: "alice", email: "alice@example.com" },
            { id: 2, username: "bob", email: "bob@example.com" }
        ];
    
        const user = users.find(user => user.id === id);
        return user || null;
    }
    
    const user1 = findUser(1);
    
    if (user1) {
        console.log(`Found user with ID ${user1.id}: ${user1.username}`);
    } else {
        console.log("User not found");
    }
    
    const user2 = findUser(3);
    
    if (user2) {
        console.log(`Found user with ID ${user2.id}: ${user2.username}`);
    } else {
        console.log("User not found");
    }
    ```

## Union Types
In TypeScript, a union type allows you to specify that a value can have one of several types. This is useful when a variable, parameter, or return value could be of multiple types. Union types provide flexibility in scenarios where a value might have diverse possible forms.

**⇒ Syntax:**

You define a union type by separating the types with the **`|`** (pipe) symbol.

```tsx
let value: string | number;
```

<aside>
💡 In the example above, **`value`** can hold either a **`string`** or a **`number`**.
</aside>

### Real-life examples of union types:

1. **Phone Number or Email:**
    
    A field in a form could accept either a `phone number` or an `email address`.
    
    ```tsx
    type Contact = string | number;
    
    let email: Contact = "engr.asadanik@gmail.com";
    let phone: Contact = 1234567890;
    ```
    
2. **Currency Converter:**
    
    A currency converter function might accept either a specific `currency code` or an `exchange rate`.
    
    ```tsx
    type CurrencyInput = string | number;
    
    function convertCurrency(input: CurrencyInput): number {
        // Implementation...
    }
    
    let rate: CurrencyInput = 1.2; // Exchange rate
    let amount: CurrencyInput = "USD"; // Currency code
    ```
    
3. **User Authentication:**
    
    A function for user authentication could return either a `user object` or an `error message`.
    
    ```tsx
    type AuthResult = User | string;
    
    function authenticateUser(username: string, password: string): AuthResult {
        // Implementation...
    }
    
    let result: AuthResult = authenticateUser("john_doe", "password");
    if (typeof result === "string") {
        console.log("Authentication failed:", result);
    } else {
        console.log("Welcome,", result.username);
    }
    ```
    
4. **Database Query Results:**
    
    A function that queries a database might return either a `result object` or **`null`** if no data is found.
    
    ```tsx
    type DatabaseResult = { data: any } | null;
    
    function queryDatabase(query: string): DatabaseResult {
        // Implementation...
    }
    
    // Query to Get All Users..
    let query1: DatabaseResult = queryDatabase("SELECT * FROM users");
    
    if (query1) {
        console.log("Query result:", query1.data);
    } else {
        console.log("No data found.");
    }
    
    // Query to Get Products with ID = 123..
    let query2: DatabaseResult = queryDatabase("SELECT * FROM products WHERE id = 123");
    
    if (query2) {
        console.log("Query result:", query2.data);
    } else {
        console.log("No data found.");
    }
    ```
    

<aside>
💡 Union types allow you to express scenarios where a value can take on multiple, distinct types. They are a powerful tool for making your code more flexible and accommodating various data scenarios.
</aside>

## Intersection Types
In TypeScript, an intersection type allows you to combine multiple types into a single type that has the features of all the constituent types. This can be useful when you need to represent a value that has properties and methods from different sources. Intersection types provide a way to create more complex and specialised types.

**⇒ Syntax:**

You define an intersection type by using the **`&`** symbol between the types you want to intersect.

```tsx
type CombinedType = Type1 & Type2;
```

<aside>
💡 In the example above, **`CombinedType`** will include properties and methods from both **`Type1`** and **`Type2`**.

</aside>

### Here is an Example with TextBox functionality

Let’s say our `TextBox` has two features, `Draggable` & `Resizable` and now we have to make combination of each types for using wisely.

```tsx
type Draggable = {
	drag: () => void;
};

type Resizable = {
	resize: () => void;
};

// Useses of Intersection Type..
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
	drag: () => {},
	resize: () => {}
};
```

### Real-life examples of Intersection Types:

1. **Employee with Skills:**
    
    Imagine you want to represent an `employee` who is both a `person` (with personal information) and possesses certain `technical skills`.
    
    ```tsx
    type Person = {
    	firstName: string;
    	lastName: string;
    	age: number;
    };
    
    type TechnicalSkills = {
    	progammingLanguages: string[];
    	tools: string[];
    };
    
    // Useses of Intersection Type..
    type Employee = Person & TechnicalSkills;
    
    let employee: Employee = {
    	firstName: "Asad",
    	lastName: "Anik",
    	age: 23,
    	progammingLanguages: ["TypeScript", "Swift"],
    	tools: ["Web Storm", "Git", "VS Code"],
    };
    ```
    
2. **Admin User:**
    
    An admin user in a system might have both `user credentials` and `special privileges`.
    
    ```tsx
    type UserCredentials = {
        username: string;
        password: string;
    };
    
    type AdminPrivileges = {
        isAdmin: true;
        canManageUsers: true;
    };
    
    // Usese of Intersection Type..
    type AdminUser = UserCredentials & AdminPrivileges;
    
    let admin: AdminUser = {
        username: "admin",
        password: "secret",
        isAdmin: true,
        canManageUsers: true
    };
    ```
    
3. **Hybrid Vehicle:**
    
    A hybrid vehicle could have both properties of a `regular vehicle` and features of an `electric vehicle`.
    
    ```tsx
    type Vehicle = {
    	brand: string;
    	model: string;
    };
    
    type ElectricVehicle = {
    	batteryCapacity: number;
    	chargningTime: string;
    };
    
    // Useses of Intersection Type..
    type HybridVehicle = Vehicle & ElectricVehicle;
    
    let hybridCar: HybridVehicle = {
    	brand: "Toyota",
    	model: "CHR",
    	batteryCapacity: 10.5,
    	chargningTime: "2 hours"
    };
    ```
    

<aside>
💡 Intersection types allow you to create complex types by combining the properties and methods of multiple source types. This can be incredibly useful for mode real-world scenarios where entities inherit traits from different sources.
</aside>

## Literal Types
In TypeScript, literal types refer to types that represent a single, specific value. Literal types can be used to define exact values that a variable, parameter, or property can hold. They help make your code more precise by limiting the possible values to a certain set of options.

⇒ There are some Literal types,

- `String Literal Types`
- `Numeric Literal Types`
- `Boolean Literal Types`

### String Literal Types

`String literal` types allow you to specify that a variable can only have a certain string value.

```tsx
let gender: "male" | "female" | "other";
// We can use any of thoes valus from Literal Types..
gender = "female"; 
```

### **Numeric Literal Types**

`Numeric literal` types restrict the variable to a specific numeric value.

```tsx
let statusCode: 200 | 201 | 400 | 403 | 404 | 500;
// We can use any of thoes valus from Literal Types..
statusCode = 404;
```

### **Boolean Literal Types**

`Boolean literal` types limit the variable to either **`true`** or **`false`**.

```tsx
let isDone: true | false;
// We can use any of thoes valus from Literal Types..
isDone = true;
```

### **Real-life examples of literal types:**

1. **HTTP Status Codes:**
    
    Literal types can be used to represent specific `HTTP status codes`.
    
    ```tsx
    function handleResponses(status: 200 | 404 | 500): void {
    	if (status === 200) {
    		console.log("Success");
    
    	} else if (status === 404) {
    		console.log("Not Found");
    
    	} else if (status === 500) {
    		console.log("Internal Server Error");
    
    	}else {
    		console.log("Invalid Status Code!");
    	}
    }
    ```
    
2. **Configuration Settings:**
    
    Literal types can be used to define allowed `configuration values`.
    
    ```tsx
    type Theme = "Light" | "Dark" | "Auto";
    
    function setTheme(theme: Theme): void {
    	console.log(`That is our theme ${theme}`);
    }
    
    setTheme("light"); // valid 
    setTheme("purple"); // Error: Type '"purple"' is not assignable to type 'Theme'
    ```
    
3. **Days of the Week:**
    
    Literal types can be used to enforce valid `days of the week`.
    
    ```tsx
    type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
    
    function getWeekend(day: DayOfWeek): void {
    	if (day === "Saturday" || day === "Sunday") {
    		console.log("It's the Weekend!");
    	} else {
    		console.log("It's a Weekday.");
    	}
    }
    ```
    
    <aside>
    💡 Literal types help you create more precise and self-documenting code by explicitly specifying the allowed values for a variable or parameter. This can lead to fewer runtime errors and better code maintainability.
    </aside>

## Nullable Types
Nullable types in TypeScript allow you to indicate that a variable can have either its assigned type or a value of **`null`** or **`undefined`**. This is particularly useful when you want to explicitly represent the possibility of absence or lack of a value.

**⇒ Syntax:**

You can indicate a nullable type by adding **`| null`** or **`| undefined`** to the type declaration.

```tsx
let value: string | null;
let result: number | undefined;
```

⇒ Sometime Null types are not assignable to string types value or as arguments. Then we have to enable an option from `tsconfig.json` file. `“strictNullChecks”: false` . 

### **Real-life examples of nullable types**

1. **Optional Fields in User Profile:**
    
    In a `user profile`, some fields might be optional. `Nullable types` can be used to represent the possibility of these fields being absent.
    
    ```tsx
    interface UserProfile {
    	username: string;
    	email: string;
    	age?: number | null; // Age can be a Number or Null..
    	address?: string | null; // Address can be a String or Null..
    }
    
    let user1: UserProfile = {
    	username: "Asad Anik",
    	email: "engr.asadanik@gmail.com",
    	age: 23,
    	address: null
    };
    
    let user2: UserProfile = {
    	username: "Sadia Lima",
    	email: "sadia.lima@gmail.com"
    };
    ```
    
2. **API Response Handling:**
    
    When dealing with `API responses`, data might be present or absent. `Nullable types` can represent this uncertainty.
    
    ```tsx
    type ApiResponse<T> = {
    	success: boolean;
    	data: T | null;
    	error: string | null;
    };
    
    let response1: ApiResponse<string> = {
    	success: true,
    	data: "Hello, World",
    	error: null
    };
    
    let response2: ApiResponse<number[]> = {
    	success: false,
    	data: null,
    	error: "API Request Failed"
    };
    ```
    
3. **Database Query Results:**
    
    When `querying a database`, you might encounter scenarios where no data matches the query. `Nullable types` can handle these cases.
    
    ```tsx
    type DatabaseResult<T> = T | null;
    
    function queryDatabase<T>(query: string): DatabaseResult<T> {
    	// Implementation..
    }
    
    let query1: DatabaseResult<User> = queryDatabase<User>("SELECT * FROM users WHERE id = 1");
    
    if (query1) {
    	console.log("User found: ", query1);
    } else {
    	console.log("No user found.");
    }
    
    let query2: DatabaseResult<Product> = queryDatabase<Product>("SELECT * FROM products WHERE id = 123");
    
    if (query2) {
    	console.log("Product found: ", query2);
    } else {
    	console.log("No product found.");
    }
    ```
    

<aside>
💡 Nullable types provide a way to express the potential absence of a value and allow you to write more robust code when dealing with optional or uncertain data.
</aside>

## Optional Chaining
Optional chaining is a feature in TypeScript (and JavaScript) that allows you to safely access nested properties or call nested methods on an object without causing errors if any of the intermediate values is **`null`** or **`undefined`**. It helps you write more concise and robust code when dealing with potentially missing data.

**⇒ Syntax:**

The optional chaining operator is represented by the question mark **`?.`**.

```tsx
object?.property;
object?.method();
```

⇒ Let’s say about optional property access operator.

```tsx
type Customer = {
	birthday: Date
};

function getCustomer(id: number): Customer | null {
	return id === 0 ? null : { brithday: new Date() };
}

let customer = getCustomer(0);
// Optional property access operator..
console.log(customer?.birthday);
```

### **Real-life examples of optional chaining**

1. **Accessing Nested Object Properties:**
    
    Suppose you have a nested object structure representing a `user profile`, and you want to access the user's address information.
    
    ```tsx
    interface UserProfile {
    	username: string;
    	email: string;
    	address?: {
    		street: string;
    		city: string;
    		zipCode: number;
    	}
    }
    
    let user1: UserProfile = {
    	username: "asadanik",
    	email: "engr.asadanik@gmail.com",
    	address: {
    		street: "123 Main St.",
    		city: "Dhaka",
    		zipCode: 12345
    	}
    };
    
    let user2: UserProfile = {
    	username: "sadialima",
    	email: "sadia.lima@gmail.com"
    };
    
    console.log(user1.address?.city); // OUTPUT: "Dhaka"
    console.log(user2?.address?.city); // OUTPUT: undefined (no error)
    ```
    
2. **Calling Optional Methods:**
    
    You might have an object with an `optional method`, and you want to call that method if it's available.
    
    ```tsx
    interface Calculator {
        add: (a: number, b: number) => number;
        subtract?: (a: number, b: number) => number;
    }
    
    let calculator: Calculator = {
        add: (a, b) => a + b
    };
    
    console.log(calculator.add(3, 5)); // Output: 8
    console.log(calculator.subtract?.(10, 2)); // Output: undefined (no error)
    ```
    
3. **Working with API Responses:**
    
    When dealing with `API responses`, some data might be missing. Optional chaining can help you handle this gracefully.
    
    ```tsx
    interface ApiResponse {
        success: boolean;
        data?: {
            name: string;
            age: number;
        };
    }
    
    let response1: ApiResponse = {
        success: true,
        data: {
            name: "Alice",
            age: 30
        }
    };
    
    let response2: ApiResponse = {
        success: false
    };
    
    console.log(response1.data?.name); // Output: "Alice"
    console.log(response2.data?.name); // Output: undefined (no error)
    ```
    

<aside>
💡 Optional chaining allows you to access deeply nested properties and methods without explicitly checking for the presence of each intermediate value. It's especially useful when dealing with data that might be incomplete or uncertain.
</aside>
