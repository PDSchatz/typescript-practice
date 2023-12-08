# TypeScript Practice Problems

This repository contains a collection of TypeScript practice problems, each designed to challenge and improve your understanding of TypeScript's features and best practices.

## Structure

Problems are categorized within the src directory, with each problem contained in its own folder, such as compress or pack. Each folder contains two main files:

- index.ts: The TypeScript file where you should write your solution.
- index.test.ts: The test suite for the corresponding problem.

## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the repository's root directory.
3. Install the dependencies by running `npm install`.

## Running Tests

To test your solutions, you can run the test suites using Jest. Tests can be executed for all problems or individually.

- To run all tests, execute the following command:

	```
	npm test
	```

- To run tests for a specific problem, use the test script followed by the test name, which corresponds to a problem in the `src` directory. For example, to run tests for the compress problem, execute:
	```
	npm run test compress
	```
- Replace `compress` with the name of the problem you want to test. Make sure the name matches the directory name of the problem in the `src` folder.

### Note on Errors

If you encounter an error like the one below when running tests:

```
FAIL src/pack/index.test.ts
● Test suite failed to run

  src/pack/index.test.ts:1:22 - error TS2306: File '/Users/bob//typescript-practice/src/pack/index.ts' is not a module.
```

This indicates that the TypeScript compiler is having trouble recognizing the file as a module. This is often due to missing or incorrectly implemented exports in the TypeScript file. Ensure that your index.ts file uses proper module syntax, for example:

```
export function myFunction() {
  // Your code here
}
```

## Writing Solutions

To solve a problem:

1. Navigate to the corresponding problem directory under src.
2. Open the index.ts file.
3. Write your TypeScript code within this file. Make sure that the name of the function matches its corresponding directory. Also, ensure that you export the function properly ex:
	```
	export function youFunction(){}
	```
4. Ensure your solution passes the tests by running them as described above.

## Contributing

Feel free to fork this repo to add new problems by creating a new directory within the src folder and following the established naming convention. Your directory should include:

- An `index.ts` file for the problem's solution.
- An `index.test.ts` file containing tests for the problem.

Don't forget to export your function from `index.ts` and import it into your test file for testing.