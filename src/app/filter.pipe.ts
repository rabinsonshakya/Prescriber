import { Pipe, PipeTransform } from '@angular/core';
import { IPrescriber } from './IPrescriber';

@Pipe({

    name: 'SearchFilter'

})


export class PrescriberFilterPipe implements PipeTransform {


    filteredlist: IPrescriber[];
    transform(tempList: IPrescriber[], filterby: string): any[] {
        //debugger;

        filterby = (filterby) ? filterby.toLocaleLowerCase() : null;

        if (filterby) {
            this.filteredlist = tempList.filter(function (temp) {
                return (temp.firstName.toLocaleLowerCase().indexOf(filterby) != -1);
            });
            console.log(this.filteredlist);
            return this.filteredlist;

        } else {
            return tempList;
        }


    }
}
