//搜索
function search() {
	var searchBtn = $('#search-btn'),
		searchname = $('#search-name');
	searchBtn.click(function() {
		wxhot(searchname.val());
	})
}
search()


function wxhot(word) {
	var wxhotObj = {},
		apikey = 'fcde02d9f9615cd5aa6e94aeca31cb2d',
		num = 20,
		rand = 1,
		word ,
		page = 1,
		src = null;
		if (word==undefined) {
			word='苹果';
		} else{
			word=word;
		}
	$.ajax({
		type: "get",
		url: "//apis.baidu.com/txapi/weixin/wxhot",
		data: {
			num: num,
			rand: rand,
			word: word,
			page: page,
			src: src

		},
		beforeSend: function(request) {
			request.setRequestHeader('apikey', apikey);
		},
		success: function(data) {
			wxhotObj = data.newslist;
			wxhotList();
		},
		error: function(jqXHR) {
			console.log('发生错误:' + jqXHR.status);
		}

	});

	function wxhotList() {
		var contentHtml = $('#content-html'),
			timeTxt = '';
		$.each(wxhotObj, function(i, tiem) {
			timeTxt += '<li><a href="' + tiem.url + '"><div class="content-img"><img src="' + tiem.picUrl + '"/></div>\
						<h3>' + tiem.title + '</h3>\
						<p><span>' + tiem.description + '</span><span class="ctime">' + tiem.ctime + '</span></p></a>\
					</li>'
			contentHtml.html(timeTxt);
		});
	};

}
wxhot();
