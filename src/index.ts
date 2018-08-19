import { either } from 'fp-ts'

const parse = (errorMessage: string) => (input: string): either.Either<string, number> => {
    const n = parseInt(input, 10);
    return isNaN(n) ? either.left(errorMessage) : either.right(n);
}

const parseAge = parse("Age is not valid");
const double = x => x*x;

const result = parseAge("ssss")
    .map(double);

console.log(result.inspect());

