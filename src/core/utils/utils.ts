import { Request, Response } from "express";

const generator = (controllerFunction: Function, params: string[], statusCode: number) => {
  return (req: Request, res: Response) => {
    try {
      const requestData: Record<string, any> = {};

      params.forEach(param => {
        const source = param.split('.');

        let value: any = req;
        let resultRef: any = requestData;

        for (const prop of source) {
          if (value && typeof value === 'object' && prop in value) {
            if (!resultRef[prop]) {
              if (prop !== source[source.length - 1]) {
                resultRef[prop] = {};
              } else {
                resultRef[prop] = value[prop];
              }
            }
            resultRef = resultRef[prop];
            value = value[prop];
          } else {
            resultRef[prop] = undefined;
            break;
          }
        }
      });
      
      const dataResponse = controllerFunction(requestData);

      return res.status(statusCode).json(dataResponse);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  };
}

export default generator;