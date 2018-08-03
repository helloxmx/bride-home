let res = {
    //
    oAuthTypeFn: function(){
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array(['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']);
        var oAuthTypeObj = {oAuthType:'AUTH_WEBSITE'} ;

        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                oAuthTypeObj.oAuthType = 'AUTH_MOBILE';
                break;
            }
        }
        return oAuthTypeObj;
    },
    //设备判断
    navigatorFn: function(){
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array(['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']);
        var flag = true;//pc为true

        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;//移动设备为false
                break;
            }
        }
        return flag;
    },
    //屏幕宽度计算
    vWidthFn: function(){
        var vWidth = $(window).width();
        var flag = true;//pc为true

        $(window).on('resize',function() {
            vWidth = $(window).width()
        });

        if (vWidth < 1024) {
            flag = false;
        }

        return flag;
    }
}

export default res;