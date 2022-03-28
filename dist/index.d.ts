import { IterateHandler } from './types';
/**
 * Default part size
 */
export declare const PART_SIZE = 1000;
/**
 * Partial Promise execution
 *
 * @param {Array} values - Array of promises values
 * @param {IterateHandler} handler - Callback for execute promise
 * @param {number} [cluster] - Size of part
 *
 * @returns {Array}
 */
export default function map(values: any[], handler: IterateHandler, cluster?: number): Promise<any[]>;
