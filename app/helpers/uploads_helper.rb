module UploadsHelper
	
	def group_them (content, number)
		h, count = [], 1
		content.sample(content.length).each_slice(number) do |group_members|
			result = ("Group #{count}\n#{group_members.join(", ")}\n")
			h.push(result)
			count += 1
		end	
		return h
	end	

	
end

=begin
<div>
	<% our_file, count, h = Upload.first, 1, [] %>
	<% if our_file %>
		<h2>Please refresh page to re-group teams</h2>
		<% content = our_file.attachment.read.split("\n") %>
		<% content.sample(content.length).each_slice(3) do |group_members| %>
			<% result = ("Group #{count}\n#{group_members.join(", ")}\n") %>
			<% h.push(result) %>
			<% count += 1 %>
		<% end %>
		<% h.each do |groups| %>
			<h3><%= group_name = groups.split("\n").first %></h3><br>
			<h4><%=	group_mem = groups.split("\n")[1..-1].join(" ") %></h4>
		<% end %>
	<% else %>
		<h2>Please upload a .txt file containing the names of indiduals you wish to put into groups / teams. Notice!, each name should be on a new line. Thanks for using auto_draft</h2>	
	<% end %>
</div>
=end