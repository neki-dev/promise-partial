export declare type IterateHandler = (item: any, index: number) => any[];
declare global {
    interface PromiseConstructor {
        PART_SIZE: number;
        partial: (values: any[], handler: IterateHandler, cluster?: number) => Promise<any[]>;
    }
}
