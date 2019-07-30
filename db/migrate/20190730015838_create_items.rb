class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :title
      t.text :description
      t.string :image_url
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
