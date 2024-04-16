class CreateInvalidFeatures < ActiveRecord::Migration[7.1]
  def change
    create_table :invalid_features do |t|
      t.string :type, default: 'feature'
      t.string :external_id
      t.float :magnitude
      t.string :place
      t.string :time
      t.boolean :tsunami
      t.string :mag_type
      t.string :title
      t.float :longitude
      t.float :latitude
      t.string :external_url

      t.timestamps
    end
  end
end
