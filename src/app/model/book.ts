export interface Book {
  id?: number,
  title: string,
  description: string,
  author: string,
  img: string,
  pages: number,
  categoryId: number,
  year: number,
  rate: number,
  videoURL: string,
  category: {
    id:number,
    name:string
  }
 }
