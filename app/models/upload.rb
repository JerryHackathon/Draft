class Upload < ApplicationRecord
	mount_uploader :attachment, AttachmentUploader # Tells rails to use this uploader for this model.
	validates 	   :filename, 	presence: true
end
