$(function(){
    var list_mission = $(".content-mission");
    var close = $(".close");
    var container = $(".container");
    var dongy = $(".the-mission button");
    var mymoney = $(".content-top h1");
    var allmoney = $(".take-money button");
    var displaymoney = $(".take-money input");
    var takemoney = $(".submit button");

    list_mission.click(function(){
        var infor_mission = $($(this).attr("data-method"));
        infor_mission.show();
        container.addClass("myhide");
        return false;
    })
    
    close.click(function(){
        var infor_mission = $($(this).attr("data-method"));
        container.removeClass("myhide");
        infor_mission.hide();
        return false;
    })

    dongy.click(function(){
        var infor_mission = $($(this).attr("data-method"));
        container.removeClass("myhide");
        infor_mission.hide();
        return false;
    })

    allmoney.click(function(){
        displaymoney.val(mymoney.text())
        return false;
    })

    takemoney.click(function(){
        $(".error").show();
        if(Number(mymoney.text()) > Number(displaymoney.val())){
            mymoney.text((Number(mymoney.text())-Number(displaymoney.val())).toString())
            $(".error").text("bạn vừa rút " + displaymoney.val() + " đồng")
        }else{
            $(".error").text("số dư của bạn không đủ để rút")
        }
    })
})