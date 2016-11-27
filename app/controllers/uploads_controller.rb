class UploadsController < ApplicationController
  def index
  	@uploads = Upload.all
  end

  def new
  	@upload = Upload.new
  end

  def create
  	@upload = Upload.new(upload_params)
  	if @upload.save
  		redirect_to uploads_path, notice: "The file #{@upload.filename} has been successfully uploaded"
  	else
  		render 'new'
  	end	
  end

  def destroy
  	@upload = Upload.find(params[:id])
  	@upload.destroy
  	redirect_to uploads_path, notice: "The file #{@upload.filename} has been successfully deleted"
  end

private
  def upload_params
  	params.require(:upload).permit(:filename, :attachment)
  end
end
