# Readme

Important:

- if using `tsc` in console, make sure you are in the folder with **tsconfig.json**
- if using `tsc fileName.ts` the compiler will use default settings, ignoring **tsconfig.json**

## Setup TypeScript Environment

- Install TS: `npm install -g typescript`
- Compile: `tsc app.ts`
- Initialize TS config: `tsc --init`
- run: `tsc` to compile all TS files in the folder
  - **declaration**: true → generates **.d.ts** (TypeScript type definition files) so others can use your code with full type info
  - **declarationMap**: true → generates **.d.ts.map** for source mapping declaration files (useful for libraries)
  - **sourceMap**: true → generates **.js.map** for debugging JS in browsers (maps JS back to TS source)

## TS features

- **Union Types**: `string | number`
- type assertions: `value as string`
- **Array Types**: `string[]` or `Array<string>`
- **Type Aliases**: `type MyType = string | number`
- **Interfaces**: `interface MyInterface { name: string; age: number; }`
- Interface vs type alias:
  - interfaces can be extended, type aliases cannot
  - interfaces are better for defining object shapes and force implementation in classes
  - type aliases are more flexible (can define unions, primitives, etc.)
- **Generics**: `function identity<T>(arg: T): T { return arg; }`

- tuples: `[string, number]`
