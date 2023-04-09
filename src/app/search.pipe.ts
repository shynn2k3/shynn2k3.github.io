import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], keyword: string): any[] {
    if (keyword) {
      keyword = keyword.toLowerCase();
      // if (keyword == '') return list;
      return list.filter(data =>  data.title.toLowerCase().includes(keyword))
    }
    return []
  }
}
