/* 
* @Author: Marte
* @Date:   2016-11-10 14:25:25
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-10 15:29:43
*/
$(function(){
    $('.del').click(function(e){
        var target = $(e.target)
        var id = target.data('id')
        var tr = $('.item-id-' + id)

        $.ajax({
            type: 'DELETE',//异步请求类型是删除
            url: '/admin/list?id=' + id
        })
        .done(function(results){//删除成功 服务器返回状态
            if(results.success === 1){//如果删除成功了
                if(tr.length > 0 ){//这一行存在
                    tr.remove()
                }
            }
        })
    })
})
