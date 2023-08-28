export default function (): void {
    console.log('========== Primitive Datatypes ==========');
    // Primitive Types..
    let sales: number = 123;
    let course: string = 'TypeScript';
    let is_published: boolean = true;

    console.log(`sales = ${sales} [${typeof sales}]`);
    console.log(`course = ${course} [${typeof course}]`);
    console.log(`is_published = ${is_published} [${typeof is_published}]`);


    console.log('========== Any Type ==========');
    // Any Types..
    let sales2;
    sales2 = 'ABC';
    sales2 = 123;
    
    console.log(`sales2 = ${sales2} [${typeof sales2}]`);
}