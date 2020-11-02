import { IAccountModel } from '../import-all'

export interface IAddAccountModel {
  [field: string]: string | object
  name: string
  email: string
  password: string
  passwordConfirmation: string
  address: {
    [field: string]: string
    cep: string
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
  }
}

export interface IAddAccount {
  add: (accountData: IAddAccountModel) => Promise<IAccountModel>
}