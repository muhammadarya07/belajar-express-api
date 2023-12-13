import Validator from "fastest-validator";

function checkValidator(schema, input) {
    const v = new Validator()
    const a = v.compile(schema)
    return a(input)
}

export default checkValidator