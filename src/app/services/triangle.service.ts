export class TriService{
    area(a,b,c){
        var s=(a+b+c)/2.0;
        var ar=Math.sqrt(s*(s-a)*(s-b)*(s-b));
        return ar;
    }
}