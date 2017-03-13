import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'orderBy', pure: false})
export class OrderBy implements PipeTransform {
    transform(array: Array<string>, args: string): Array<string> {
        let desc = args.substr(0, 1) == '-';
        if (desc) {
            let index = Number(args.substr(1));
            array.sort((a: any, b: any) => {
                if (a[index] < b[index]) {
                    return 1;
                } else if (a[index] > b[index]) {
                    return -1;
                } else {
                    return 0;
                }
            })
        }
        else {
            let index = Number(args.substr(0));
            array.sort((a: any, b: any) => {
                if (a[index] < b[index]) {
                    return -1;
                } else if (a[index] > b[index]) {
                    return 1;
                } else {
                    return 0;
                }
            })
        }
        return array;
    }


}