$(document).ready(function(){

	$("#exportxt").hide()
	$("#extract").hide()
	var content = $("#groupings")
	content.hide()

	Array.prototype.sample= function(num=1, cut){
    var A= cut? this:this.slice(0);
    A.sort(function(){
        return .5-Math.random();
    });
    return A.splice(0, num);
	}
	

	
	function group_people_show (stuff, number) {
	 h = []	
	 stuff = stuff.text().split("\n")
	 final = stuff.sample(stuff.length)
	 if ($(".range").val() >= 1){
	 	$("#exportxt").show()
		for(var count = 1; count <= stuff.length/number; count++) {
		 	h.push( "<h1>"
		 				+"Group " 
		 				+ count
		 				+"</h1>"  
		 	
		 				+ "<h3>" 
		 				+final.splice(0, number).join("<p/>") 
		 				+ "</h3>")	
		}
		return h.join("<br>")

		} else {
			h.push("<h4>" + "Please enter the number of people you want per group :-)" + "</h4>")
			return h.join("<br>")

		}
	}


	function group_people_pull (stuff, number) {
	 h = []	
	 stuff = stuff.text().split("\n")
	 final = stuff.sample(stuff.length)
	 if ($(".range").val() >= 1){
	 	$("#exportxt").show()
		for(var count = 1; count <= stuff.length/number; count++) {
		 	h.push( "Group " 
		 				+ count  
		 				+"\n"
		 				+final.splice(0, number).join(", ") )	
		}
		return h.join("\n")

		} else {
			h.push("Please enter a value in the text field" )
			return h.join("\n")
		}
	}



	$(".group_them").click(function(){
		$("#show").html(group_people_show(content, $(".range").val()))
		$("#extract").html(group_people_pull(content, $(".range").val()))

	})	
	// Get a reference to the link on the page
    // with an id of "exportxt"
    var a = document.getElementById("exportxt");
    // Set code to run when the link is clicked
    // by assigning a function to "onclick"
    a.onclick = function() {
    // Your code here...


    function downloadInnerHtml(filename, elId, mimeType) {
        var elHtml = document.getElementById(elId).innerHTML;
        var link = document.createElement('a');
        mimeType = mimeType || 'text/plain';
        link.setAttribute('download', filename);
        link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(elHtml));
        link.click(); 
    }
    var fileName =  'groups_of_'+ $('.range').val() + '.txt'; // You can use the .txt extension if you want
    downloadInnerHtml(fileName, 'extract','text/plain');
                // If you don't want the link to actually 
                // redirect the browser to another page, then
                // return false at the end of this block.
                // Note that this also prevents event bubbling,
                // which is probably what we want here, but won't 
                // always be the case.
                return false;
    }

    $(".range").keyup(function(event){
	    if(event.keyCode == 13){
	        $(".group_them").click();
	    }
	});
})