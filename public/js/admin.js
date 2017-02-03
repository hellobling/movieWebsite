/* 
* @Author: Marte
* @Date:   2016-11-10 14:25:25
* @Last Modified by:   Marte
* @Last Modified time: 2017-02-03 14:41:39
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
    $('#douban').blur(function(){
        var douban = $(this);
        var id = douban.val();
        if(id){
            $.ajax({
                url: "https://api.douban.com/v2/movie/subject/" + id ,
                cache: true,
                type: 'get',
                dataType: 'jsonp',
                crossDomain: true,
                jsonp: 'callback',
                success: function(data){
                    $('#inputTitle').val(data.title)
                    $('#inputDoctor').val(data.directors[0].name)
                    $('#inputCountry').val(data.countries[0])
                    $('#inputPoster').val(data.images.large)
                    $('#inputYear').val(data.year)
                    $('#inputSummary').val(data.summary)
                }
            })
        }
    })
})
