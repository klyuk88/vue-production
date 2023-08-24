export interface IResponse<D,E> {
    status: boolean;
    data?: D;
    error?: E;
}
export interface IDataProvider<D,E> {
    get: (url: string) => Promise<IResponse<D,E>>
}



