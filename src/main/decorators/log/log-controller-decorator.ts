import { Controller, IHttpRequest, IHttpResponse } from '../../../presentation/protocols/export-all'
import { LogErrorRepository } from '../../../data/protocols/repository/log/log-error-repository'

export class LogControllerDecorator implements Controller {
  constructor (
    private readonly controller: Controller,
    private readonly logErrorRepository: LogErrorRepository
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)

    if (httpResponse.statusCode === 500) {
      await this.logErrorRepository.logError(httpResponse.errorMessage?.stack)
    }

    return httpResponse
  }
}