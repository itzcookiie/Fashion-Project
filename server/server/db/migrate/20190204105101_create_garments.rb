class CreateGarments < ActiveRecord::Migration[5.2]
  def change
    create_table :garments do |t|
      t.string :category
      t.string :image_url
      t.string :colour
      t.integer :user_id
    end
  end
end
