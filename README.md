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
