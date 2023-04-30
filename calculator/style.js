//code javascript bang thu vien jquery
$(function(){
    var a = 0;
    var b = 0;
    var c = flag = 0;
    var result = $(".result");
    var mybutton = $(".content-bottom input");
    
    mybutton.click(function(){
        //reset ket qua khi nguoi dung nhan nut C
        if($(this).attr("id") == "clear"){
            result.val("");
            a = 0;
            b = 0;
        }else if(flag == 0){
            //khi nguoi dung nhan nut +, -, *, /
            if($(this).attr("class") == "color" && $(this).attr("value") != 0){
                flag = 1;
                c = $(this).attr("value");
                result.val("");
            }else{
                a = Number(a * 10);
                a = Number(a + Number($(this).attr("value")));
                result.val(a.toString());
            }
        }else{
            //tra ra ket qua khi nguoi dung nhan nut =
            if($(this).attr("value") == "="){
                let sum = 0;
                switch(c){
                    case "+": 
                        sum = Number(a + b);
                        break;
                    case "-": 
                        sum = Number(a - b);
                        break;
                    case "*": 
                        sum = Number(a * b);
                        break;
                    case "/": 
                        sum = Number(a / b);
                        break;
                }
                result.val(sum.toString())
                //thiet lap lai gia tri cho ket qua, so A, so B
                flag = 0;
                a = 0;
                b = 0;
            }else{
                b = Number(b * 10)
                b = Number(b + Number($(this).attr("value")));
                result.val(b.toString())
            }
        }
        
        return false;
    })
})

