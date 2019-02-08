class User < ApplicationRecord
    has_secure_password
    has_many_attached :images
    has_many :garments
end
