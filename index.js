import { isValid as isValidCnpj } from "@fnando/cnpj";
import { isValid as isValidCpf } from "@fnando/cpf";

const cpf = {
  validate: (value) => isValidCpf(value),
};

const cnpj = {
  validate: (value) => isValidCnpj(value),
};

const cpfOrCnpj = {
  validate: (value) => isValidCpf(value) || isValidCnpj(value),
};

export { cpf }
export { cnpj }
export { cpfOrCnpj }
