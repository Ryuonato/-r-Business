$.getJSON("https://www.reddit.com/r/business/new.json?sort=new",
	function getBusiess(data) { 
		$.each(data.data.children.slice(0,4), 
			function (i, post) {
				$("#cardHolder").append( '<div class="card card'+ (i + 1) + '"></div>');
				$(".card" + (i + 1)).append( '<a href="'+post.data.url+'"><h2 class="title">' + post.data.title + '</h2>' ); //title + post link
             	$(".card" + (i + 1)).append( '<hr>' );
				$(".card" + (i + 1)).append( '<a href="https://www.reddit.com/'+post.data.permalink+'"><div class="cardbelow numComments">' + post.data.num_comments + ' comments</div></a>' ); //number of comments
              	$(".card" + (i + 1)).append( '<div class="cardbelow author">Submitted by&nbsp;<a href="https://www.reddit.com/user/'+post.data.author+'">' + post.data.author + '</div>' ); //author
              }
            )
	}
	);