import axios, {type AxiosError, type AxiosInstance, type AxiosResponse} from "axios";
import type {IDataProvider} from "@/core/domain/dataProvider";

export type TAxiosProviderGet<D = any> = ReturnType<IDataProvider<AxiosResponse<D>, AxiosError>['get']>;
export class AxiosProvider implements IDataProvider<AxiosResponse, AxiosError> {
    instance: AxiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
    })
    async get(url: string): TAxiosProviderGet {
        try {
            const res = await this.instance.get(url)
            return {
                status: true,
                data: res,
            };
        } catch (e) {
            const err = e as AxiosError
            return {
                status: false,
                error: err
            }
        }
    }
}
